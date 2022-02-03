function cargarAjax () {

    // Se llama desde el onload de ej2.html
    // Es parecido al anterior pero en este caso se hace llamada AJAX
    // (el código ya está listo) para cargar los datos de un JSON
    // Hay que terminar la función usarDatos
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

        var libros = JSON.parse(xhttp.responseText);
        usarDatos(libros);

        }else if(this.readyState == 4 &&  this.status == 404){

            alert ("LA RUTA ESTÁ MAL!!!! ");
        }
    }

    const rutaJSON = "trasteo.json";
    xhttp.open("GET",rutaJSON);
    xhttp.send();
}

function usarDatos (libros) {

    console.log(libros);

    // A partir del array de libros (cada posición es un objeto JSON), 
    // añadir al árbol DOM lo necesario para que la página sea igual a modelo.html
    // También se usan las funciones createElement, createTextNode, appendChild
    // setAttribute y getElementById, pero en este caso los textos y algún atributo
    // no son fijos, sino los que tenga cada libro que haya en el JSON
    // Probad a añadir algún otro libro a trasteo.json para comprobar que también aparece

}


// Otra cosa que se puede probar a hacer es cambiar los estilos
// Por ejemplo, cuando se haga click sobre el div de un libro que
// se ponga de color negro y letra blanca (y viceversa)