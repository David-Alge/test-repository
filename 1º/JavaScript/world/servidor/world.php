<?php

$textoRespuesta = "";
$arrayRespuesta = array();   // Usado tanto para si va bien como para si va mal

$mysqli = new mysqli('127.0.0.1', 'root', '', 'world');
$mysqli->set_charset("utf8");

// ¡Oh, no! Existe un error 'connect_errno', fallando así el intento de conexión
if ($mysqli->connect_errno) {
    $arrayRespuesta = array(
        'todoCorrecto' => false,
        'textoError' => 'Lo sentimos, este sitio web está experimentando problemas. Inténtelo más tarde'
    );
} else {

    // Realizar una consulta SQL

    $numParams = count($_GET);

    if ($numParams == 0) {
        $sql = "SELECT 
                    DISTINCT Continent as nombre, 
                    COUNT(*) as num_paises 
                    FROM country 
                    GROUP BY Continent";
    } else {

        if (isset($_GET['continente']) && $_GET['continente'] != '') {
            $sql = "SELECT 
                        code as codigo,
                        name as nombre
                    FROM country 
                    WHERE continent='" . $_GET['continente'] . "'";
        } elseif (isset($_GET['pais']) && $_GET['pais'] != '') {
            $sql = "SELECT 
                        id,
                        name as nombre
                    FROM city 
                    WHERE CountryCode='" . $_GET['pais'] . "'";
        } elseif (isset($_GET['ciudad']) && $_GET['ciudad'] != '') {
            $sql = "SELECT 
                        id,
                        name as nombre,
                        countrycode as pais,
                        district as distrito,
                        population as poblacion 
                    FROM city 
                    WHERE id='" . $_GET['ciudad'] . "'";
        }


    }

    //echo $sql."<br/>";   // Para ver la query que estamos lanzando

    if (!$resultado = $mysqli->query($sql)) {
        // ¡Oh, no! La consulta falló. 

        $arrayRespuesta = array(
            'todoCorrecto' => false,
            'textoError' => 'Lo sentimos, este sitio web está experimentando problemas. Inténtelo más tarde'
        );
    } else {  // La query funciona. Devolvemos resultado

        while ($elemento = $resultado->fetch_assoc()) {

            array_push($arrayRespuesta, $elemento);
        }
    }

}





//echo "<br/>";
//echo "<pre>";
//var_dump($arrayRespuesta);
//echo "<br/>";
//echo "</pre>";
//echo "<br/>";
//echo "<br/>";

$textoRespuesta = json_encode($arrayRespuesta, JSON_PRETTY_PRINT);

//echo "JSON A MANDAR: <br/>";
//echo "<pre>";
echo $textoRespuesta;
//echo "</pre>";
