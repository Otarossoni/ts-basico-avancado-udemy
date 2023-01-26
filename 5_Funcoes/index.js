"use strict";
// Aula 01 - Void
function withoutReturn() {
    console.log("Função sem retorno!");
}
withoutReturn();
// Aula 02 - Callback como argumento
function greeting(name) {
    return `Olá ${name}!`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Otávio");
// Aula 03 - Generic Function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["1", "2", "3"]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ name: "Otávio" }, { age: 20, job: "Programmer" });
console.log(newObject);
// Aula 04 - Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(10, 11));
console.log(biggestNumber("10", "11"));
// Aula 05 - Especificando tipo do argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5]));
console.log(mergeArrays([1, 2, 3], [4, 5]));
// Aula 06 - Parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Otávio"));
console.log(modernGreeting("Otávio", "Sr."));
// Aula 07 - Parâmetros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 15));
// Aula 08 - Unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// Aula 09 - Never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum erro!");
// Aula 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
// Aula 11 - Destructuring em parâmetros
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
showProductDetails(shirt);
