const fontSizes = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
const textColors = document.querySelectorAll('.book__control_color .color');
const bgColors = document.querySelectorAll('.book__control_background .color');

fontSizes.forEach(size => {
    size.addEventListener('click', (event) => {
        event.preventDefault();

        fontSizes.forEach(t => t.classList.remove('font-size_active'));
        size.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');
        
        const dataSize = size.dataset.size;
        if (dataSize) {
            book.classList.add(`book_fs-${dataSize}`);
        }
    });
});

textColors.forEach(color => {
    color.addEventListener('click', (event) => {
        event.preventDefault();

        textColors.forEach(t => t.classList.remove('color_active'));
        color.classList.add('color_active');

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        
        const textColor = color.dataset.textColor;
        if (textColor) {
            book.classList.add(`book_color-${textColor}`);
        }
    });
});

bgColors.forEach(color => {
    color.addEventListener('click', (event) => {
        event.preventDefault();

        bgColors.forEach(t => t.classList.remove('color_active'));
        color.classList.add('color_active');

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        
        const bgColor = color.dataset.bgColor;
        if (bgColor) {
            book.classList.add(`book_bg-${bgColor}`);
        }
    });
});