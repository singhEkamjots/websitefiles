// script.js


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#222'; // Change to a darker color when scrolled
    } else {
        header.style.backgroundColor = '#333'; // Change back to original color when scrolled back to the top
    }
});


const introText = document.querySelector('.big-text p');
const text = "I am a student who has a passion for computer science as well as cybersecurity. I will be attending the University of Virginia to get my Bachelor of Science in Computer Science.";
let index = 0;

function type() {
    if (index < text.length) {
        introText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust typing speed (milliseconds)
    }
}







type();

// 4. Create a lightbox gallery for portfolio images (requires additional HTML and CSS)

// 5. Add a form validation for the contact form

// Add more features as needed
