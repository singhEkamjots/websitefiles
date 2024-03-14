// script.js


const header = document.querySelector('header');


header.addEventListener('mouseenter', function() {
    // Change background color to red
    header.style.backgroundColor = '#FF5733';
});


header.addEventListener('mouseleave', function() {
    // Change background color back to original
    header.style.backgroundColor = '#333';
});
