'use strict';


/* Завдання 1 - Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18_60) или пенсионером (60– ...). */


const yourAge = prompt('Вкажіть скільки вам років?');

if (yourAge >= 0 && yourAge < 12) {
    alert ('Дитина');
} else if (yourAge >= 12 && yourAge < 18) {
    alert ('Підліток');
} else if (yourAge >= 18 && yourAge < 60) {
    alert ('Дорослий');
} else if (yourAge >= 60) {
    alert ('Стрічок або старушка');
} else {
    alert ('Невірно вказано вік');
}


/* Завдання 2 - Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д). */


let button = prompt('Вкажіть число від 0 до 9');
const description = 'Символ на клавіші';

switch (+'button') {
    case 1:
        alert (`${description} - !`);
        break;
    case 2:
        alert (`${description} - @`);
        break;
    case 3:
        alert (`${description} - #`);
        break;
    case 4:
        alert (`${description} - $`);
        break;
    case 5:
        alert (`${description} - %`);
        break;
    case 6:
        alert (`${description} - ^`);
        break;
    case 7:
        alert (`${description} - &`);
        break;
    case 8:
        alert (`${description} - *`);
        break;
    case 9:
        alert (`${description} - (`);
        break;
    case 0:
        alert (`${description} - )`);
        break;
    default:
        alert (`Ви натиснули не ту клавішу)`);
}


/* Завдання 3 - Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры. */


let number = prompt('Введіть тризначне число');

if (number[0] == number[1] && number[1] == number[2]) {
    alert (`Ви вказали число ${number}. Всі цифри однакові.`);
} else if (number[0] == number[1]) {
    alert (`Ви вказали число ${number}. Перша і друга цифра однакові.`);
} else if (number[1] == number[2]) {
    alert (`Ви вказали число ${number}. Друга і третя цифра однакові.`);
} else if (number[0] == number[2]) {
    alert (`Ви вказали число ${number}. Перша і третя цифра однакові.`);
} else {
    alert ('Однакових цифр немає.');
}


/* Завдання 4 - Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100. */


let year = prompt('Введіть рік');

if (year%4 == 0 && year %100 !== 0) {
    alert ('Цей рік високосний.');
} else {
    alert ('Цей рік не являється високосним.');
}


/* Завдання 5 - Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом. */


let numb = prompt('Введіть число від 10000 до 99999');

numb = numb + '';

if (numb === numb.split('').reverse().join('')) {
    alert ('Ваше число є паліндромом');
} else {
    alert ('Ваше число не є паліндромом');
}


/* Завдання 6 - Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму. */


let dollars = prompt('Вкажіть суму в Доларах');
let currency = prompt('EUR = 1, UAH = 2, AZN = 3');

switch(currency) {
    case '1':
        alert (dollars*0.91 + 'EUR');
        break;
    case '2':
        alert (dollars*27.10 + 'UAH');
        break;
    case '3':
        alert (dollars*1.69 + 'AZN');
        break;
}


/* Завдання 7 - Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%. */


let amount = +prompt(`Введіть суму покупки.`);

if (amount >= 200 && amount < 300) {
    alert (`До оплати ${amount - (amount * 0.03)} грн. Ваша знижка 3% (${amount * 0.03} грн)`);
} else if (amount >= 300 && amount < 500) {
    alert (`До оплати ${amount - (amount * 0.05)} грн. Ваша знижка 5% (${amount * 0.05} грн)`);
} else if (amount >= 500) {
    alert (`До оплати ${amount - (amount * 0.07)} грн. Ваша знижка 7% (${amount * 0.07} грн)`);
} else {
    alert (`До оплати ${amount} грн. Знижки не має.`);
}


/* Завдання 8 - Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. */


let squareSide = prompt("Введіть сторону квадрата");
let circleLength = prompt("Введіть довжину кола");

let radius = circleLength / (2* Math.PI);
if (squareSide >= 2*radius) {
    alert("Коло можна помістити в квадрат");
} else {
    alert("Коло не є вписаним");
}


/* Завдання 9 - Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов. */


let capital = prompt('Cтолиця Великобританії це? 1 - Лондон 2 - Нью-Йорк 3 - Париж');
let valuta = prompt('Яка валюта в США? 1 - USD 2 - UAH 3 - RMB');
let country = prompt('Яка країна найбільш населена? 1 - США 2 - Японія 3 - Китай');
let score = 0;
if (capital == 1)
    score += 2;
if (valuta == 1)
    score += 2;
if (country == 3)
    score += 2;
alert('Your score is ' + score);


/* Завдання 10 - Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год. */


let date = prompt('Введіть дату в форматі - day-month-year ');
    date = date.split('-');
    let oldDate = new Date(date[2], date[1]-1, date[0]); // місяці начинаються з 0
    oldDate.setDate(oldDate.getDate()+1);
    alert(oldDate);