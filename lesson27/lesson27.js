/* Завдання - 1 Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом. */

const shoppingList = [
    {
        name: 'Bread',
        quantity: 2,
        buy: 0
    },
    {
        name: 'Milk',
        quantity: 1,
        buy: 1
    },
    {
        name: 'Butter',
        quantity: 2,
        buy: 2
    },
    {
        name: 'Solt',
        quantity: 1,
        buy: 0
    },
    {
        name: 'Pepper',
        quantity: 1,
        buy: 0
    },
    {
        name: 'Sugar',
        quantity: 1,
        buy: 1
    }
];

// 1.1 - Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Вгорі куплені продукти

shoppingList.sort((a, b) => {
    return a.buy - b.buy;
});
console.log(shoppingList);

// 1.2 - Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

function addItem(name, quantity = 1, buy = 0) {
    const item = shoppingList.find(item => item.name === name);
    if(item) return item.quantity += quantity;

    shoppingList.push({
        name,
        quantity,
        buy
    });
}

// 1.3 - Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function checkBuy(name) {
    shoppingList.find(item => {
        if (item.name === name && item.buy === 0)
            item.buy = 1;
    });
}


/* Завдання 2 - Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции: */

const receipt = [
    {
        name: 'Potatoe',
        amount: 5,
        price: 2
    },
    {
        name: 'Tomato',
        amount: 6,
        price: 10
    },
    {
        name: 'Сucumber',
        amount: 4,
        price: 5
    },
    {
        name: 'Broccoli',
        amount: 2,
        price: 8
    },
    {
        name: 'Lemon',
        amount: 3,
        price: 6
    }
];

// 2.1 - Распечатка чека на экран;

function printReceipt(receipt) {
    let checkResult = '';
    let totalReceipt = 0;
    let totalAmount = 0;

    receipt.sort((a, b) => { // 2.3 - Получение самой дорогой покупки в чеке
        return b.price - a.price;
    });

    for (let i = 0; i < receipt.length; i++) {
        checkResult += `Name: ${receipt[i].name} \nAmount: ${receipt[i].amount} \nPrice: ${receipt[i].price} \nTotal: ${receipt[i].amount * receipt[i].price} \n------------------------ \n`;
        totalReceipt += receipt[i].amount * receipt[i].price; // 2.2 - Подсчет общей суммы покупки
        totalAmount += receipt[i].amount; // 2.4 - Подсчет средней стоимости одного товара в чеке
    }
    checkResult += `Most expancive product: ${receipt[0].name} \nTotal price: ${totalReceipt} \nMiddle product price ${(totalReceipt / totalAmount)}`;

    return checkResult;
}
console.log(printReceipt(receipt));

