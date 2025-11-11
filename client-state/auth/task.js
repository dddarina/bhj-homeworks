class AuthManager {
    constructor() {
        this.signinForm = document.getElementById('signin');
        this.welcomeBlock = document.getElementById('welcome');
        this.signinFormElement = document.getElementById('signin__form');
        this.userIdSpan = document.getElementById('user_id');
        this.logoutBtn = document.querySelector('.logout_btn');

        this.createErrorMessage();

        this.STORAGE_KEY = 'user_id';
        this.API_URL = 'https://students.netoservices.ru/nestjs-backend/auth';

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkAuthState();
    }

    checkAuthState() {
        const userId = localStorage.getItem(this.STORAGE_KEY);
        this.showWelcome(userId);
    }

    showSignin() {
        this.signinForm.classList.add('signin_active');
        this.welcomeBlock.classList.remove('welcome_active');
        this.hideLogoutButton();
    }

    showWelcome(userId) {
        if (!userId) return;
        
        this.userIdSpan.textContent = userId;
        this.signinForm.classList.remove('signin_active');
        this.welcomeBlock.classList.add('welcome_active');
        this.showLogoutButton();
    }

    setupEventListeners() {
        this.signinFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        if (this.logoutBtn) {
            this.logoutBtn.addEventListener('click', () => {
                this.handleLogout();
            });
        }
    }

    async handleLogin() {
        const formData = new FormData(this.signinFormElement);
        const login = formData.get('login');
        const password = formData.get('password');

        if (!login || !password) {
            this.showError('Заполните все поля');
            return;
        }

        try {
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem(this.STORAGE_KEY, data.user_id);
                this.showWelcome(data.user_id);
                this.clearForm();
                this.hideError();
            } else {
                this.showError('Неверный логин/пароль');
                this.clearPasswordField();
            }
        } catch (error) {
            this.showError('Ошибка соединения с сервером');
        }
    }

    handleLogout() {
        localStorage.removeItem(this.STORAGE_KEY);
        this.showSignin();
        this.clearForm();
        this.hideError();
    }

    hideLogoutButton() {
        if (this.logoutBtn) {
            this.logoutBtn.style.display = 'none';
        }
    }

    showLogoutButton() {
        if (this.logoutBtn) {
            this.logoutBtn.style.display = 'block';
        }
    }

    clearForm() {
        this.signinFormElement.reset();
    }

    clearPasswordField() {
        const passwordField = this.signinFormElement.querySelector('input[name="password"]');
        if (passwordField) {
            passwordField.value = '';
        }
    }

    createErrorMessage() {
        if (!document.getElementById('error-message')) {
            this.errorMessage = document.createElement('div');
            this.errorMessage.id = 'error-message';
            this.errorMessage.className = 'error';
            this.errorMessage.style.cssText = 'color: red; text-align: center; margin-top: 10px; display: none;';
            this.signinFormElement.appendChild(this.errorMessage);
        } else {
            this.errorMessage = document.getElementById('error-message');
        }
    }

    showError(message) {
        if (this.errorMessage) {
            this.errorMessage.textContent = message;
            this.errorMessage.style.display = 'block';
        }
    }

    hideError() {
        if (this.errorMessage) {
            this.errorMessage.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AuthManager();
});