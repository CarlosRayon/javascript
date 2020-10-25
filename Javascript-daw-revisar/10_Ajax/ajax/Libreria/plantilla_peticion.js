
const ESTADO_FINALIZADO=4;//Estado correcto objeto XMLHtppRequest
const CODIGO_EXITO=200;//Estado correcto del servidor
    
  window.addEventListener("load", cargaPagina);//Cuando la pagina carge me llamas a la funcion
  
  function cargaPagina()
  {
      var miXHR= new XMLHttpRequest();//objeto
      
      miXHR.onreadystatechange=cambiaEstado;//Cada estado de cambio
      
      miXHR.open();//Como querermos mandar la peticion
      miXHR.send();//La mandamos null para get(parametros en open) con post los parametros aqui
               
  }

function cambiaEstado()
{
    if((this.readyState===ESTADO_FINALIZADO)&&(this.status===CODIGO_EXITO))//Si la peticion se recibio correctamente
    {
            //haz algo             
    }
    
    
}