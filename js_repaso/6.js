//Palíndromo
function esPalindromo(palabra) {
  let palabraInvertida = palabra.split("").reverse().join("");
  return palabra === palabraInvertida;
}
let palabra = "manual";
if (esPalindromo(palabra)) {
  console.log("La palabra", palabra, "es un palíndromo.");
} else {
  console.log("La palabra", palabra, "no es un palíndromo.");
}
