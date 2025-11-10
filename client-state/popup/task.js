class ModalManager {
    constructor() {
        this.modal = document.getElementById('subscribe-modal');
        this.closeBtn = this.modal.querySelector('.modal__close');
        this.STORAGE_KEY = 'modalClosed';
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.checkModalState();
    }
    
    checkModalState() {
        const isClosed = localStorage.getItem(this.STORAGE_KEY);
        console.log('Storage value:', isClosed);
        
        if (!isClosed) {
            this.showModal();
        }
    }
    
    showModal() {
        this.modal.classList.add('modal_active');
    }
    
    closeModal() {
        this.modal.classList.remove('modal_active');
        localStorage.setItem(this.STORAGE_KEY, 'true');
    }
    
    setupEventListeners() {
        this.closeBtn.addEventListener('click', () => {
            this.closeModal();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ModalManager();
});