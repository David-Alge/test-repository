function mandarInfo() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            // Typical action to be performed when the document is ready:
            console.log("RESPUESTA RECIBIDA");
            console.log(xhttp.responseText);

            var obj = JSON.parse(xhttp.responseText);

            // console.log(obj.origen);
            // console.log(obj["nombre"]);

            pintaCosas(obj);

        } else if (this.readyState == 4 && this.status == 404) {

            alert("LA RUTA ESTÁ MAL!!!! ");

        }

    };

    // Debería ser una ruta absluta. La pongo relativa para que no haya errores
    var ruta = "../servidor/pruebaJSON.php";

    // Capturo el nombre del input y lo guardo en una variable
    var nombreBuscado = document.getElementById("busqueda").value;

    console.log(nombreBuscado);

    // Si me han escrito algo en el input lo concateno con la ruta 
    if(nombreBuscado!=""){
        ruta += "?nombre="+nombreBuscado
    }

    console.log(ruta);

    xhttp.open("GET", ruta, true);
    xhttp.send();

}

function pintaCosas(arrayObjetos) {

    // Borro el contenido de la seccion
    document.getElementById("seccion").innerHTML = "";

    for (var i = 0; i < arrayObjetos.length; i++) {
        cosa = arrayObjetos[i];

        var textoNombre = document.createTextNode(cosa.nombre);

        var nodoParrafo = document.createElement("p");
        var nodoCapa = document.createElement("div");

        nodoParrafo.appendChild(textoNombre);

        nodoCapa.appendChild(nodoParrafo);

        /* esto es de la capa */

        nodoCapa.style.backgroundColor = "red";
        nodoCapa.classList.add("centrado");
        document.getElementById("seccion").appendChild(nodoCapa);

        /* esto es de la capa */

        var textoApellido = document.createTextNode(cosa.apellido);
        var nodoParrafo2 = document.createElement("p");
        nodoParrafo2.appendChild(textoApellido);
        nodoCapa.appendChild(nodoParrafo2);

    }

}

