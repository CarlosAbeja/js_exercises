// Contar palabras
function contarPalabras(texto) {
  if (typeof texto !== "string") return 0;
  return texto.split(" ").filter((palabra) => palabra.trim() !== "").length;
}

const frase = "Hola mundo JavaScript";
console.log(`El texto "${frase}" tiene ${contarPalabras(frase)} palabras`);

const fraseConEspacios = "   Hola   mundo   ";
console.log(
  `El texto "${fraseConEspacios}" tiene ${contarPalabras(
    fraseConEspacios
  )} palabras`
);
