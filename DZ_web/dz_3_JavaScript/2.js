// 2.
// Cоздать функцию greeting, которая принимает имя и выводит приветствие, используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда данное значение.


function greeting(name) {
    alert(`Привет, ${name}! Рады тебя видеть!`);
}

const userName = prompt("Введите Ваше имя ");

greeting(userName);