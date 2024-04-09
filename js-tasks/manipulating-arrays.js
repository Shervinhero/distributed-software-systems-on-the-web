const cities = ['New York', 'Rome', "Moscow", "Tokyo", "Paris", "London", "Berlin", "Madrid", "Beijing", "Istanbul"];

// Log the result after each task:

// 1. Add an element to the end of the array...
cities.push("Sydney");
console.log("After adding 'Sydney' to the end:", cities);
// 2. Add an element to the beginning of the array...
cities.unshift("Los Angeles");
console.log("After adding 'Los Angeles' to the beginning:", cities);

// 3. Remove an element from the end of the array...
const removedEnd = cities.pop();
console.log("After removing the last element ('" + removedEnd + "'): ", cities);
// 4. Remove an element from the beginning of the array...
const removedStart = cities.shift();
console.log("After removing the first element ('" + removedStart + "'): ", cities);
// 5. Remove the element at index 2...
const removedAtIndex2 = cities.splice(2, 1);
console.log("After removing the element at index 2:", cities);
// 6. Remove the element 'Paris'...
const indexOfParis = cities.indexOf("Paris");
if (indexOfParis !== -1) {
    cities.splice(indexOfParis, 1);
}
console.log("After removing 'Paris':", cities);
