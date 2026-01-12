
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const courseName = document.getElementById('search-input').value.trim().toLowerCase(); // Get and normalize user input

        const coursePages = {
            "basic c": "basic-c.html",
            "basic and advanced c++": "basic-and-advanced-cpp.html",
            "python programming": "python-programming.html",
            "java programming": "java-programming.html",
            "html & css": "html-css.html",
            "javascript": "javascript.html",
            "react": "react.html",
            "node.js": "nodejs.html",
            "mongodb": "mongodb.html",
            "dsa with c++": "dsa-with-cpp.html",
            "dsa with java": "dsa-with-java.html",
            "dsa with python": "dsa-with-python.html",
            "dsa with javascript": "dsa-with-javascript.html"
        };

        if (courseName) {
            // Convert the coursePages keys to lowercase and check if any course matches the search term
            const matchingCourse = Object.keys(coursePages).find(course => course.toLowerCase() === courseName);

            if (matchingCourse) {
                // If a match is found, redirect to the corresponding page
                window.location.href = coursePages[matchingCourse];
            } else {
                // If no course matches, show an alert
                alert("Course not found! Please check the course name and try again.");
            }
        }
    });

