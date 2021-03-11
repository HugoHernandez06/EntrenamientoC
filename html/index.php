<!--?php

require '../php/registro_usuario_be.php';

?-->
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link REL=StyleSheet HREF="../css/style.css" TYPE="text/css" MEDIA=screen>
      <script language="javascript" src="../js/main.js" type="text/javascript"></script>
      <!--script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script-->
   </head>
<!--splash-->
   <section id="splash">
      <br>
      <h1>Splash de la app</h1>
      <a href=""><img src="../img/dog-labrador-icon.png" alt="splash" border=""></a>        
   </section>
<!--menu login-->
   <section id="menuLogin" class="ocultar">
      <div class="panel-central-img">
         <a href=""><img src="../img/dog-labrador-icon.png" alt="splash" border=""></a>
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_login" >Login</a>
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_registro" >Registro</a>
      </div>
   </section>
<!--login-->
   <section id="login" class="ocultar">
      <a href="javascript:void(0);" class="volver" id="btn_volver" ><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <div class="panel-central-img">
         <a href=""><img src="../img/dog-labrador-icon.png" ></a>   
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Usuario" name="Usuario">
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Password"  name="Clave">
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_enviar">Enviar</a>
      </div>
   </section>
<!--registro-->
<section id="registro" class="ocultar" >
    <form  method = "POST">
      <a href="javascript:void(0);" class="volver" id="btn_volver"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <div class="panel-central-img">
         <a href=""><img src="../img/dog-labrador-icon.png" alt="splash" border=""></a>
      </div>
      <div class="panel-central-reducido">
          <input type="text"  placeholder="Nombre Completo" name="nombre_completo" >
        </div>
      <div class="panel-central-reducido">
          <input type="text"  placeholder="Correo Electronico"  name="correo">
      </div>
      <div class="panel-central-reducido">
          <input type="text"  placeholder="Usuario" name="usuario">
      </div>
      <div class="panel-central-reducido">
          <input type="password"  placeholder="Contraseña" name="contrasena">
      </div>
      <div class="panel-central-reducido">
      <buttton  class="boton" href="javascript:void(0);" id="btn_enviar1" >Guardar</buttton>
      </div>
    </form>
   </section>
<!--registro mascota-->
   <section id="registroMascota" class="ocultar">
      <a href="javascript:void(0);" class="volver" id="btn_volver1"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <h2>Registra tu mascota</h2>
      <a href=""><img src="../img/camera-icon.png" alt="añadir foto" border=""></a>
      <h3>añadir foto</h3>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Añadir Nombre" name="">
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Añadir Edad"  name="">
      </div>
      <div class="panel-central-reducido">
         <select name="menu">
            <option value="0">Añadir Raza......................</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
         </select>
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_enviar2">Guardar</a>
      </div>
   </section>
<!--cambio datos-->
   <section id="cambioDatos" class="ocultar">
      <a href="javascript:void(0);" class="volver2" id="btn_volver5"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <div class="panel-central-img">
         <a href=""><img src="../img/dog-labrador-icon.png" alt="splash" border=""></a>       
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Nombre" name="Nombre">
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Apellido"  name="Apellido">
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Usuario" name="Usuario">
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Password" name="Password">
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_guardarCD">Guardar</a>
      </div>
   </section>
<!--inicio-->
   <section id="inicio" class="ocultar">
      <a  class = "ajustes" href="javascript:void(0);" id="btn_ajustes"><span class="material-icons cl-black">
      settings</span></a>
      <a href=""><img src="../img/22214-dog-face-icon.png" alt="foto perfil" border=""></a>          
      <h3>Nombre / raza</h3>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_entrenamiento">Entrenamiento</a>
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_cuidados">Cuidados</a>
      </div>
      <div class="panel-central-reducido">
      <a class="boton" href="javascript:void(0);" id="btn_dieta">Dieta</a>
      </div>
      <div class="panel-central-reducido">
      <a class="boton" href="javascript:void(0);" id="btn_misMascotas">Mis mascotas</a>
   </section>
<!--cuidados-->
   <section id="cuidados" class="ocultar">
      <a href="javascript:void(0);" class="volver2" id="btn_volver2"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <br>
      <h1>Cuidados</h1>
      <input type="text" class="pantallas-info" readonly = »readonly»>
   </section>
<!--dieta-->
   <section id="dieta" class="ocultar">
      <a href="javascript:void(0);" class="volver2" id="btn_volver2"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <br>
      <h1>Dieta</h1>
      <input type="text" class="pantallas-info" readonly = »readonly»>
   </section>
<!--entrenamiento-->
   <section id="entrenamiento" class="ocultar">
      <a href="javascript:void(0);" class="volver2" id="btn_volver2"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <br>
      <h1>Entrenamiento</h1>
      <div class="panel-central-img">
         <a href=""><img src="../img/dog-icon.png" alt="" border=""></a>   
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_basico">Basico</a>
      </div>
      <div class="panel-central-img">
         <a href=""><img src="../img/Puppy-2-icon.png" alt="splash" border=""></a>    
      </div>
      <div class="panel-central-reducido">
      <a class="boton" href="javascript:void(0);" id="btn_trucos">Trucos</a>
   </section>
<!--basico-->
   <section id="basico" class="ocultar">
      <a href="javascript:void(0);" class="volver3" id="btn_volver3"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <br>
      <h1>Basico</h1>
      <input type="text" class="pantallas-info" readonly = »readonly»>
   </section>
<!--trucos-->
   <section id="trucos" class="ocultar">
      <a href="javascript:void(0);" class="volver3" id="btn_volver3"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <br>
      <h1>Trucos</h1>
      <input type="text" class="pantallas-info" readonly = »readonly»>
   </section>
<!--mismascotas-->
   <section id="misMascotas" class="ocultar">
      <a href="javascript:void(0);" class="volver2" id="btn_volver2"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <div class="panel-central-reducido">
         <h1>Mis mascotas</h1>
      </div>
      <div class="panel-central-reducido">
         <input type="text" readonly = »readonly» placeholder="Nombre">
      </div>
      <div class="panel-central-reducido">
         <input type="text" readonly = »readonly» placeholder="Raza">
      </div>
      <div class="panel-central-reducido">
         <input type="text" readonly = »readonly» placeholder="edad">
      </div>
      <div class="panel-central-reducido">
         <a class="boton_añadir" href="javascript:void(0);" id="btn_añadirMascota">+</a>
      </div>
      <div class="panel-central-reducido">
      <h2>
      Añadir mascota<h2\>
   </section>
<!--añadirmascota-->
   <section id="añadirMascota" class="ocultar">
      <a href="javascript:void(0);" class="volver" id="btn_volver6"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <div class="panel-central-reducido">
         <input type="text" readonly = »readonly» placeholder="Añadir Nombre">
      </div>
      <div class="panel-central-reducido">
         <input type="text" readonly = »readonly» placeholder="Añadir edad">
      </div>
      <div class="panel-central-img">
      <a href=""><img src="../img/camera-icon.png" alt="añadir foto" border=""></a>
      <h3>añadir foto</h3>
      <div class="panel-central-reducido">
         <select name="menu">
            <option value="0">Añadir Raza......................</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
         </select>
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_guardarM">Guardar</a>
      </div>
   </section>
<!--ajustes-->
   <section id="ajustes" class="ocultar">
      <a href="javascript:void(0);" class="volver2" id="btn_volver2"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <div class="panel-central-img">
         <h2>Ajustes</h2>
         <a href=""><img src="../img/ajustes.png" width="150" height="150"></a>
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);"id="btn_ajustesCuenta">Cuenta</a>
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_cerrarSecion">Cerrar sesion</a>
      </div>
   </section>
<!--ajustes cuenta-->
   <section id="ajustesCuenta" class="ocultar">
      <a href="javascript:void(0);" class="volver" id="btn_volver4"><span class="material-icons cl-black">
      arrow_back
      </span></a>
      <div class="panel-central-img">
         <a href=""><img src="../img/dog-labrador-icon.png" alt="Login" border=""></a>   
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Usuario" name="Usuario">
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Contraseña"  name="Clave">
      </div>
      <div class="panel-central-reducido">
         <input type="text"  placeholder="Confirmar contraseña"  name="Clave">
      </div>
      <div class="panel-central-reducido">
         <a class="boton" href="javascript:void(0);" id="btn_cambioDatos">Enviar</a>
      </div>
   </section>