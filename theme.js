// Get references to the elements
const changeTheme = document.getElementById("changeTheme");
const body = document.body;
const lightIcon = document.getElementById("lightIcon");
const darkIcon = document.getElementById("darkIcon");

// Function to update icon visibility and styles
function updateThemeIcons() {
    const isLight = body.classList.contains("white-version");
    lightIcon.style.display = isLight ? "none" : "inline-block";
    darkIcon.style.display = isLight ? "inline-block" : "none";

    // Add color to the sun icon
    lightIcon.style.color = "#ff352b";
    darkIcon.style.color = "#000000";
}

// Function to set theme based on system preference
function setThemeBasedOnSystemPreference() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        body.classList.remove("white-version");
    } else {
        body.classList.add("white-version");
    }
    updateThemeIcons();
}

// Add a click event listener to the link
changeTheme.addEventListener("click", function (event) {
    event.preventDefault();
    body.classList.toggle("white-version");
    updateThemeIcons();
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeBasedOnSystemPreference);

// Set initial theme based on system preference
setThemeBasedOnSystemPreference();
