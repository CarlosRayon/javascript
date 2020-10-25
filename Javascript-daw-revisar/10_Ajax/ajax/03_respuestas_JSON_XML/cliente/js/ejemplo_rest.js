/* 
Ejemplo peticion POST al servidor
 */
const ESTADO_FINALIZADO=4;
const CODIGO_EXITO=200;
    
  window.addEventListener("load", cargaPagina);
  
  function cargaPagina()
  {
      var miXHR= new XMLHttpRequest();
      
      miXHR.onreadystatechange=cambiaEstado;
      
      miXHR.open("GET","../servidor/get_con_parametros_rest.php");//Borramos o añadimos el id para las pruebas(?)
      miXHR.send(null);
      
      
      
      
  }

function cambiaEstado()
{
    if((this.readyState===ESTADO_FINALIZADO) && (this.status===CODIGO_EXITO))
    {
        /*Prueba con id igual a 1 o 2(?)
         * 
        var datosRecibidos=JSON.parse(this.responseText);//RECUERDA!!! Convertimos el objeto JSON  
        
        
        console.log(datosRecibidos.nombre);//Usamos el objeto como un JSON normal
        console.log(datosRecibidos.telefono);//Usamos el objeto como un JSON normal
        */
       
       /*Prueba para ver lo que recibimos si no le pasamos ningun id(?)*/
       console.log(this.responseText);//Vemos que hemos recibido un array con dos objetos
       var datosRecibidos=JSON.parse(this.responseText);//RECUERDA!!! Convertimos el objeto JSON 
      var primerObjeto=datosRecibidos[0];//guardamos el primer objeto del array en una variable
      console.log(primerObjeto.nombre);//Usamos el objeto como un objeto JSON normal
      
      //Puedo iterar y ver las propiedades de todos los objetos
      
        for (var i = 0; i < datosRecibidos.length; i++) {
                
            console.log(datosRecibidos[i].nombre);
        }
       
       
    }
   
  
}
