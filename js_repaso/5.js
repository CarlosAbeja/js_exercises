//Contar vocales
function contarVocales(frase) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (
      frase[i].toLowerCase() === "a" ||
      frase[i].toLowerCase() === "e" ||
      frase[i].toLowerCase() === "i" ||
      frase[i].toLowerCase() === "o" ||
      frase[i].toLowerCase() === "u"
    ) {
      contador++;
    }
  }
  return contador;
}
let frase = "murcielago";
console.log(
  "La frase o palabra",
  frase,
  "tiene",
  contarVocales(frase),
  "vocales."
);
