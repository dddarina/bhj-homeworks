function checkReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementBottom = reveal.getBoundingClientRect().bottom;
        
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight && elementBottom > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkReveal);

document.addEventListener('DOMContentLoaded', checkReveal);