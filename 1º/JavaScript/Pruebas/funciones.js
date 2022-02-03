
	function crear(){
var col = document.getElementById("Ncolumna").value;
var filas = document.getElementById("Nfila").value;

var tabla = document.createElement("table");
for(i=0;i<filas;i++){
var fila = document.createElement("tr");

for(j=0;j<col;j++){ 

 	var Div = document.createElement("div");
  	Div.className += " cuadrado";

  	document.getElementById("fila").appendChild(Div);
  	

}

}
document.body.appendChild(tabla);
}




