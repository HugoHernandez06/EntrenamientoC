<?php

    include 'conexion_be.php';
    $nombre_Mascota =$_POST['nombre_Mascota'];
    $edad= $_POST['edad'];
    $raza = $_POST['raza'];
    
    
    $query = "INSERT INTO mascotas(nombre_Mascota, edad, raza)
              VALUES('$nombre_Mascota','$edad','$raza')";
    
    
    
    $ejecutar = mysqli_query($conexion, $query);


    mysqli_close($conexion);


?>