function foodFactory(food, price, type) {
    return {
        food,
        price,
        type,
    }
}

const food = [
    foodFactory("apple", 5, "fruit"),
    foodFactory("pear", 4, "fruit"),
    foodFactory("bananna", 3, "fruit"),
    foodFactory("orange", 4, "fruit"),
    foodFactory("strawberry", 2, "fruit"),
    foodFactory("beef", 6, "meat"),
    foodFactory("pork", 7, "meat"),
];

function neededFruit(food) {
    const fruit = food.filter(({ type }) => type === "fruit");
    return fruit;
}

const fruits = neededFruit(food);
console.log("John Doe wants to buy:");
console.log(fruits);

function basket(fruits) {
    let i = 0;
    let spentMoney = 0;
    let wallet = 50;
    const shoppingBasket = [];
    do {
        shoppingBasket.push(fruits[i])
        spentMoney = spentMoney + fruits[i].price;
        i++;
        if (i === fruits.length - 1) {
            i = 0;
        }
    } while (spentMoney < wallet)

    console.log("John Doe bought:");
    console.log(shoppingBasket);
}

basket(fruits);

