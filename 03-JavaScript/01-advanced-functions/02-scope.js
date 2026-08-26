let name = "Ritz";

function greet() {
  let message = "Hello";

  console.log(name);
  console.log(message);
}

greet();

console.log(name);

let x = 10;
if (true) {
  let x = 20;
  console.log("Inside:", x);
}
console.log("Outside:", x);
