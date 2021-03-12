<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<?php

    include 'conexion_be.php';
    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    
    $query = "INSERT INTO usuarios(nombre_completo, correo,usuario, contrasena)
              VALUES('$nombre_completo','$correo','$usuario','$contrasena')";
    
    
    //verificacion de datos repetidos
    
    $verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo'");


    $verificacion = mysqli_num_rows($verificar_correo);
    
    

    if($verificacion>0)
    {
        echo ' <script>
        alert("El correo ya esta registrado");
        </script>
        ';
        
        
        exit();
    }

    $ejecutar = mysqli_query($conexion, $query);

    mysqli_close($conexion);
?>