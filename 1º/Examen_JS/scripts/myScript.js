function cargarDatos(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {

          var vengadores = JSON.parse(xhttp.responseText);
         
          usarDatos(vengadores);

      }else if(this.readyState == 4 &&  this.status == 404){

          alert ("LA RUTA ESTÁ MAL!!!! ");
      }
  }

  const rutaJSON = "vengadores.json";
  xhttp.open("GET",rutaJSON);
  xhttp.send();
}

function usarDatos(data) {
  const peliculas = data.peliculas;

  let principalVengador = document.getElementById("principal");

  for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];
    


    let divPelicula = document.createElement("class")
    divPelicula.setAttribute("class",pelicula.id);


    let imgPelicula = document.createElement("img");
    imgPelicula.setAttribute("img", pelicula.cartel);

    let h4Pelicula = document.createElement("h4");
    h4Pelicula.setAttribute("h4", pelicula.titulo);

    let txtPelicula = document.createElement("p");
    txtPelicula.setAttribute("src", pelicula.sinopsis);

    let aPelicula = document.createElement("a");
    aPelicula.setAttribute("href", pelicula.imdb);

    principalVengador.append(divPelicula);

    divPelicula.append(imgPelicula);
    divPelicula.append(h4Pelicula);
    divPelicula.append(txtPelicula);
    divPelicula.append(aPelicula);

    
}
  


}

