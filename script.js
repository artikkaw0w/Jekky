document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const closeButton = document.getElementById("closeButton");

    menuButton.addEventListener("click", function () {
        dropdownMenu.classList.add("show");
    });

    closeButton.addEventListener("click", function () {
        dropdownMenu.classList.remove("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target) && !event.target.classList.contains("nav-link")) {
            dropdownMenu.classList.remove("show");
        }
    });
});
