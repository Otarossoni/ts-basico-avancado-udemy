// Aula 01 - Void
function withoutReturn(): void {
  console.log("Função sem retorno!");
}
withoutReturn();

// Aula 02 - Callback como argumento
function greeting(name: string): string {
  return `Olá ${name}!`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função");
  const greet = f(userName);
  console.log(greet);
}

preGreeting(greeting, "Otávio");

// Aula 03 - Generic Function
function firstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["1", "2", "3"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}
const newObject = mergeObjects(
  { name: "Otávio" },
  { age: 20, job: "Programmer" }
);
console.log(newObject);

// Aula 04 - Constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;
  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(10, 11));
console.log(biggestNumber("10", "11"));

// Aula 05 - Especificando tipo do argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5]));
console.log(mergeArrays<number | string>([1, 2, 3], [4, 5]));

// Aula 06 - Parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  }
  return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("Otávio"));
console.log(modernGreeting("Otávio", "Sr."));

// Aula 07 - Parâmetros default
function somaDefault(n: number, m: number = 10): number {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(10, 15));

// Aula 08 - Unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("X é um número");
  }
}

doSomething([1, 2, 3]);
doSomething(5);

// Aula 09 - Never
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

// showErrorMessage("Algum erro!");

// Aula 10 - Rest operator
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3, 4, 5));

// Aula 11 - Destructuring em parâmetros
function showProductDetails({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `O nome do produto é ${name} e ele custa R$${price}`;
}

const shirt = { name: "Camisa", price: 49.99 };

showProductDetails(shirt);
