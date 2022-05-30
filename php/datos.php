<?php 

$forma = $_POST['forma'];
$sabor = $_POST['saborPasteles'];

if($forma == "Redondo" && $sabor == "Fresa"){
    header("location: ../paginas/redondos-fresa.html");
}elseif($forma == "Redondo" && $sabor == "Chocolate"){
    header("location: ../paginas/redondos-chocolate.html");
}elseif($forma == "Rectangular" && $sabor == "Fresa"){
    header("location: ../paginas/rectangulares-fresa.html");
}elseif($forma == "Rectangular" && $sabor == "Chocolate"){
    header("location: ../paginas/rectangulares-chocolate.html");
}



?>