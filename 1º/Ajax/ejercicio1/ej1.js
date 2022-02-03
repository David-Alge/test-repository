function cargaAjax() {
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var dibujos = JSON.parse(xhttp.responseText);
           
            usarDatos(dibujos);

        }else if(this.readyState == 4 &&  this.status == 404){

            alert ("LA RUTA ESTÁ MAL!!!! ");
        }
    }

    const rutaJSON = "dibujos.json";
    xhttp.open("GET",rutaJSON);
    xhttp.send();
}


function usarDatos(data) {
        const dibujantes = data.dibujantes;

        let listaDibujantes = document.getElementById("listaDibujantes");
        let resultadoDibujantes = document.getElementById("resultado");


        for (let i = 0; i < dibujantes.length; i++) {
             //ELEMENTOS LI 
             const dibujante = dibujantes[i];
            console.log(dibujante);
            let listaDibujantes_li = document.createElement("li");
            listaDibujantes_li.innerHTML = dibujante.nombre;

            listaDibujantes.append(listaDibujantes_li)
             //ELEMENTOS SECTION;
             let articleDibujante = document.createElement("article");
             articleDibujante.setAttribute("class",dibujante.id);


             let h2Dibujante = document.createElement("h2");
             let aDibujante = document.createElement("a");
             if (dibujante.todos != null) {
                aDibujante.setAttribute("href", dibujante.todos);
                aDibujante.setAttribute("target", dibujante.ultimo);
             }
             
             h2Dibujante.innerHTML = dibujante.nombre

             let imgDibujante = document.createElement("img");
            imgDibujante.setAttribute("src", dibujante.ultimo);

            resultadoDibujantes.append(articleDibujante);
            articleDibujante.append(h2Dibujante);
            h2Dibujante.append(aDibujante);
            articleDibujante.append(imgDibujante);
        }

}