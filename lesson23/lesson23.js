// Завдання 1 - Подсчитать сумму всех чисел в заданном пользователем диапазоне.


let start = +prompt("Введіть початок діапазону");
let end = +prompt("Введіть кінець діапазону");
let sum = 0;
 
while(start <= end){
    sum+=start;
    start++;
}

alert(sum);


// Завдання 2 - Запросить 2 числа и найти только наибольший общий делитель.


let first = +prompt("Введіть перше число");
let second = +prompt("Введіть друге число");

while (first != 0 && second != 0) {
    if (first > second)
        first = first % second;
    else
        second = second % first;
}

const resultNum = first + second;
alert(resultNum);


/* Завдання 3 - Запросить у пользователя число и вывести все делители этого числа. */


let numb = +prompt("Введіть будь-яке число");
for(let i = 2; i < numb; i++) {
    if (numb % i === 0)
    console.log(i);
}


/* Завдання 4 - Определить количество цифр в введенном числе. */


let numb4 = +prompt("Введіть будь-яке число");

let count = 0;
    do {
        numb4 /= 10;
        count++;
    }
    while(numb4 >= 1);
alert(count);


/* Завдання 5 - Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем. */


let numb5 = prompt("Введіть 10 будь-яких чисел. Наприклад (1 2 3 4 5 6 7 8 9 10).");
let mass = numb5.split(' ');

let negative = 0;
let positive = 0;
let zero = 0;
let odd = 0;
let even = 0;

for (let i = 0; i < mass.length; i++) {
    if (mass[i] < 0) negative++;
    else if (mass[i] > 0) positive++;
    else zero++;

    let oddOrEven = mass[i] % 2;

    if (oddOrEven == 0) even++;
    else odd++;
}

alert(`негативних - ${negative}, позитивних - ${positive}, нулів - ${zero}, непарних - ${odd}, парних - ${even}.`);


/* Завдання 6 - Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется. */


let question = confirm("Почнемо");

while (question == true) {
    let number1 = +prompt("Введіть будь-яке число");
    let number2 = +prompt("Введіть ще одне число");
    let operator = prompt("Вкажіть операцію");

    if (operator == "+") {
        alert(number1 + number2);
    } else if (operator == "-") {
        alert(number1 - number2); 
    } else if (operator == "*") {
        alert(number1 * number2);
    } else if (operator == "/") {
        alert(number1 / number2);
    }

    question = confirm("Ще раз?");
}


/* do {
    let number1 = +prompt("Введіть будь-яке число");
    let number2 = +prompt("Введіть ще одне число");
    let operator = prompt("Вкажіть операцію");

    if (operator == "+") {
        alert(number1 + number2);
    } else if (operator == "-") {
        alert(number1 - number2); 
    } else if (operator == "*") {
        alert(number1 * number2);
    } else if (operator == "/") {
        alert(number1 / number2);
    }

    var question = confirm("Ще раз?");
}

while (question == true); */


/* Завдання 7 - Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612). */


let numb7 = prompt("Введіть будь-яке число");
let mass7 = Array.from(numb7);
let howMach = prompt("На скільки символів змістити число?");

for (let i = 0; i < howMach; i++) {
    let anyone = mass7.shift();
    mass7.push(anyone);
}

let finish = mass7.join("");
alert(finish);


/* Завдання 8 - Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. */


let dayName = new Array ("Понеділок","Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя");
let showNextDay = true;

for (let i = 0; i < dayName.length && showNextDay == true; i++) {
    alert(dayName[i]);
    showNextDay = confirm("Показати наступний день?");
}


/* Завдання 9 - Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10. */


for (let i = 2; i <= 9; i++) {
    for (let n = 1; n < 11; n++) {
        console.log(`${i} * ${n} = ${i * n}`);
    }
}


/* Завдання 10 - Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N. */


alert("Загадайте число від 0 до 100");
let number0 = 0;
let number50 = 50;
let number100 = 100;

let question10 = true;

while (question10 == true) {

    let whatNumber = prompt(`Ваше число < , > або ж = ${number50}?`);

    if (whatNumber == ">") {
        number0 = number50;
        number50 = number50 + Math.floor((number100 - number50) / 2);
        question10 = true;

    } else if (whatNumber == "<") {
        number100 = number50;
        number50 = number0 + Math.floor((number50 - number0) / 2);
        question10 = true;

    } else if (whatNumber == "=") {
        alert("Це було лекго :)");
        question10 = false;
    }
}