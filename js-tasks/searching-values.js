const people = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Emily Davis', age: 35 },
    { name: 'Jannet Jones', age: 22 }
];

// Log the result after each task:

// 1. Sort people by age...
const sortedByAge = people.slice().sort((a, b) => a.age - b.age);
console.log("Sorted by age:", sortedByAge);

// 2. Find a person whose name starts with 'Jan'...
const personWithJan = people.find(person => person.name.startsWith('Jan'));
console.log("Person whose name starts with 'Jan':", personWithJan);

// 3. Joining all names together to form a single string separated by a comma...
const allNames = people.map(person => person.name).join(', ');
console.log("All names separated by comma:", allNames);

