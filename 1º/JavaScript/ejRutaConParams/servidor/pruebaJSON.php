<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

// Toda esta parte de los ifs la cambiaremos accediendo a una BD. 

if(isset($_GET["nombre"])){  // Compruebo sin me han mandado la clave 'nombre'
    if($_GET["nombre"] == "PACO"){ // Si es el valor de lo que me han mandado es PACO devuelvo sus datos
        $jsonEscribir = '[{
            "nombre": "PACO",
            "apellido": "RODRIGUEZ",
            "telefono": "699699699",
            "origen": "JSON GENERADO POR PHP"
        
        }]';
    }else if ($_GET["nombre"] == "OTRO") { // En este caso devuelvo los datos de OTRO
        $jsonEscribir = '[{
            "nombre": "OTRO",
            "apellido": "GONZALEZ",
            "telefono": "699699699",
            "origen": "JSON GENERADO POR PHP"
        
        }]';
    }else{  // Si no es ni PACO ni OTRO devuelvo 'No existe' 
        $jsonEscribir = '[{
            "nombre": "NO",
            "apellido": "EXISTE"
        }]';     
    }
}else{  // Si no quieren a nadie en concreto devuelvo a todos
    $jsonEscribir = '[
    {
        "nombre": "PACO",
        "apellido": "RODRIGUEZ",
        "telefono": "699699699",
        "origen": "JSON GENERADO POR PHP"
        
    },    
    {
        "nombre": "OTRO",
        "apellido": "GONZALEZ",
        "telefono": "699699699",
        "origen": "JSON GENERADO POR PHP"
    
    }]';

}

echo $jsonEscribir;

?>