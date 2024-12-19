//
//
// Variable du brush
//
//
let brushColor = "#FF6666";

//
//
// main function
//
//
function applyColor(item){
    const backgroundColor = rgbToHex(item.style.backgroundColor);
    brushColor = backgroundColor;
}

//
//
// fonction qui va bien
//
//
function rgbToHex(rgb) {
  // Extraire les valeurs r, g, b avec une regex
  const result = rgb.match(/\d+/g);
  if (!result || result.length < 3) {
    return null; // Retourne null si le format est incorrect
  }
  
  // Convertir chaque valeur en hexadécimal
  const r = parseInt(result[0], 10).toString(16).padStart(2, '0');
  const g = parseInt(result[1], 10).toString(16).padStart(2, '0');
  const b = parseInt(result[2], 10).toString(16).padStart(2, '0');
  
  // Combiner en une chaîne hexadécimale
  return `#${r}${g}${b}`;
}







