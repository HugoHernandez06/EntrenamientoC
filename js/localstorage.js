
var contU=idUsuario=1;
var contM=1;
var todosUsuarios=[];





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
    

    return idUsuario;


};


function llenar_Usuarios(){
    for(var i=0 ;i<idUsuario; i++)
    {
        var id=idUsuario;   
        id--;
        todosUsuarios[id]="usuario "+idUsuario;
        
    }
}



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
    
    
    
};

function añadir_Mascota(){

    let Mascota={
        idMascota: contM,
        idUsuario: idUsuario,
        nombre_Mascota: document.getElementById("nombre_Mascota+").value,
        edad: document.getElementById("edad+").value,
        raza: document.getElementById("raza+").value
        
    }

    localStorage.setItem("Mascota "+contM, JSON.stringify(Mascota));
    contM++;

    };


function verificar_Datos_Usuario(){

  
    var datos=[nombre_completo.value,correo.value,usuario.value,contrasena.value,confcontrasena.value];
   
    
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
        }
    }
    return true;
    
}
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



function verficar_Correo (){
	re=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!re.exec(correo.value)){
		alert('Correo no valido');
        return false;
	}
	else return true;
	}


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
                alert("Login exitoso");
                
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

