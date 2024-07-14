function copiarTexto() {
  // https://www.youtube.com/watch?v=8tQQqVuUDjg
  const input = document.querySelector(".texto-respuesta");
  const button = document.querySelector(".boton-copiar");

  navigator.clipboard.writeText(input.textContent);
  button.textContent = "Copiado";
  // Devuelve el valor original de el boton Copiar
  setTimeout(() => (button.textContent = "Copiar"), 2000);
}

function respuesta(texto) {
  //  idea: https://www.youtube.com/watch?v=I1uGwXFWQuQ

  var elementoP = document.createElement("p");
  // captar atributos:  https://www.youtube.com/watch?v=hgpFU976qQc&t=493s
  elementoP.setAttribute("class", "texto-respuesta"); //ponemos la misma clase que tenia el parrafo en html
  var parrafo = document.createTextNode(texto);

  elementoP.appendChild(parrafo);

  var miDiv = document.querySelector("#textoResultado");
  var antiguoP = document.querySelector(".texto-respuesta");

  miDiv.replaceChild(elementoP, antiguoP);
}
// ENCRIPTAR
function funcion1() {
  var texto = document.getElementById("textoObjetivo");
  var tVal = texto.value.toLowerCase();
  var cadena = "";
  var temp;
  // console.log(textoValor[20] == 'a');

  for (let i = 0; i < tVal.length; i++) {
    switch (tVal[i]) {
      case "a":
        temp = "ai";
        break;
      case "e":
        temp = "enter";
        break;
      case "i":
        temp = "imes";
        break;
      case "o":
        temp = "ober";
        break;
      case "u":
        temp = "ufat";
        break;
      case "á":
        temp = "ia";
        break;
      case "é":
        temp = "reten";
        break;
      case "í":
        temp = "semi";
        break;
      case "ó":
        temp = "rebo";
        break;
      case "ú":
        temp = "tafu";
        break;
      default:
        temp = tVal[i];
        break;
    }
    cadena += temp;
  }
  // console.log(cadena);
  respuesta(cadena);
  textoResultado();
}
//DESENCRIPTAR
function funcion2() {
  var texto = document.getElementById("textoObjetivo");
  var tVal = texto.value;
  var cadenaRespuesta = "";
  var i = 0;
  var temp = "";
  while (i < tVal.length) {
    switch (tVal[i]) {
      case "a":
        if (tVal[i + 1] == "i") {
          temp = "a";
          i += 2;
        } else {
          i++;
          temp = tVal[i];
        }
        break;
      case "e":
        if (
          tVal[i + 1] == "n" &&
          tVal[i + 2] == "t" &&
          tVal[i + 3] == "e" &&
          tVal[i + 4] == "r"
        ) {
          temp = "e";
          i += 5;
        } else {
          i++;
          temp = tVal[i];
        }
        break;
      case "i":
        if (tVal[i + 1] == "m" && tVal[i + 2] == "e" && tVal[i + 3] == "s") {
          temp = "i";
          i += 4;
        } else {
          i++;
          temp = tVal[i];
        }
        break;
      case "o":
        if (tVal[i + 1] == "b" && tVal[i + 2] == "e" && tVal[i + 3] == "r") {
          temp = "o";
          i += 4;
        } else {
          i++;
          temp = tVal[i];
        }
        break;
      case "u":
        if (tVal[i + 1] == "f" && tVal[i + 2] == "a" && tVal[i + 3] == "t") {
          temp = "u";
          i += 4;
        } else {
          i++;
          temp = tVal[i];
        }
        break;
      default:
        temp = tVal[i];
        i++;
        break;
    }
    cadenaRespuesta += temp;
  }
  respuesta(cadenaRespuesta);
  textoResultado();
  // console.log(cadenaRespuesta);
}
function textoResultado() {
  document.getElementById("sinTexto").style.display = "none";
  document.getElementById("textoResultado").style.display = "block";
}
