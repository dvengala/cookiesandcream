document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.animated-element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.classList.add('animate');
            } else {
                animatedElement.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(animatedElement);
});

document.getElementById('logo-link').addEventListener('click', function () {
    this.classList.add('logo-img-clicked');
    setTimeout(() => {
        this.classList.remove('logo-img-clicked');
    }, 500); // Adjust the time to match your animation duration
});
