// 2.
// Cоздать функцию greeting, которая принимает имя и выводит приветствие, используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда данное значение.

const userButton = document.querySelector('button');

userButton.addEventListener('click', function () {
    const userName = prompt("Введите Ваше имя ");
    function greeting(name) {
        alert(`Привет, ${name}! Рады тебя видеть!`);
    }

    greeting(userName);
});


// function greeting(name) {
//     alert(`Привет, ${name}! Рады тебя видеть!`);
// }

// const userName = prompt("Введите Ваше имя ");

// greeting(userName);
