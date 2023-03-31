// <script src="main.js"></script>
/* <script src="main.js" defer></script>


Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений,  */
// которые ввел пользователь, вывод должен выглядеть так 
// (пример): Результат сложения чисел 5 и 2 равен 7.


// const firstNum = Number.parseFloat(prompt("Введите первое число :"));
// const secondNum = Number.parseFloat(prompt("Введите второе число :"));
// alert(`Результат сложения чисел ${firstNum} и ${secondNum} равен ${sum(firstNum, secondNum)}`);

// function sum(a,b) {
//     return a + b;
// }






// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”и кнопками «ОК», 
// «Отмена», для чего необходимо использовать confirm.- При нажатии на кнопку “ОК” вывести в диалоговом окне 
// текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.


// let question = confirm("Вам хорошо живется ? ");
// if (question == true) {
//     alert("Тогда мы идем к вам!");
// }
// else {
//     alert("Ну вы там держитесь =(");
// }


// let question = confirm("Вам хорошо живется ? ");
// if (question) {
//     alert("Тогда мы идем к вам!");
// } else {
//     alert("Ну вы там держитесь =(");
// }

// const question = confirm("Вам хорошо живется ? ");
// question ? alert("Тогда мы идем к вам!") : alert("Ну вы там держитесь =(");







// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.
/* <script>
let product = "Бананы";
if (product == "Мандарины") {
  alert('Мандарины стоят 100 руб/кг.');
} else if (product == "Бананы") {
  alert('Бананы и груши стоят 70 руб/кг.');
} else if (product == "Груши") {
  alert('Бананы и груши стоят 70 руб/кг.');
} else {
  alert('Нет такого продукта.');
}
</script> */


// const product = prompt("Введите продукт: ").toLowerCase();
// switch (product) {
//     case "мандарины":
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case "бананы":
//     case "груши":
//         alert(`Бананы и груши стоят 70 руб/кг. `);
//         break;
//     default:
//         alert('Нет такого продукта.');
// }







// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
// function getMaxEvenElement(arr) {
// }
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31



function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31



const userInput = prompt("Введите числа через запятую").split(",").map(Number.parseFloat);
// alert(`${getMaxEvenElement(userInput)}`);

const result = getMaxEvenElement(userInput);
alert(result);
