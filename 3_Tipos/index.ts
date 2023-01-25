// Aula 01 - Arrays - Parte 01

// Number
let numbers: number[] = [1, 2, 3];
numbers.push(4);
console.log(numbers[2]);

// String
let names: string[] = ["Otávio", "Monteiro"];
names.push("Rossoni");
console.log(numbers[2]);

// Aula 02 - Arrays - Parte 02
const nums: Array<number> = [100, 200, 300];
nums.push(400);

// Aula 03 - Any
const arr1: any = ["", {}, 123, true];
arr1.push([1, 2, 3]);
console.log(arr1);

// Aula 04 - Parâmetros Tipados
function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);

// Aula 05 - Retorno de Função
function greeting(name: string): string {
  return `Olá ${name}!`;
}

console.log(greeting("Otávio"));

// Aula 06 - Função Anônima
setTimeout(function () {
  const sallary: number = 1000;
  console.log(sallary);
}, 2000);

// Aula 07 - Tipos em Objeto
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
}

const objCoord = { x: 15, y: 20 };

passCoordinates(objCoord);

// Aula 08 - Propriedades Opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// Aula 09 - Validação de argumentos opcionais
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }

  return `Olá, ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Otávio", "Rossoni"));
console.log(advancedGreeting("Otávio"));

// Aula 10 - Union Type - Parte 01
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");
// showBalance(true);

// Aula 11 - Union Type - Parte 02
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }
  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// Aula 12 - Type Alias
type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é: ${id}`);
}

showId(1);
showId("200");

// Aula 13 - Inteface
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} - Y: ${obj.y} - Z: ${obj.z}`);
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};

showCoords(coordObj);

// Aula 14 - Interface X Type Alias
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: "Otávio", age: 20 };
console.log(somePerson);

type personType = {
  name: string;
};

// type personType = {
//   age: number
// }

// Aula 15 - Literal Types
let test: "testando";

test = "testando";

console.log(test);

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é ${direction}`);
}

showDirection("center");
// showDirection("top")

// Aula 16 - Non null operator
const p = document.getElementById("some-p");
console.log(p!.innerText);

// Aula 17 - Big Int
let n: bigint;
n = 1000n;
console.log(n);

// Aula 18 - Symbol
let symbolA: symbol = Symbol("A");
let symbolB = Symbol("A");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
