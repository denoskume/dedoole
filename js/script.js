document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
    const mainContent = document.querySelector("main");
    const backButton = document.querySelector(".fa-arrow-left");
    const refreshButton = document.querySelector(".fa-sync-alt");

    // Load home.html by default
    loadPage("html/home.html");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const page = this.getAttribute("href");
            loadPage(page);
            smoothScrollTo(mainContent);
        });
    });

    backButton.addEventListener("click", function() {
        window.history.back();
    });

    refreshButton.addEventListener("click", function() {
        location.reload();
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



// Print Resume
document.getElementById('content').addEventListener('click', function(event) {
    if (event.target.id === 'print-btn') {
        window.print();
    }
});


// Experience section

 function toggleDescription(id) {
            const description = document.getElementById(id);
            const seeMore = description.previousElementSibling.querySelector('.see-more');

            if (description.style.display === "none") {
                description.style.display = "block";
                seeMore.innerHTML = "...see less";
            } else {
                description.style.display = "none";
                seeMore.innerHTML = "...see more";
            }
        }
// Certificates 
function downloadCertificate(image) {
    const link = document.createElement('a');
    link.href = image;
    link.download = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function checkCredential(certificateId) {
    // Add your logic to check the credential
    alert('Checking credential for ' + certificateId);
}


