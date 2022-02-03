function cargarContinentes() {
    var xhttp = new XMLHttpRequest();
    // La ruta debería ser absoluta. La pongo relativa para que no haya errores 
    var ruta = "../servidor/world.php";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("RECIBIDA RESPUESTA");
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText);
            rellenarContinentes(obj);
        }else if(this.readyState == 4 && this.status == 404) {

            alert(`LA RUTA ${ruta} ESTA MAL`);

        }

    };

    xhttp.open("GET", ruta , true);
    xhttp.send();

}

function rellenarContinentes(arrayContinentes){

    // <option value="NombreContinente">[NombreContinente]</option>
    // Añadir al selector de continentes

    for(let continente of arrayContinentes){

        var opcion = document.createElement("option");
        var textoOpcion = document.createTextNode(continente.nombre);
        opcion.appendChild(textoOpcion);
        opcion.setAttribute("value",continente.nombre);
        document.getElementById("continentes").appendChild(opcion);

    }

}

function cargarPaises(){

    var continente = document.getElementById('continentes').value;

    var ruta = "../servidor/world.php?continente=" + continente;

    console.log(ruta);

    var xhttp = new XMLHttpRequest(); 

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("RECIBIDA RESPUESTA");
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText);
            rellenarPaises(obj);
        }else if(this.readyState == 4 && this.status == 404) {

            alert(`LA RUTA ${ruta} ESTA MAL`);

        }

    };

    xhttp.open("GET", ruta , true);
    xhttp.send();

}

function rellenarPaises(arrayPaises){

    // <option value="[codigoPais]">[NombrePais]</option>
    // Añadir al selector de paises

    var pais;

    for(var i=0;i<arrayPaises.length;i++){
        pais = arrayPaises[i];

        var opcion = document.createElement("option");
        var textoOpcion = document.createTextNode(pais.nombre);
        opcion.appendChild(textoOpcion);
        opcion.setAttribute("value",pais.codigo);
        document.getElementById("paises").appendChild(opcion);

    }

}

function cargarCiudades(){

    var pais= document.getElementById('paises').value;

    var ruta = "../servidor/world.php?pais=" + pais;

    console.log(ruta);

    var xhttp = new XMLHttpRequest(); 

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("RECIBIDA RESPUESTA");
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText);
            rellenarCiudades(obj);
        }else if(this.readyState == 4 && this.status == 404) {

            //alert("LA RUTA " + ruta + " ESTA MAL");
            alert(`LA RUTA ${ruta} ESTA MAL`);

        }

    };

    xhttp.open("GET", ruta , true);
    xhttp.send();

}

function rellenarCiudades(arrayCiudades){

    // <option value="[idCiudad]">[NombreCiudad]</option>
    // Añadir al selector de ciudades

    var ciudad;

    for(var i=0;i<arrayCiudades.length;i++){
        ciudad = arrayCiudades[i];

        var opcion = document.createElement("option");
        var textoOpcion = document.createTextNode(ciudad.nombre);
        opcion.appendChild(textoOpcion);
        opcion.setAttribute("value",ciudad.id);
        document.getElementById("ciudades").appendChild(opcion);

    }

}

function cargarDatosCiudad(){

    var ciudad = document.getElementById('ciudades').value;

    var ruta = "../servidor/world.php?ciudad=" + ciudad;

    console.log(ruta);

    var xhttp = new XMLHttpRequest(); 

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("RECIBIDA RESPUESTA");
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText);
            mostrarCiudad(obj[0]);
        }else if(this.readyState == 4 && this.status == 404) {

            //alert("LA RUTA " + ruta + " ESTA MAL");
            alert(`LA RUTA ${ruta} ESTA MAL`);

        }

    };

    xhttp.open("GET", ruta , true);
    xhttp.send();

}


function mostrarCiudad(ciudad){

    /*
        <div id="datosCiudad">
            <h2>[Nombre Ciudad]</h2>
            <h3>[Pais]</h3>
            <p>distrito</p>
            <p>[poblacion]</p>
        </div>
    */

    var elemh2 = document.createElement("h2");
    var textoh2 = document.createTextNode(ciudad.nombre);
    elemh2.appendChild(textoh2);

    document.getElementById("datosCiudad").appendChild(elemh2);


}