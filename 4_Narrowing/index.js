"use strict";
// Aula 01 - Typeof Type Guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
sum("4", "7");
sum(4, 7);
sum("4", 7);
// Aula 02 - Checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação!");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([1, 2, 3], "multiply");
// Aula 03 - Instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, gostaria de visualizar os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}!`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// Aula 04 - Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const dog1 = new Dog("Dog1");
const dog2 = new Dog("Dog2", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um SRD");
    }
}
showDogDetails(dog1);
showDogDetails(dog2);
