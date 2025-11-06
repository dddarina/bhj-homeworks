const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

    dropdownValue.addEventListener('click', function() {
        dropdownList.classList.toggle('dropdown__list_active');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const newValue = this.querySelector('.dropdown__link').textContent;
            dropdownValue.textContent = newValue;
            
            dropdownList.classList.remove('dropdown__list_active');
        });
    });
});

