const library = [
    {title: 'The Road Ahead', author: 'Bill Gates', year: 1995, bestseller: true},
    {title: 'Walter Isaacson', author: 'Steve Jobs', year: 2011, bestseller: true},
    {title: 'Mockingjay', author: 'Suzanne Collins', year: 2010, bestseller: false},
    {title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008, bestseller: true}
]

// Log the result after each task:

// List each author (without duplicates)...
const uniqueAuthors = [...new Set(library.map(book => book.author))];
console.log("Unique authors:", uniqueAuthors);

// List all book titles published after 2000...
const titlesAfter2000 = library.filter(book => book.year > 2000).map(book => book.title);
console.log("Book titles published after 2000:", titlesAfter2000);

// List all property names of the first book separated by a comma (expected output: 'title, author, year')...
const firstBookProperties = Object.keys(library[0]).join(', ');
console.log("Property names of the first book:", firstBookProperties);

// List all bestseller book titles...
const bestsellerTitles = library.filter(book => book.bestseller).map(book => book.title);
console.log("Bestseller book titles:", bestsellerTitles);
