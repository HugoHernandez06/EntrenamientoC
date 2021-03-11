<?php

    include 'conexion_be.php';
    $nombre_completo = $_get['nombre_completo'];
    $correo = $_get['correo'];
    $usuario = $_get['usuario'];
    $contrasena = $_get['contrasena'];
    
    $query = "INSERT INTO usuarios(nombre_completo, correo,usuario, contrasena)
              VALUES('$nombre_completo','$correo','$usuario','$contrasena')";
    
    
    
    $ejecutar = mysqli_query($conexion, $query);


?>