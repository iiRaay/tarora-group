// includeElement.js

// Function to load and insert the element content
function getFooter() {
    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-element').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading element:', error);
        });
}