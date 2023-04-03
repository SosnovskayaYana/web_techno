
const userButton = document.querySelector('button');

userButton.addEventListener('click', function () {
    const userName = prompt("Введите Ваше имя ");
    function greeting(name) {
        alert(`Привет, ${name}! Рады тебя видеть!`);
    }
    greeting(userName);
});

