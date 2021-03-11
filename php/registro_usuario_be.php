<?php

    include 'conexion_be.php';
<<<<<<< HEAD
    $nombre_completo = $_get['nombre_completo'];
    $correo = $_get['correo'];
    $usuario = $_get['usuario'];
    $contrasena = $_get['contrasena'];
=======
    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
>>>>>>> 77498149b5e28b68ff1b4e935e433e0d2748137a
    
    $query = "INSERT INTO usuarios(nombre_completo, correo,usuario, contrasena)
              VALUES('$nombre_completo','$correo','$usuario','$contrasena')";
    
    
    
    $ejecutar = mysqli_query($conexion, $query);


?>