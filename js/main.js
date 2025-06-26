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
    if (!coursesContainer) return;

    const showLoading = () => {
      coursesContainer.innerHTML = `<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
    };

    const showError = () => {
      coursesContainer.innerHTML = '<p class="text-danger text-center">Failed to load courses data.</p>';
    };

    const renderCourses = (courses) => {
      const coursesList = document.createElement('ul');
      courses.forEach(course => {
        const listItem = document.createElement('li');
        const courseTextElement = course.url ? document.createElement('a') : document.createElement('span');
        courseTextElement.textContent = course.title;
        if (course.url) {
          courseTextElement.href = course.url;
          courseTextElement.target = '_blank';
          courseTextElement.rel = 'noopener noreferrer';
          const icon = document.createElement('i');
          icon.className = 'fas fa-external-link-alt fa-xs ms-1 text-muted';
          courseTextElement.appendChild(icon);
        }
        listItem.appendChild(courseTextElement);

        if (course.details && course.details.length > 0) {
          const nestedList = document.createElement('ul');
          nestedList.className = 'nested-list';
          course.details.forEach(detail => {
            const nestedItem = document.createElement('li');
            const detailTextElement = detail.url ? document.createElement('a') : document.createElement('span');
            detailTextElement.textContent = detail.title;
            if (detail.url) {
              detailTextElement.href = detail.url;
              detailTextElement.target = '_blank';
              detailTextElement.rel = 'noopener noreferrer';
              const icon = document.createElement('i');
              icon.className = 'fas fa-external-link-alt fa-xs ms-1 text-muted';
              detailTextElement.appendChild(icon);
            }
            nestedItem.appendChild(detailTextElement);
            nestedList.appendChild(nestedItem);
          });
          listItem.appendChild(nestedList);
        }
        coursesList.appendChild(listItem);
      });
      coursesContainer.replaceChildren(coursesList);
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

  // Initialize all features
  setupThemeToggler();
  loadCourses();
  setupScrollAnimations();
});