// scroll animation for popping up content

const animatedItems = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},
{
    threshold:0.2,
}
);
animatedItems.forEach((item) => observer.observe(item));

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburgerbtn');
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('close');
}