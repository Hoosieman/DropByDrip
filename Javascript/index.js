const image = document.getElementById('logo');
const hoverText = document.getElementById('hover-text');

image.addEventListener('click', function () {
    
    hoverText.style.display = 'none';
    
    // Toggle the 'zoomed' class to apply the zoom effect
    image.classList.toggle('zoomed');
    setTimeout(function () {
        window.location.href = "login.html";
    }, 1000);
});
