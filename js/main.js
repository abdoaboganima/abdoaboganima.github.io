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
      const listItem = document.createElement('li');
      listItem.textContent = course.title;

      if (course.details && course.details.length > 0) {
        const nestedList = document.createElement('ul');
        nestedList.className = 'nested-list';
        course.details.forEach(detail => {
          const nestedItem = document.createElement('li');
          nestedItem.textContent = detail;
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