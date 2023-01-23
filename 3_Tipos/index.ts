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
