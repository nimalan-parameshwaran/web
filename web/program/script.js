document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('courses.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const coursesDiv = document.getElementById('courses');
            coursesDiv.innerHTML = '';

            data.courses.forEach(course => {
                coursesDiv.innerHTML += `
                    <div class="course">
                        <h2>${course.title}</h2>
                        <img>
                        <p><strong>Description:</strong> ${course.description}</p>
                        <p><strong>Duration:</strong> ${course.duration}</p>
                        <p><strong>Level:</strong> ${course.level}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const coursesDiv = document.getElementById('courses');
            coursesDiv.innerHTML = 'Failed to fetch courses.';
        });
});