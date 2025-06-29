document.addEventListener('DOMContentLoaded', () => {

  // --- Theme Toggler Logic ---
  const setupThemeToggler = () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleSwitch = document.getElementById('theme-toggle-switch'); // Target the new switch
    if (!themeToggleSwitch) return; // Ensure the switch exists
    const body = document.body;
    const themeIcon = themeToggleSwitch.nextElementSibling.querySelector('i'); // Get the icon from the label

    const applyTheme = (theme) => {
      body.dataset.theme = theme;
      localStorage.setItem('theme', theme);
      themeToggleSwitch.checked = (theme === 'dark'); // Set the switch's state
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    };

    themeToggleSwitch.addEventListener('change', () => { // Listen for 'change' event on the switch
      const newTheme = themeToggleSwitch.checked ? 'dark' : 'light';
      applyTheme(newTheme);
    });

    // Check for saved theme on load, or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
  };

  // --- Courses Loading Logic ---
  const loadCourses = async () => {
    const coursesContainer = document.getElementById('courses-container');
    const coursesToggleContainer = document.getElementById('courses-toggle-container');
    if (!coursesContainer || !coursesToggleContainer) return;

    const INITIAL_ITEMS_VISIBLE = 10;

    const showLoading = () => {
      coursesContainer.innerHTML = `<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
      coursesToggleContainer.innerHTML = ''; // Clear toggle button while loading
    };

    const showError = () => {
      coursesContainer.innerHTML = '<p class="text-danger text-center">Failed to load courses data.</p>';
    };

    // Helper function to create a course link/text element (DRY principle)
    const createCourseElement = (item) => {
      const element = item.url ? document.createElement('a') : document.createElement('span');
      element.textContent = item.title;
      if (item.url) {
        element.href = item.url;
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
        const icon = document.createElement('i');
        icon.className = 'fas fa-external-link-alt fa-xs ms-1 text-muted';
        element.appendChild(icon);
      }
      return element;
    };

    const renderCourses = (courses) => {
      const coursesList = document.createElement('ul');
      courses.forEach((course, index) => {
        const listItem = document.createElement('li');
        listItem.appendChild(createCourseElement(course));

        if (course.details && course.details.length > 0) {
          const nestedList = document.createElement('ul');
          nestedList.className = 'nested-list';
          course.details.forEach(detail => {
            const nestedItem = document.createElement('li');
            nestedItem.appendChild(createCourseElement(detail));
            nestedList.appendChild(nestedItem);
          });
          listItem.appendChild(nestedList);
        }

        // Hide items beyond the initial visible limit
        if (index >= INITIAL_ITEMS_VISIBLE) {
          listItem.style.display = 'none';
        }

        coursesList.appendChild(listItem);
      });
      coursesContainer.replaceChildren(coursesList);

      // Add "Show More/Less" button if needed
      if (courses.length > INITIAL_ITEMS_VISIBLE) {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'btn btn-outline-primary btn-sm mt-3';
        toggleButton.textContent = 'Show More';
        let isShowingAll = false;

        toggleButton.addEventListener('click', () => {
          isShowingAll = !isShowingAll;
          const listItems = Array.from(coursesList.children);
          for (let i = INITIAL_ITEMS_VISIBLE; i < listItems.length; i++) {
            listItems[i].style.display = isShowingAll ? 'list-item' : 'none';
          }
          toggleButton.textContent = isShowingAll ? 'Show Less' : 'Show More';
        });

        coursesToggleContainer.appendChild(toggleButton);
      }
    };

    showLoading();
    try {
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      renderCourses(data.courses);
    } catch (error) {
      console.error('Error fetching or parsing courses data:', error);
      showError();
    }
  };

  // --- Scroll Animation Logic ---
  const setupScrollAnimations = () => {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  };

  // --- Footer Logic ---
  const setFooterYear = () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }

  // Initialize all features
  setupThemeToggler();
  loadCourses();
  setupScrollAnimations();
  setFooterYear();
});