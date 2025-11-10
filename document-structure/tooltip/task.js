document.addEventListener('click', (event) => {
    if (event.target.classList.contains('has-tooltip')) {
        event.preventDefault();
        
        const textTooltip = event.target.title;
        let tooltip = document.querySelector('.tooltip_active'); 
        
        if (tooltip && tooltip.textContent === textTooltip) {
            tooltip.remove();
            return;
        }
        
        if (tooltip) {
            tooltip.remove();
        }
        
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip_active';
        tooltip.textContent = textTooltip;
        
        document.body.appendChild(tooltip);
        
        const rect = event.target.getBoundingClientRect();
        const scrollX = window.pageXOffset;
        const scrollY = window.pageYOffset;
        
        tooltip.style.left = (rect.left + scrollX) + 'px';
        tooltip.style.top = (rect.bottom + scrollY + 5) + 'px'; 
    } else {
        const tooltip = document.querySelector('.tooltip_active');
        if (tooltip) {
            tooltip.remove();
        }
    }
});