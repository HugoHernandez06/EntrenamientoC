   var splash, menuLogin, login, registro, registroMascota, inicio, cuidados, dieta, entrenamiento, basico, trucos, misMascotas,añadirMascota, ajustes, ajustesCuenta, cambioDatos; 
    var secciones = [];
    var btn_login;
    var btn_registro;
    var btn_enviar, btn_enviar1;
    var btn_volver, btn_volver1, btn_volver2, btn_volver3, btn_volver4, btn_volver5, btn_volver6; 
    var btn_entrenamiento;
    var btn_cuidados;
    var btn_basico;
    var btn_dieta;  
    var btn_misMascotas;
    var btn_trucos;
    var btn_añadirMascota, btn_guardarM;
    var btn_ajustes;
    var btn_ajustesCuenta;
    var btn_cerrarSecion;
    var btn_cambioDatos, btn_guardarCD;




    window.onload = ()=>
    {
      crearReferencias();
      agregarEnventos();
      setTimeout(()=>{irA(menuLogin)},1000);
    }
    function crearReferencias()
    {
      splash = document.getElementById("splash");
      menuLogin = document.getElementById("menuLogin");
      login = document.getElementById("login");
      registro = document.getElementById("registro");
      registroMascota= document.getElementById("registroMascota");
      inicio = document.getElementById("inicio");
      cuidados = document.getElementById("cuidados");
      dieta = document.getElementById("dieta");
      entrenamiento = document.getElementById("entrenamiento");
      basico = document.getElementById("basico");
      trucos = document.getElementById("trucos");
      misMascotas = document.getElementById("misMascotas");
      añadirMascota = document.getElementById("añadirMascota");
      ajustes = document.getElementById("ajustes");
      ajustesCuenta = document.getElementById("ajustesCuenta");
      cambioDatos = document.getElementById("cambioDatos");

      secciones = [splash, menuLogin, login, registro, inicio, registroMascota, entrenamiento, cuidados, misMascotas, añadirMascota, ajustes, ajustesCuenta, cambioDatos, dieta, basico, trucos];

      btn_login=document.getElementById("btn_login");
      btn_registro=document.getElementById("btn_registro");
      btn_enviar=document.getElementById("btn_enviar");
      btn_enviar1=document.getElementById("btn_enviar1");
      btn_enviar2=document.getElementById("btn_enviar2");
      btn_volver=document.querySelectorAll(".volver");
      btn_volver1=document.getElementById("btn_volver1");
      btn_volver2=document.querySelectorAll(".volver2");
      btn_volver3=document.querySelectorAll(".volver3");
      btn_volver4=document.getElementById("btn_volver4");
      btn_volver5=document.getElementById("btn_volver5");
      btn_volver6=document.getElementById("btn_volver6");
      btn_entrenamiento=document.getElementById("btn_entrenamiento");
      btn_cuidados=document.getElementById("btn_cuidados");
      btn_basico=document.getElementById("btn_basico");
      btn_dieta=document.getElementById("btn_dieta");
      btn_misMascotas=document.getElementById("btn_misMascotas");
      btn_trucos=document.getElementById("btn_trucos");
      btn_añadirMascota=document.getElementById("btn_añadirMascota");
      btn_guardarM=document.getElementById("btn_guardarM");
      btn_ajustes=document.getElementById("btn_ajustes");
      btn_ajustesCuenta=document.getElementById("btn_ajustesCuenta");
      btn_cerrarSecion=document.getElementById("btn_cerrarSecion");
      btn_cambioDatos=document.getElementById("btn_cambioDatos");
      btn_guardarCD=document.getElementById("btn_guardarCD");









    }
    function agregarEnventos()
    {
      btn_login.addEventListener("click",()=>{irA(login);});
      btn_registro.addEventListener("click",()=>{irA(registro);});
      btn_enviar.addEventListener("click",()=>{
        
        //obtenerdatos_login();
        if(acceso()==true){
          irA(inicio);
        }
        });
      

      


      btn_enviar1.addEventListener("click",()=>{
        
        if(verificar_Datos_Usuario()==true)
        {
          irA(registroMascota);
        }
        });


      btn_enviar2.addEventListener("click",()=>{
        if(verificar_Datos_Mascota()==true){
          registro_Usuario();
         registro_Mascota();
         irA(login);
        }
         });


      btn_volver1.addEventListener("click",()=>{irA(registro);});
      btn_volver4.addEventListener("click",()=>{irA(ajustes);});
      btn_volver5.addEventListener("click",()=>{irA(ajustesCuenta);});
      btn_volver6.addEventListener("click",()=>{irA(misMascotas);});
      btn_entrenamiento.addEventListener("click",()=>{irA(entrenamiento);});
      btn_cuidados.addEventListener("click",()=>{irA(cuidados);});
      btn_basico.addEventListener("click",()=>{irA(basico);});
      btn_dieta.addEventListener("click",()=>{irA(dieta);});
      btn_misMascotas.addEventListener("click",()=>{irA(misMascotas);});
      btn_trucos.addEventListener("click",()=>{irA(trucos);});
      btn_añadirMascota.addEventListener("click",()=>{irA(añadirMascota);});



      btn_guardarM.addEventListener("click",()=>{

        if(verificar_Datos_Agregar_Mascota()==true){
          anadir_Mascota();
          irA(inicio);
        }
        
        
        });


      btn_ajustes.addEventListener("click",()=>{irA(ajustes);});
      btn_ajustesCuenta.addEventListener("click",()=>{irA(ajustesCuenta);});
      btn_cerrarSecion.addEventListener("click",()=>{irA(menuLogin);});
      
      btn_cambioDatos.addEventListener("click",()=>{
        
        if(cambiarDatos()==true){
          irA(cambioDatos);
        }  
      });

      btn_guardarCD.addEventListener("click",()=>{irA(inicio);});


      for (var i=0;i<=1;i++) 
        {
          btn_volver[i].addEventListener("click",()=>{irA(menuLogin);});
          
        }
        for (var i=0;i<=5;i++) 
        {
          btn_volver2[i].addEventListener("click",()=>{irA(inicio);});
          
        }
        for (var i=0;i<=1;i++) 
        {
          btn_volver3[i].addEventListener("click",()=>{irA(entrenamiento);});
          
        }


    }
    function ocultarSecciones()
    {

      for (i in secciones)
        {
          secciones[i].classList.add("ocultar");
        }
    }
    function irA(seccion)
    {
     ocultarSecciones();
     seccion.classList.remove("ocultar");
    }
     