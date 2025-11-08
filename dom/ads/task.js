const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let index = 0;
    let timeoutId = null;
    
    function rotate() {
        cases.forEach(caseElement => {
            caseElement.classList.remove('rotator__case_active');
        });
        
        cases[index].classList.add('rotator__case_active');
        
        const caseColor = cases[index].getAttribute('data-color');
        if (caseColor) {
            cases[index].style.color = caseColor;
        }

        const caseSpeed = cases[index].getAttribute('data-speed') || 1000;
        
        index = (index + 1) % cases.length;
        
        timeoutId = setTimeout(rotate, caseSpeed);
    }
    
    rotate();
});