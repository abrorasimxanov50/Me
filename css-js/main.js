// Menu toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    e.preventDefault()
};

// Scroll active links
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => links.classList.remove('active'));
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
 ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, heading, h2',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content, h1, .about-card', { origin: 'left' });
ScrollReveal().reveal('.about-content',  { origin: 'right' })
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




    // ================= TELEGRAM SETTINGS =================
const TELEGRAM_BOT_TOKEN = "8162059023:AAG7LqYYDsSaAG0bJj2QqYACtwjJeOmmQCs";
const TELEGRAM_CHAT_ID = "986234686";

// ================= FORM HANDLER =================
const contactForm = document.getElementById('contact-form');
const contactBtn = document.getElementById('send-btn');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactBtn.disabled = true;
    contactBtn.innerText = "Sending...";

    // ✅ Shu yerda value olishni to‘g‘riladik
    const formData = {
        from_name: contactForm.elements['from_name'].value,
        from_email: contactForm.elements['from_email'].value,
        mobile: contactForm.elements['mobile'].value,
        subject: contactForm.elements['subject'].value,
        message: contactForm.elements['message'].value
    };

    const text = `New message from website:\nName: ${formData.from_name}\nEmail: ${formData.from_email}\nMobile: ${formData.mobile}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text })
    })
    .then(response => {
        if(response.ok){
            alert("Message sent successfully to Telegram!");
            contactForm.reset();
        } else {
            alert("Error sending to Telegram");
        }
        contactBtn.disabled = false;
        contactBtn.innerText = "Send Message";
    })
    .catch(err => {
        alert("Error: " + err);
        contactBtn.disabled = false;
        contactBtn.innerText = "Send Message";
    });
});


