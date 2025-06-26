document.addEventListener('DOMContentLoaded', async () => {
  const coursesContainer = document.getElementById('courses-container');

  const showLoading = () => {
    coursesContainer.innerHTML = `
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`;
  };

  const showError = () => {
    coursesContainer.innerHTML = '<p class="text-danger text-center">Failed to load courses data.</p>';
  };

  const renderCourses = (courses) => {
    const coursesList = document.createElement('ul');
    courses.forEach(course => {
      const listItem = document.createElement('li'); // Create the <li> for the main course
      const courseTextElement = course.url
        ? document.createElement('a')
        : document.createElement('span'); // Use <a> if URL exists, else <span>
      courseTextElement.textContent = course.title;
      if (course.url) {
        courseTextElement.href = course.url;
        courseTextElement.target = '_blank'; // Open link in new tab
        courseTextElement.rel = 'noopener noreferrer'; // Security best practice

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
            const detailTextElement = detail.url
              ? document.createElement('a')
              : document.createElement('span'); // Use <a> if URL exists, else <span>
            detailTextElement.textContent = detail.title; // Access title property
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
});