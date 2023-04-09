
const userButton1 = document.querySelector('.button1');     /* обращаемся к кнопке по ранее придуманному классу */

userButton1.addEventListener('click', function () {
    const userName = prompt("Введите Ваше имя ");
    function greeting(name) {
        alert(`Привет, ${name}! Рады тебя видеть!`);
    }
    greeting(userName);
});



const userButton2 = document.querySelector('.button2');

userButton2.addEventListener('click', function () {
    alert(`ДОБЫЧА НЕРУДНЫХ СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ 
    Для добычи и обработки нерудных материалов спользуются горные породы. 
    Перед тем, как начинается добыча в промышленных масштабах, 
    геологоразведочных организации определяют, где расположены нерудные 
    материалы, каковы масштабы и глубина залежей. Так же они опредяляют 
    наиболее предпочтительный способ добычи. 
    Наиболее популярна добыча необходимого сырья с помощью открытых 
    карьеров.`);
});
