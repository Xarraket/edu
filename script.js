const toggleLoginBtn = document.getElementById('toggle-login');
const loginSection = document.getElementById('login-section');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

toggleLoginBtn.addEventListener('click', function() {
    loginSection.classList.toggle('show');
});

registerBtn.addEventListener('click', function() {
    const user = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };
    if (user.name && user.surname && user.email && user.phone) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Регистрация успешна! Добро пожаловать, ' + user.name + '!');
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});

loginBtn.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);
    if (!user) {
        alert('Ой, вас нет в системе!');
    } else {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Добро пожаловать, ' + user.name + '!');
    }
});
