// Завдання 1
const name = prompt(`Як тебе звати?`);
alert(`Привіт, ${name}!`);


// Завдання 2
let yearOfBirth = prompt(`Який твій рік народження?`);
const currentYear = 2020;
alert(`Тобі ${currentYear - yearOfBirth} років.`);


// Завдання 3
let sideSquare = prompt(`Введіть довжину сторони квадрата.`);
alert(`Периметр квадрата получився ${4 * sideSquare}.`);


// Завдання 4
let radiusCircle = prompt(`Вкажіть радіус кола.`);
alert(`Площа кола ${Math.PI * radiusCircle * radiusCircle}.`);


// Завдання 5
let distance = prompt(`Вкажіть відстань між містами в км.`);
let time = prompt(`Вкажіть за скільки годин хочете добраттися.`);
alert(`Вам потрібно рухатися зі швидкістю ${distance / time} км/год щоб встигнути за цей час.`);


// Завдання 6
let exchangeRate = .92;
let dollars = prompt(`Скільки доларів вам потрібно поміняти?`);
alert(`В євро це буде ${dollars * exchangeRate}€.`);


// Завдання 7
let gb = prompt(`На скільки Гб пам'яті у вас флешка?`);
let film = Math.floor((gb * 1024) / 820);
alert(`У вас поміститься ${film} фільмів, при умові, що один фільм займає 820 Мб.`);


// Завдання 8
let money = prompt(`Скільки у вас є грошей?`);
let price = prompt(`скільки коштує одна шоколадка?`);
let buy = Math.floor(money / price);
alert(`Ви можете купити ${buy} шоколадок`);
alert(`У вас залишиться ${money - (buy * chokoPrice)} грошей.`);


// Завдання 9
let number = prompt(`Введіть тризначне число.`);

let firstNumber = number%10;
let secondNumber = (number%100 - firstNumber)/10;
let thirdNumber = (number - number%100)/100;

alert(`Твоє число задом наперед ${firstNumber} ${secondNumber} ${thirdNumber}.`);


// Завдання 10
let moneyForDeposit = prompt(`Яка сума вкладу на 2 місяці? Процентна ставка 5% річних`);
let percent = moneyForDeposit * 5 * 2 / 12 / 100;
alert(`Ви заробите ${percent} грошей`);