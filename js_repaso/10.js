//FizzBuzz
function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`${numero} es un FizzBuzz`);
  } else if (numero % 3 === 0) {
    console.log(`${numero} es un Fizz`);
  } else if (numero % 5 === 0) {
    console.log(`${numero} es un Buzz`);
  } else {
    console.log(`${numero} no es múltiplo de 3 ni de 5`);
  }
}

fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(30);
fizzBuzz(7);
