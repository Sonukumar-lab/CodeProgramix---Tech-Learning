const params = new URLSearchParams(window.location.search);

const username = params.get('username');

let userGreetElement = document.querySelector('#user-greet-name');
userGreetElement.innerText = `${username}`;

let userGreetElement1 = document.querySelector('#user-greet-name1');
userGreetElement1.innerText = `Hello, ${username} 👋`;

console.log(username);

// document.addEventListener('DOMContentLoaded', function() {
//     // Toggle active class for sidebar navigation
//     const sidebarLinks = document.querySelectorAll('.sidebar nav a');
//     sidebarLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             sidebarLinks.forEach(l => l.classList.remove('active'));
//             this.classList.add('active');
//         });
//     });

//     // Simulate search functionality
//     const searchInput = document.querySelector('.search-bar input');
//     searchInput.addEventListener('keypress', function(e) {
//         if (e.key === 'Enter') {
//             alert('Searching for: ' + this.value);
//             this.value = '';
//         }
//     });

//     // Simulate notification functionality
//     const notificationBtn = document.querySelector('.notifications-btn');
//     notificationBtn.addEventListener('click', function() {
//         alert('Notifications clicked!');
//     });

//     // Simulate "View Courses" button click
//     const viewCoursesBtn = document.querySelector('.featured-course button');
//     viewCoursesBtn.addEventListener('click', function() {
//         alert('Viewing all courses...');
//     });

//     // Simulate "View All" links
//     const viewAllLinks = document.querySelectorAll('.section-header a');
//     viewAllLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             alert('Viewing all ' + this.closest('.section-header').querySelector('h2, h3').textContent);
//         });
//     });

//     // Simulate course card clicks
//     const courseCards = document.querySelectorAll('.course-card');
//     courseCards.forEach(card => {
//         card.addEventListener('click', function() {
//             alert('Opening course: ' + this.querySelector('h3').textContent);
//         });
//     });

//     // Simulate instructor card clicks
//     const instructorCards = document.querySelectorAll('.instructor-card');
//     instructorCards.forEach(card => {
//         card.addEventListener('click', function() {
//             alert('Viewing profile of ' + this.querySelector('h3').textContent);
//         });
//     });
// });

