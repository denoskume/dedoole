document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
    const mainContent = document.querySelector("main");
    const backButton = document.querySelector(".fa-arrow-left");
    const refreshButton = document.querySelector(".fa-sync-alt");

    // Load the correct page based on the URL
    const currentPage = window.location.pathname.split("/").pop() || "html/home.html";
    loadPage(currentPage);

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const page = this.getAttribute("href");
            loadPage(page);
            history.pushState(null, "", page);
            smoothScrollTo(mainContent);
        });
    });

    backButton.addEventListener("click", function() {
        window.history.back();
    });

    refreshButton.addEventListener("click", function() {
        location.reload();
    });

    window.addEventListener("popstate", function() {
        const page = window.location.pathname.split("/").pop() || "html/home.html";
        loadPage(page);
    });

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading page:", error);
                mainContent.innerHTML = "<p>Sorry, there was an error loading the page.</p>";
            });
    }

    function smoothScrollTo(element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }
});
