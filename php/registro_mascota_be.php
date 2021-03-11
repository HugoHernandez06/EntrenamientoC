<?php

    include 'conexion_be.php';
    $nombre_mascota = $_POST['nombre_mascota'];
    $edad = $_POST['edad'];
    $raza = $_POST['raza'];
    
    
    $query = "INSERT INTO mascotas(nombre_mascota, edad, raza)
              VALUES('$nombre_mascota','$edad','$raza')";
    
    
    
    $ejecutar = mysqli_query($conexion, $query);

    mysqli_close($conexion);


?>