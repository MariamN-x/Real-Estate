
function animateOnScroll(elements) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-bottom');
                observer.unobserve(entry.target);
            }
        });
    });


    elements.forEach((element) => {
        observer.observe(element);
    });
}

const images = document.querySelectorAll('img');
const rewards = document.querySelectorAll('.reward');
const c = document.querySelectorAll('.client');
const p = document.querySelectorAll('.carousel-caption');


animateOnScroll(images);
animateOnScroll(c);
animateOnScroll(p);
animateOnScroll(rewards);


