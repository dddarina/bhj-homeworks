class ModalManager {
    constructor() {
        this.modal = document.getElementById('subscribe-modal');
        this.closeBtn = this.modal.querySelector('.modal__close');
        this.COOKIE_NAME = 'modalClosed';
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.checkModalState();
    }
    
    checkModalState() {
        const isClosed = this.getCookie(this.COOKIE_NAME);
        console.log('Cookie value:', isClosed);
        
        if (!isClosed) {
            this.showModal();
        }
    }
    
    showModal() {
        this.modal.classList.add('modal_active');
    }
    
    closeModal() {
        this.modal.classList.remove('modal_active');
        this.setCookie(this.COOKIE_NAME, 'true', 365);
    }
    
    setupEventListeners() {
        this.closeBtn.addEventListener('click', () => {
            this.closeModal();
        });
    }
    
    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split(';');
        
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ModalManager();
});