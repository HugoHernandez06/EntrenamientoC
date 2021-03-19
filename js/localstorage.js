src = "https://code.jquery.com/jquery-3.6.0.js";

<<<<<<< Updated upstream
var contU = idUsuario = 1;
var contM = 1;
var todosUsuarios = [];
=======
var contU=idUsuario=idUsuarioLogin=1;
var contM=1;
var todosUsuarios=[];
>>>>>>> Stashed changes

$(document).ready(function () {
    //You might want to do if check to see if localstorage set for theImage here
    var img = new Image();
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
<<<<<<< Updated upstream
        todosUsuarios[id] = "usuario " + idUsuario;

=======
        todosUsuarios[id]="usuario "+idUsuario;
        alert(todosUsuarios[i]);
        
>>>>>>> Stashed changes
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

    }
    return true;

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

    localStorage.setItem("Mascota " + contM, JSON.stringify(Mascota));
    contM++;
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
        idUsuario: idUsuario,
        nombre_Anadir_Mascota: document.getElementById("nombre_Anadir_Mascota").value,
        edad_Anadir_Mascota: document.getElementById("edad_Anadir_Mascota").value,
        raza_Anadir_mascota: document.getElementById("raza_Anadir_mascota").value

    }

    localStorage.setItem("Mascota " + contM, JSON.stringify(anadir_Mascota));
    contM++;

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


<<<<<<< Updated upstream
            if (usuarioN == usuarioR.usuario && contrasenaN == usuarioR.contrasena) {
                //alert(usuarioR.idUsuario);
                return true;


            } else {

                if (i == id) {
=======
            alert(usuarioR.usuario);    
            alert(usuarioN);

            alert(usuarioR.contrasena);
            alert(contrasenaN);
            
            if(usuarioN == usuarioR.usuario && contrasenaN==usuarioR.contrasena){
                //alert(usuarioR.idUsuario);

                idUsuarioLogin = usuarioR.idUsuario;
                    return idUsuarioLogin,true;
                    
                    
                
                
            }else{
                
                if(i==id){
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
function cambiarDatos() {


    // var usuarios=[usuario_loguin.value,usuario_registrado.value];

    var confirmar_usuario = document.getElementById("usuario_ajustes");
=======


>>>>>>> Stashed changes


function verificar_Datos_Ajustes(){


    var confirmar_usuario=document.getElementById("usuario_ajustes");

<<<<<<< Updated upstream
        }
    }else */
    if (acceso() == true) {
        var usuario_login = document.getElementById("Usuario");
        var contrasena_login = document.getElementById("Clave");
=======
    if(acceso()==true){
        var usuario_login= document.getElementById("Usuario");
        var contrasena_login=document.getElementById("Clave");
        
        if(confirmar_usuario.value==usuario_login.value){
>>>>>>> Stashed changes

        if (confirmar_usuario.value == usuario_login.value) {

            var clave_ajustes = document.getElementById("clave_ajustes");
            var confirmar_clave_ajustes = document.getElementById("confirmar_clave_ajustes");

            if (clave_ajustes.value == confirmar_clave_ajustes.value) {

                if (clave_ajustes.value == contrasena_login.value) {
                    alert("datos correctos");
                    alert(idUsuarioLogin);
                   
                    
                    return true;
                } else {
                    alert("Contraseña incorrecta");
                    return false;
                }

            } else {
                alert("las contraseñas no coinciden");
            }
        }else{
            alert("El usuario no es correcto");
        }
    } else {
        alert("El usuario no es correcto");
        return false;
    }


<<<<<<< Updated upstream
=======
           
    
>>>>>>> Stashed changes
}

function cambiarDatos(){

    /*var cambioUsuario= JSON.parse(localStorage.getItem("usuario "+idUsuarioLogin));

    console.log(JSON.parse(localStorage.getItem("usuario "+idUsuarioLogin)));*/

    
     
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



/*function mostrar_datos(){


      var usuarioLogueado= document.getElementById("usuario_ajustes").value;
            var objetivoUsuario= document.getElementById("objetivoUsuario");
                objetivoUsuario.innerHTML = usuarioLogueado;
}*/

    

    


