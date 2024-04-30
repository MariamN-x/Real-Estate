const scrollContainer = document.querySelector('.scroll-container');
const scrollButtonPrev = document.querySelector('.scroll-button.prev');
const scrollButtonNext = document.querySelector('.scroll-button.next');

scrollButtonPrev.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -300, // Adjust as needed
        behavior: 'smooth'
    });
});

scrollButtonNext.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 300, // Adjust as needed
        behavior: 'smooth'
    });
});
