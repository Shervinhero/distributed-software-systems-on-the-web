var person = {
    name: 'John',
    age: 30
};

var jobDetails = {
    title: 'Developer',
    department: 'Engineering'
};

var employee = {
    name: person.name,
    age: person.age,
    title: jobDetails.title,
    department: jobDetails.department
};

console.log(employee);
Es6 Version:
    const person = {
        name: 'John',
        age: 30
    };

const jobDetails = {
    title: 'Developer',
    department: 'Engineering'
};

const employee = {
    ...person,
    ...jobDetails
};
