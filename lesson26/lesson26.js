// Завдання 1 - Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// 1 - Функция для вывода на экран информации об автомобиле;

let car = {
    concern: "Ford",
    model: "Mustang",
    year: "2007",
    speed: 120,
    info: function () {
        let info = `Concern ${this.concern} introduced the model:: ${this.model} in ${this.year} with an average speed: ${this.speed} km/hour`;
        console.log(info);
    }
};
car.info();

// 2 - Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. 

car.time = function () {
    let fullDistance = +prompt("Enter the distance You need to pass");
    let remeinsDistance = fullDistance % this.speed;
    let fullHours = (fullDistance - remeinsDistance) / this.speed;
    let timesOut = (fullHours - (fullHours % 4)) / 4;
    let minutes = Math.round(fullDistance * 60 / this.speed);

    console.log(`${fullHours+timesOut} hours and  ${minutes} minutes`);
};
car.time();


// Завдання 2 - Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// 1 - Функция сложения 2-х объектов-дробей;

function Fraction(upNumber,downNumber){
    return {upNumber:upNumber, downNumber:downNumber};
}
let firstNumber = Fraction(2,5);
let secondNumber = Fraction(3,4);

function multiFraction(obj1,obj2){
    let resultUpNumber = obj1.upNumber * obj2.downNumber + obj1.downNumber * obj2.upNumber;
    let resultDownNumber = obj1.downNumber * obj2.downNumber;
    console.log(`${resultUpNumber}/${resultDownNumber}`);
}
multiFraction(firstNumber,secondNumber);

// 2 - Функция вычитания 2-х объектов-дробей;

function Fraction(upNumber,downNumber){
    return {upNumber:upNumber, downNumber:downNumber};
}
let firstNumber = Fraction(4,5);
let secondNumber = Fraction(3,4);

function multiFraction(obj1,obj2){
    let resultUpNumber = obj1.upNumber * obj2.downNumber - obj1.downNumber * obj2.upNumber;
    let resultDownNumber = obj1.downNumber * obj2.downNumber;
    console.log(`${resultUpNumber}/${resultDownNumber}`);
}
multiFraction(firstNumber,secondNumber);

// 3 - Функция умножения 2-х объектов-дробей;

function Fraction(upNumber,downNumber){
    return {upNumber:upNumber, downNumber:downNumber};
}
let firstNumber = Fraction(2,5);
let secondNumber = Fraction(3,4);

function multiFraction(obj1,obj2){
    let resultUpNumber = obj1.upNumber * obj2.upNumber;
    let resultDownNumber = obj1.downNumber * obj2.downNumber;
    console.log(`${resultUpNumber}/${resultDownNumber}`);
}
multiFraction(firstNumber,secondNumber);

// 4 - Функция деления 2-х объектов-дробей;

function Fraction(upNumber,downNumber){
    return {upNumber:upNumber, downNumber:downNumber};
}
let firstNumber = Fraction(1,4);
let secondNumber = Fraction(1,3);

function multiFraction(obj1,obj2){
    let resultUpNumber = obj1.upNumber * obj2.downNumber;
    let resultDownNumber = obj1.downNumber * obj2.upNumber;
    console.log(`${resultUpNumber}/${resultDownNumber}`);
}
multiFraction(firstNumber,secondNumber);

// 5 - Функция сокращения объекта-дроби.

