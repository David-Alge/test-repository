function cargarAjax () {

    // Se llama desde el onload de ej2.html
    // Es parecido al anterior pero en este caso se hace llamada AJAX
    // (el código ya está listo) para cargar los datos de un JSON
    // Hay que terminar la función usarDatos
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            
            console.log("texto request",xhttp)
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

function usarDatos (datos) {

    let main = document.getElementById("principal");
    
 /*   let main_div = document.createElement("div");
    main_div.setAttribute("class","libro");
    main_div.setAttribute("id", libro.id);

    let main_h2 = document.createElement("h2");
    main_h2.innerHTML = libro.nombre;

    let main_p = document.createElement("p");
    main_p.innerHTML = libro.texto;

    main.append(main_div);
    main_div.append(main_2);
    main_div.append(main_p);
*/

    for (let index = 0; index < datos.length; index++) {
        const libro = datos[index];
        let main_div = document.createElement("div");
        main_div.setAttribute("class","libro");
        main_div.setAttribute("id", libro.id)

        let main_h2 = document.createElement("h2");
        main_h2.innerHTML = libro.nombre;

        let main_p = document.createElement("p");
        main_p.innerHTML = libro.texto;

        main.append(main_div);
        main_div.append(main_2);
        main_div.append(main_p);
    }

}
