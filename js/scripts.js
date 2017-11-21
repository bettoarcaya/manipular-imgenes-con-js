
let canvas = document.getElementById("lienzo");
let cntx = canvas.getContext("2d");
let name;

/**cargamos la imagen al canvas */
function cargarImg() {
  img = new Image();
  img.src = name;
  img.onload = function(){ cntx.drawImage(img, 0, 0); }
}

/**obtenemos el nombre del fichero que se ingreso al input */
function nombre(fic) {
  fic = fic.split('\\');
  name = fic[fic.length-1];
  console.log(name);
}

let imgData = cntx.getImageData(0, 0, canvas.width, canvas.height);

