document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        window.location.href = 'login.html';
    }

    // Populate user information dynamically
    document.getElementById('profile-name').textContent = `Name: ${user.fullName}`;
    document.getElementById('user-id').textContent = `User ID: ${user.userId}`;
    document.getElementById('total-courses').textContent = `Total Courses Enrolled: ${user.courses.length}`;

    // Render enrolled courses
    const courseList = document.getElementById('course-list');
    user.courses.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.name}</td>
            <td>${course.enrollDate}</td>
            <td>${course.endDate}</td>
            <td>${course.completed ? 'Completed' : 'In Progress'}</td>
            <td><button class="cta-button" onclick="generateCertificate('${course.name}')">Get Certificate</button></td>
        `;
        courseList.appendChild(row);
    });

    // Photo update functionality
    const profilePhotoInput = document.getElementById('upload-photo');
    const profilePhotoImg = document.getElementById('profile-photo-img');
    const updatePhotoBtn = document.getElementById('update-photo-btn');

    // When the "Update Photo" button is clicked, trigger the file input dialog
    updatePhotoBtn.addEventListener('click', function() {
        profilePhotoInput.click(); // This simulates a click on the file input to open the file dialog
    });

    profilePhotoInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                user.profilePhoto = reader.result; // Store the photo data in the user object
                localStorage.setItem('user', JSON.stringify(user)); // Save the updated user object
                profilePhotoImg.src = reader.result; // Update the displayed profile photo
            };
            reader.readAsDataURL(file); // Read the file as a data URL and update the image
        }
    });

    // Logout functionality
    document.getElementById('logout-button').addEventListener('click', function() {
        localStorage.removeItem('user'); // Clear the user data from localStorage
        alert("Thank You! You have successfully logged out."); // Show the "Thank You" message
        window.location.href = 'login.html'; // Redirect the user to the login page
    });
});

// Certificate generation (mock)
function generateCertificate(courseName) {
    alert(`Certificate generated for ${courseName}`);
}