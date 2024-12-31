// Function to load content dynamically
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}


// Add event listener to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        loadContent(url);
        history.pushState(null, "", url);
    });
});

