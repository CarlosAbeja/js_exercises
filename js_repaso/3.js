//  factorial de un número
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Llamada correcta:
let numero = 6;
console.log("El factorial de", numero, "es", factorial(numero));
