
document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.querySelector(".contact_button a");

    contactBtn.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        const contactSection = document.querySelector("#contact");
        if(contactSection) {
            alert("we are contacting you")
        } else {
            alert("Contact section not found.");
        }
    });
});



const startButton = document.querySelector('.start_button');
startButton.addEventListener('click', function() {
    alert('Welcome to StudySync!');
});
const tourButton = document.querySelector('.tour_button');
tourButton.addEventListener('click', function() {
    alert('Planning your Tour');
});


const emailInput = document.getElementById('email');
emailInput.addEventListener('focus', function() {
    console.log('Email input is focused');
});

let userName = 'Pranjal';
const siteName = 'StudySync';
// let isSubscribed = false;

function greetUser(name) {
    return 'Hello, ' + name + '!';
}

let isSubscribed = 'false';
if (!isSubscribed) {
    console.log('Please subscribe to get updates!');
} else {
    console.log('Thank you for subscribing!');
}

const features = ['Personalized Learning', 'Interactive Content', 'Expert Tips'];
for (let i = 0; i < features.length; i++) {
    console.log('Feature:', features[i]);
}

const signButton = document.querySelector('.sign_button');
const emailInputsend = document.getElementById('email');


signButton.addEventListener('click', function(event) {
    event.preventDefault();
    const email = emailInputsend.value;
    if (email) {
        alert('Thank you for subscribing, ' + email + '!');
    } else {
        alert('Please enter your email!');
    }
});

const button = document.querySelector('.start_button');

button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#3f83f8'; // Change color when hovering
});

button.addEventListener('mouseout', function() {
    button.style.backgroundColor = ''; // Revert back
});


const menuButton = document.querySelector('.hamburger_icon');
const sidebar = document.querySelector('.nav');

menuButton.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start_button');
    let scale = 1;

    function animate() {
        scale += 0.01;
        startButton.style.transform = `scale(${scale})`;
        if (scale < 1.2) {
            requestAnimationFrame(animate);
        }
    }

    startButton.addEventListener('click', () => {
        requestAnimationFrame(animate);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const signButton = document.querySelector('.sign_button');
    const emailInput = document.getElementById('email');

    signButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        if (email) {
            alert('Thank you for subscribing, ' + email + '!');
        } else {
            alert('Please enter your email!');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card_box');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.1)';
            card.style.transition = 'transform 0.2s ease';
            

            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });
});


document.addEventListener('DOMContentLoaded',()=>{
let cards = document.querySelectorAll('.card_box');
cards.forEach(card=>{
    card.addEventListener('mouseenter',()=>{
        card.style.boxShadow = '0 0 10px 3px rgba(0, 0, 0, 1)';
    });
    card.addEventListener('mouseleave',()=>{
        card.style.boxShadow = 'none';
    })

})

})


document.addEventListener('DOMContentLoaded', () => {
    const cursorCircle = document.querySelector('.cursor-circle');

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        cursorCircle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.content1_image');

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * 30;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 30;

        container.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});


const logos = document.querySelectorAll('.company_logo_image');

function revealLogos() {
    const windowHeight = window.innerHeight;

    logos.forEach(logo => {
        const logoTop = logo.getBoundingClientRect().top;

        if(logoTop < windowHeight - 100) { // trigger when 100px above bottom
            logo.classList.add('show');
        } else {
            logo.classList.remove('show'); // optional: remove when scrolling back
        }
    });
}

window.addEventListener('scroll', revealLogos);

// Trigger on page load too
revealLogos();



const cards = document.querySelectorAll('.card_box');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // cursor X inside card
        const y = e.clientY - rect.top;  // cursor Y inside card

        // calculate percentage positions
        const xPercent = x / rect.width * 100;
        const yPercent = y / rect.height * 100;

        // move shine using CSS variables
        card.style.setProperty('--shineX', `${xPercent}%`);
        card.style.setProperty('--shineY', `${yPercent}%`);
    });
});
