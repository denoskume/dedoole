document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
    const mainContent = document.querySelector("main");

    // Load home.html by default
    loadPage("home");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const page = this.getAttribute("href").substring(1);
            loadPage(page);
        });
    });

    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading page:", error);
                mainContent.innerHTML = "<p>Sorry, there was an error loading the page.</p>";
            });
    }
});

