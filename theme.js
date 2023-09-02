// Get references to the div and link elements
const changeTheme = document.getElementById("changeTheme");
const body = document.body;

// Add a click event listener to the link
changeTheme.addEventListener("click", function (event) {
    // Prevent the default link behavior (e.g., navigating to a new page)
    event.preventDefault();

    // Add the "white-version" class to the body's class attribute
    body.classList.toggle("white-version");
});
