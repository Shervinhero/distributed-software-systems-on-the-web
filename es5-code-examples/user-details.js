function displayUserDetails(user) {
    var name = user.name;
    var age = user.age;
    var email = user.email;

    console.log('Name: ' + name + ', Age: ' + age + ', Email: ' + email);
}

var user = {
    name: 'Jane Doe',
    age: 28,
    email: 'jane.doe@example.com'
};

displayUserDetails(user);
-------
    Es6 version:
    const displayUserDetails = ({ name, age, email }) => {
        console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
    };

const user = {
    name: 'Jane Doe',
    age: 28,
    email: 'jane.doe@example.com'
};

displayUserDetails(user);
