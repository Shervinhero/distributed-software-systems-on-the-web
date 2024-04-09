var fruits = ['apple', 'banana', 'cherry'];

var includesBanana = false;
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'banana') {
        includesBanana = true;
        break;
    }
}

console.log('Includes banana:', includesBanana);

var everyFruitHasMoreThanFiveChars = true;
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].length <= 5) {
        everyFruitHasMoreThanFiveChars = false;
        break;
    }
}

console.log('Every fruit has more than five characters:', everyFruitHasMoreThanFiveChars);

var someFruitsHaveMoreThanFiveChars = false;
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 5) {
        someFruitsHaveMoreThanFiveChars = true;
        break;
    }
}

console.log('Some fruits have more than five characters:', someFruitsHaveMoreThanFiveChars);

-----
ES6 Version:
    const fruits = ['apple', 'banana', 'cherry'];

const includesBanana = fruits.includes('banana');
console.log('Includes banana:', includesBanana);

const everyFruitHasMoreThanFiveChars = fruits.every(fruit => fruit.length > 5);
console.log('Every fruit has more than five characters:', everyFruitHasMoreThanFiveChars);

const someFruitsHaveMoreThanFiveChars = fruits.some(fruit => fruit.length > 5);
console.log('Some fruits have more than five characters:', someFruitsHaveMoreThanFiveChars);
