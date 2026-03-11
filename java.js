document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // ЛОГИКА ВХОДА
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const user = document.getElementById('username').value;
            if (user.trim() !== "") {
                // Сохраняем данные в браузер
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', user);
                // Переходим на главную
                window.location.href = 'dashboard.html';
            } else {
                alert("Please enter a username!");
            }
        });
    }

    // ПРОВЕРКА АВТОРИЗАЦИИ НА СТРАНИЦЕ DASHBOARD
    if (window.location.pathname.includes('dashboard.html')) {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'index.html';
        } else {
            // Установка имени пользователя из LocalStorage
            const nameDisplay = document.getElementById('userNameDisplay');
            const savedName = localStorage.getItem('username');
            if (nameDisplay && savedName) {
                nameDisplay.textContent = savedName;
            }
            
            // Установка текущей даты
            const dateDisplay = document.getElementById('currentDate');
            if (dateDisplay) {
                dateDisplay.textContent = new Date().toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                });
            }
        }
    }

    // ЛОГИКА ВЫХОДА
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = 'index.html';
        });
    }
});