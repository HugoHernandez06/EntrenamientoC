src = "https://code.jquery.com/jquery-3.6.0.js";

var contU=idUsuario=idUsuarioLogin=1;
var contM=idMascota=idMascotaLogin=1;
var todosUsuarios=[];
var todasMascotas=[];

$(document).ready(function () {
    //You might want to do if check to see if localstorage set for theImage here
    var img = new Image();
    /*img.width="100";
    img.height="100";*/
    img.src = localStorage.theImage;

    $('.imagearea').html(img);

    $("body").on("change", ".classhere", function () {
        //Equivalent of getElementById
        var fileInput = $(this)[0]; //returns a HTML DOM object by putting the [0] since it's really an associative array.
        var file = fileInput.files[0]; //there is only '1' file since they are not multiple type.

        var reader = new FileReader();
        reader.onload = function (e) {
            // Create a new image.
            var img = new Image();

            img.src = reader.result;
            localStorage.theImage = reader.result; //stores the image to localStorage
            $(".imagearea").html(img);
        }

        reader.readAsDataURL(file); //attempts to read the file in question.
    });
});







//registrar Usuarios
function registro_Usuario() {

    let Usuario = {
        idUsuario: contU,
        nombre_completo: document.getElementById("nombre_completo").value,
        correo: document.getElementById("correo").value,
        usuario: document.getElementById("usuario").value,
        contrasena: document.getElementById("contrasena").value,
        confcontrasena: document.getElementById("confcontrasena").value


    }

    idUsuario = contU;
    localStorage.setItem("usuario " + contU, JSON.stringify(Usuario));
    contU++;


    llenar_Usuarios();

    return idUsuario, true;
};

//llenar array de usuarios
function llenar_Usuarios() {
    for (var i = 0; i < idUsuario; i++) {
        var id = idUsuario;
        id--;
        todosUsuarios[id] = "usuario " + idUsuario;

    }
}

function llenar_Mascotas() {
    for (var i = 0; i < idMascota; i++) {
        var id = idMascota;
        id--;
        todasMascotas[id] = "Mascota " + idMascota;

    }
}


//verificar datos ingresados para registro de usuarios


function verificar_Datos_Usuario() {

    var datos = [nombre_completo.value, correo.value, usuario.value, contrasena.value, confcontrasena.value];

    re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    for (var i = 0; i < datos.length; i++) {
        if (datos[i].length == 0) {
            alert("Porfavor ingresar todos los datos");
            return false
        }
        if (contrasena.value != confcontrasena.value) {
            alert("Las contraseñas no coinciden");
            return false;
        }
        if (!re.exec(correo.value)) {
            alert('Correo no valido');
            return false;
        }
        if(contrasena.value.length<8){
            alert("la contrasena debe contener 8 caracteres como minimo");
            return false;
        } if (JSON.parse(localStorage.getItem(todosUsuarios[i]))) {
            var usuarioR = JSON.parse(localStorage.getItem(todosUsuarios[i]));

            
            if(usuarioR.usuario==usuario.value){
                alert("ya existe un usuario con este nombre");
                return false;
  
            }
            if(usuarioR.correo==correo.value){
                alert("Ya existe una cuenta con este correo");
                return false;
            }

            }
        
    return true;

    }
}




    




//registrar Mascotas
function registro_Mascota() {

    let Mascota = {
        idMascota: contM,
        idUsuario: idUsuario,
        nombre_Mascota: document.getElementById("nombre_Mascota").value,
        edad: document.getElementById("edad").value,
        raza: document.getElementById("raza").value

    }
    idMascota=contM;
    localStorage.setItem("Mascota " + contM, JSON.stringify(Mascota));
    contM++;

    llenar_Mascotas();

    return idMascota,true;
}
//verificar datos ingresado para registro de mascota

function verificar_Datos_Mascota() {


    var datos = [nombre_Mascota.value, edad.value, raza.value];


    for (var i = 0; i < datos.length; i++) {
        if (datos[i].length == 0) {
            alert("Porfavor ingresar todos los datos");
            return false
        }
    }
    return true;

}


//añadir Mascota
function anadir_Mascota() {

    let anadir_Mascota = {
        idMascota: contM,
        idUsuario: idUsuarioLogin,
        nombre_Anadir_Mascota: document.getElementById("nombre_Anadir_Mascota").value,
        edad_Anadir_Mascota: document.getElementById("edad_Anadir_Mascota").value,
        raza_Anadir_mascota: document.getElementById("raza_Anadir_mascota").value

    }

    localStorage.setItem("Mascota " + contM, JSON.stringify(anadir_Mascota));
    contM++;

    llenar_Mascotas();

    return 

}

// verificar datos ingresad para añadir mascota

function verificar_Datos_Agregar_Mascota() {

    var datos_Anadir_Mascota = [nombre_Anadir_Mascota.value, edad_Anadir_Mascota.value, raza_Anadir_mascota.value];

    for (var i = 0; i < datos_Anadir_Mascota.length; i++) {
        if (datos_Anadir_Mascota[i].length == 0) {
            alert("Porfavor ingresar todos los datos");
            return false
        }
    }
    return true;

}


//funcion login
function acceso() {

    var usuarioN = document.getElementById("Usuario").value;
    var contrasenaN = document.getElementById("Clave").value;
    var id = idUsuario;
    id--;

    llenar_Usuarios();

    for (var i = 0; i < idUsuario; i++) {


        if (JSON.parse(localStorage.getItem(todosUsuarios[i]))) {
            var usuarioR = JSON.parse(localStorage.getItem(todosUsuarios[i]));
            var mascotaR = JSON.parse(localStorage.getItem(todasMascotas[i]));

            
            if(usuarioN == usuarioR.usuario && contrasenaN==usuarioR.contrasena){
               // alert(mascotaR.idUsuario);
                //alert(usuarioR.idUsuario);
                for(var i =0; i<idUsuario; i++){
                    if(mascotaR.idUsuario==usuarioR.idUsuario){
                        idUsuarioLogin = usuarioR.idUsuario;
                        idMascotaLogin=usuarioR.idUsuario;
                    
                        return idUsuarioLogin,true;
                }
                
                }
                
                    
                    
                
                
            }else{
                
                if(i==id){
                    alert("Los datos no estan corretos");
                    return false;
                }

            }
        } else {
            if (i == id) {
                alert("no hay ningun usuario registrados");
            }

        }

    }

}





function verificar_Datos_Ajustes(){


        var usuario_Registrado= JSON.parse(localStorage.getItem("usuario "+idUsuarioLogin));
        var confirmar_usuario=document.getElementById("usuario_ajustes");
       

        if (confirmar_usuario.value == usuario_Registrado.usuario) {

            var clave_ajustes = document.getElementById("clave_ajustes");
            var confirmar_clave_ajustes = document.getElementById("confirmar_clave_ajustes");

            if (clave_ajustes.value == confirmar_clave_ajustes.value) {

                if (clave_ajustes.value == usuario_Registrado.contrasena) {
                    alert("datos correctos");
                   
                    return true;
                } else {
                    alert("Contraseña incorrecta");
                    return false;
                }

            } else {
                alert("las contraseñas no coinciden");
            }
        }else {
        alert("El usuario no es correcto");
        return false;
    }


  }
    


function cambiarDatos(){

     
    let actualizarusuario={
        idUsuario: idUsuarioLogin,
        nombre_completo: document.getElementById("nombre_completo_cambio").value,
        correo: document.getElementById("correo_cambio").value,
        usuario: document.getElementById("usuario_cambio").value,
        contrasena: document.getElementById("contrasena_cambio").value,
        confcontrasena: document.getElementById("confcontrasena_cambio").value
        
        
    }

    localStorage.setItem("usuario "+idUsuarioLogin, JSON.stringify(actualizarusuario) );

    return true;
}

function verificar_cambiarDatos(){
    let actualizarusuario={
        idUsuario: idUsuarioLogin,
        nombre_completo: document.getElementById("nombre_completo_cambio").value,
        correo: document.getElementById("correo_cambio").value,
        usuario: document.getElementById("usuario_cambio").value,
        contrasena: document.getElementById("contrasena_cambio").value,
        confcontrasena: document.getElementById("confcontrasena_cambio").value
        
        
    }
    var datos = [actualizarusuario.nombre_completo,actualizarusuario.correo,actualizarusuario.usuario,actualizarusuario.contrasena,actualizarusuario.confcontrasena];
    
    re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    for (var i = 0; i < datos.length; i++) {
        if (datos[i].length == 0) {
            alert("Porfavor ingresar todos los datos");
            return false
        }
        if (actualizarusuario.contrasena != actualizarusuario.confcontrasena) {
            alert("Las contraseñas no coinciden");
            return false;
        }
        if (!re.exec(actualizarusuario.correo)) {
            alert('Correo no valido');
            return false;
        }

    }
    return true;
}



function mostrar_Datos_Mascota(){


   //alert(idUsuarioLogin);
      var datos_Mascota= JSON.parse(localStorage.getItem("Mascota "+idUsuarioLogin));
            var datos_Mascota_Nombre= datos_Mascota.nombre_Mascota;
            var objetivoMascotaNombre= document.getElementById("datos_mascota");
                objetivoMascotaNombre.innerHTML = datos_Mascota_Nombre;
    var datos_Mascota_Raza= datos_Mascota.raza;
            var objetivoMascotaRaza= document.getElementById("datos_mascota_raza");
                objetivoMascotaRaza.innerHTML = datos_Mascota_Raza;
}

function mostrar_Datos_Perfil(){

    var datos_Usuario= JSON.parse(localStorage.getItem("usuario "+idUsuarioLogin));
        var dato_nombre=datos_Usuario.nombre_completo;
        var objetivoUsuarioNombre=document.getElementById("nombre_perfil");
            objetivoUsuarioNombre.innerHTML = dato_nombre;
    var dato_usuario=datos_Usuario.usuario;
        var objetivoUsuarioUsuario=document.getElementById("usuario_perfil");
        objetivoUsuarioUsuario.innerHTML = dato_usuario;
    var dato_correo=datos_Usuario.correo;
        var objetivoUsuarioCorreo=document.getElementById("correo_perfil");
        objetivoUsuarioCorreo.innerHTML = dato_correo;


}