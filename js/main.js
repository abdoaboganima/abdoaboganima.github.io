document.addEventListener('DOMContentLoaded', () => {

  // --- Theme Toggler Logic ---
  const setupThemeToggler = () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    const applyTheme = (theme) => {
      body.dataset.theme = theme;
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    };

    themeToggle.addEventListener('click', () => {
      const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
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

  // Initialize both features independently
  setupThemeToggler();
  loadCourses();
});