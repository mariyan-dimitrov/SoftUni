function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            let result;
            result = this.firstName + ' ' + this.lastName + ' ';
            result += `(age: ${this.age}, email: ${this.email})`;
            return result
        }
    }

    return [
        new Person("Maria", 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com')
    ]
}
getPersons().forEach(p=>console.log(p.toString()));
