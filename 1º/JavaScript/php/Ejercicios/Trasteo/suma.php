

<!DOCTYPE html>
<html>
<head>
<title>Trasteo</title>
</head>
<body>

<h1> EJERCICIO !</h1>

<?php
    var_dump($_REQUEST);
    echo "<br/>";

    $arrayP = array("iron man", "hulk","viuda negra","capitana Marvel");
    $arrayF = array("url1", "url2","url3","url4");

    if(isset($_REQUEST["boton"])){
    switch($_REQUEST["boton"]){
        case "SUMAR":
            if( isset($_REQUEST["num1"]) && isset($_REQUEST["num2"])) {
    
                $a = $_REQUEST["num1"];
                $b = $_REQUEST["num2"];
            
                $c = $a +$b;
                echo "EL RESULTADO DE LA SUMA ES ". $c;
            
                }
                break;
        case "SUMAR2":
            if( isset($_REQUEST["num3"]) && isset($_REQUEST["num4"])) {
                if($_REQUEST["num3"] != "") && ($_REQUEST["num4"]!= "")){
        
                    if(is_numeric($_REQUEST["num3"]) && is_numeric($_REQUEST["num4"])){
                        $a = $_REQUEST["num3"];
                        $b = $_REQUEST["num4"];
                    
                        $c = $a +$b;
                        echo "EL RESULTADO DE LA SUMA ES ". $c
                }else{
                    echo "No son numeros";
                }
            }else{
                echo "Campos vacios";
            }
            break;
        case "VERFOTO":
            echo "<h2>".$arrayF[$_REQUEST["personaje"]]."</h2>";
            echo "<img src='".$arrayF[$_REQUEST["personaje"]];

        break;
    }
}
    

    
?>

<h1> EJERCICIO 1 </h1>

<form action="suma.php" method="GET">
    Numero 1:<input type="number" name="num1" required> <br/>
    Numero 2:<input type="number" name="num2" required> <br/>
    <input type="submit" value="SUMA 1" name="boton">
</form>

<h1> EJERCICIO 2 </h1>

<form action="suma.php" method="GET">
    Numero 1:<input type="text" name="num3" > <br/>
    Numero 2:<input type="text" name="num4" > <br/>
    <input type="submit" value="SUMA2" name="boton">
</form>

<h1> EJERCICIO 3 </h1>
<?php
    
  

?>


<form action="suma.php" method="GET">

    <select name="personaje">
    <?php
    for($1 = 0; $i< count ($arrayP); $i++ ){
        echo "<option value='"> "" .$arrayP[$i]."</option>";
    }
  

    ?>
    <option> Hulk </option>
    <option> Iron Man </option>
    <option> Viuda Negra </option>

    </select>

    <input type="submit" value="VERFOTO" name="boton">
</form>

</body>
</html>