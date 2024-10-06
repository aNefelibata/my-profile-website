// footer-loader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      })
      .catch(error => console.log('Error loading footer:', error));
  });
  