
var contU=idUsuario=1;
var contM=1;
var todosUsuarios=[];




//registrar Usuarios
function registro_Usuario(){
    
    let Usuario={
        idUsuario: contU,
        nombre_completo: document.getElementById("nombre_completo").value,
        correo: document.getElementById("correo").value,
        usuario: document.getElementById("usuario").value,
        contrasena: document.getElementById("contrasena").value,
        confcontrasena: document.getElementById("confcontrasena").value
        
        
    }
  
    idUsuario=contU;
    localStorage.setItem("usuario "+contU, JSON.stringify(Usuario) );
    contU++;
    
    
    

    llenar_Usuarios();
    
    return idUsuario, true;
};

//llenar array de usuarios
function llenar_Usuarios(){
    for(var i=0 ;i<idUsuario; i++)
    {
        var id=idUsuario;   
        id--;
        todosUsuarios[id]="usuario "+idUsuario;
        
    }
}

//verificar datos ingresados para registro de usuarios


function verificar_Datos_Usuario(){

    var datos=[nombre_completo.value,correo.value,usuario.value,contrasena.value,confcontrasena.value];
   
    re=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    for(var i=0; i<datos.length;i++)
        {
        if(datos[i].length==0)
        {
            alert("Porfavor ingresar todos los datos");
            return false
        }
        if(contrasena.value!=confcontrasena.value)
        {
            alert("Las contraseñas no coinciden");
            return false;
        }if(!re.exec(correo.value)){
            alert('Correo no valido');
            return false;
        }

    }
    return true;
    
}


//registrar Mascotas
function registro_Mascota(){

    let Mascota={
        idMascota: contM,
        idUsuario: idUsuario,
        nombre_Mascota: document.getElementById("nombre_Mascota").value,
        edad: document.getElementById("edad").value,
        raza: document.getElementById("raza").value
        
    }

    localStorage.setItem("Mascota "+contM, JSON.stringify(Mascota));
    contM++;    
}
//verificar datos ingresado para registro de mascota

function verificar_Datos_Mascota(){

  
    var datos=[nombre_Mascota.value,edad.value,raza.value];
   
    
    for(var i=0; i<datos.length;i++)
        {
        if(datos[i].length==0)
        {
            alert("Porfavor ingresar todos los datos");
            return false
        }
    }
    return true;
    
}


//añadir Mascota
function anadir_Mascota(){

    let anadir_Mascota={
        idMascota: contM,
        idUsuario: idUsuario,
        nombre_Anadir_Mascota: document.getElementById("nombre_Anadir_Mascota").value,
        edad_Anadir_Mascota: document.getElementById("edad_Anadir_Mascota").value,
        raza_Anadir_mascota: document.getElementById("raza_Anadir_mascota").value
        
    }

    localStorage.setItem("Mascota "+contM, JSON.stringify(anadir_Mascota));
    contM++;

    }

// verificar datos ingresad para añadir mascota

function verificar_Datos_Agregar_Mascota(){

    var datos_Anadir_Mascota=[nombre_Anadir_Mascota.value, edad_Anadir_Mascota.value, raza_Anadir_mascota.value];

    for(var i=0; i<datos_Anadir_Mascota.length;i++)
        {
        if(datos_Anadir_Mascota[i].length==0)
        {
            alert("Porfavor ingresar todos los datos");
            return false
        }
    }
    return true;

}



//funcion login
function acceso(){

    var usuarioN= document.getElementById("Usuario").value;
    var contrasenaN= document.getElementById("Clave").value;
    var id=idUsuario;
    id--;

    llenar_Usuarios();

    for(var i=0; i<idUsuario;i++){

        
        if(JSON.parse(localStorage.getItem(todosUsuarios[i]))){
            var usuarioR= JSON.parse(localStorage.getItem(todosUsuarios[i]));

          
            
            if(usuarioN== usuarioR.usuario && contrasenaN==usuarioR.contrasena){
                //alert(usuarioR.idUsuario);
                    return true;
                    
                    
                
                
            }else{
                
                if(i==id){
                    alert("Los datos no estan corretos");
                    return false;
                }
                
            }
        }else{
            if(i==id){
                alert("no hay ningun usuario registrados");
            }
            
        }

    }  
    
}

function cambiarDatos(){

    
    
   // var usuarios=[usuario_loguin.value,usuario_registrado.value];

    var confirmar_usuario=document.getElementById("usuario_ajustes");

    /*if(btn_enviar1.addEventListener("click",()=>{irA(registroMascota)})){
        var usuario_registrado= document.getElementById("usuario");

        if(confirmar_usuario.value==usuario_registrado.value){

            var clave_ajustes=document.getElementById("clave_ajustes");
            var confirmar_clave_ajustes=document.getElementById("confirmar_clave_ajustes");

            if(clave_ajustes.value==confirmar_clave_ajustes.value){
                alert("datos correctos");
                return true;
            }else{
                alert("las contraseñas no coinciden");
            }

        }
    }else */
    if(acceso()==true){
        var usuario_login= document.getElementById("Usuario");
        var contrasena_login=document.getElementById("Clave");
        
        if(confirmar_usuario.value==usuario_login.value){

            var clave_ajustes=document.getElementById("clave_ajustes");
            var confirmar_clave_ajustes=document.getElementById("confirmar_clave_ajustes");

            if(clave_ajustes.value==confirmar_clave_ajustes.value){

                if(clave_ajustes.value==contrasena_login.value){
                    alert("datos correctos");
                    return true;
                }else{
                    alert("Contraseña incorrecta");
                    return false;
                }
                
            }else{
                alert("las contraseñas no coinciden");
            }
        }
    }else{
        alert("El usuario no es correcto");
        return false;
    }

    

            
}

/*function mostrar_datos(){


      var usuarioLogueado= document.getElementById("usuario_ajustes").value;
            var objetivoUsuario= document.getElementById("objetivoUsuario");
                objetivoUsuario.innerHTML = usuarioLogueado;
}*/

    

    


