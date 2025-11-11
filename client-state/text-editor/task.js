const editor = document.getElementById('editor');
const buttonDelete = document.querySelector('.button_delete');

const STORAGE_KEY = 'textEditorContent';

window.addEventListener('DOMContentLoaded', () => {
    editor.value = localStorage.getItem(STORAGE_KEY);
});

editor.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, editor.value);
});

buttonDelete.addEventListener('click', () => {
    if (editor.value.trim() === '') {
        return;
    }
    
    if (confirm('Вы уверены, что хотите очистить весь текст?')) {
        editor.value = '';
        localStorage.removeItem(STORAGE_KEY);
        
        editor.focus();
    }
});