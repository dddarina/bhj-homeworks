const tabNavigations = document.querySelectorAll('.tab__navigation');

tabNavigations.forEach(navigation => {
    const tabs = navigation.querySelectorAll('.tab');
    const tabContentsContainer = navigation.nextElementSibling;
    const tabContents = tabContentsContainer.querySelectorAll('.tab__content');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('tab_active'));
            tabContents.forEach(content => content.classList.remove('tab__content_active'));

            tab.classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        });
    });
});