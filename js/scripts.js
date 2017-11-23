
document.getElementById("imagen").onload = function() {
  var canvas = document.getElementById("lienzo");
  var cntx = canvas.getContext("2d");
  var img = document.getElementById("imagen");
  cntx.drawImage(img, 0, 0);
  var imgData = cntx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(imgData.data[0], imgData.data[1], imgData.data[2], imgData.data[3+4]);
};




/*let canvas = document.getElementById("lienzo");
let cntx = canvas.getContext("2d");
let name;
let img = document.getElementById("imagen");
img.onload = function(){ cntx.drawImage(img, 0, 0); }
var imgData = cntx.getImageData(0, 0, canvas.width, canvas.height);
console.log(imgData.data.length);*/

/**cargamos la imagen al canvas */
/*function cargarImg() {
  img = new Image();
  img.src = name;
  img.onload = function(){ cntx.drawImage(img, 0, 0); }
  var imgData = cntx.getImageData(0, 0, canvas.width, canvas.height);

}

/**obtenemos el nombre del fichero que se ingreso al input */
/*function nombre(fic) {
  fic = fic.split('\\');
  name = fic[fic.length-1];
}*/
