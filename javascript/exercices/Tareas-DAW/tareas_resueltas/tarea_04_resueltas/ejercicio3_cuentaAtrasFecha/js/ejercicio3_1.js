
window.addEventListener("load",cargaPagina);


/*
 * Función cargaPagina()
 *   Devuelve:  [entero]
 * 
 *  Manejador del evento load sobre window
 */
function cargaPagina(){
    var fecha=entradaFecha();
    var dia=parseInt(fecha.substring(0,2));
    var mes=parseInt(fecha.substring(3,5));
    document.getElementById("objetivo").innerHTML=dia+" de "+numeroMesACadena(mes);
    calculaTiempo(dia,mes);
    setInterval(calculaTiempo,1000,dia,mes);
}

/*
 * Función esEntero()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c puede convertirse a un número entero.
 */
function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}

/*
 * Función esSeparador()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c es un separador válido.
 */
function esSeparador(c){
    if(c!=="-")
        return false;
    else
        return true;
}

/*
 * Función numeroMesACadena()
 *   Recibe: 
 *              numero [entero]
 *   Devuelve:  [cadena]
 * 
 *   Devuelve el mes correspondiente al valor numérico proporcionado
 */
function numeroMesACadena(numero){
    const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    return meses[numero-1];
}

/*
 * Función entradaFecha()
 *   Devuelve:  [cadena]
 * 
 *   Pide al usuario un valor hasta que éste sea una fecha en formato 
 *   DD-MM-AAAA
 */
function entradaFecha(){
    const FORMATO_FECHA ="DD-MM-AAAA";
    var correcto=false;
    while(!correcto){

        var fecha=prompt("Introduce una fecha (formato "+FORMATO_FECHA+")");
        if(fecha.length===FORMATO_FECHA.length){
          correcto=true; 
          /* Primero comprobamos formato */
            for (var i = 0; i < fecha.length; i++) {
                if((i===2)||(i===5)){
                    if(!esSeparador(fecha[i]))
                        correcto=false;
                }
                else{
                    if(!esEntero(fecha[i]))
                        correcto=false;
                }
            }
          /* Ahora comprobamos rangos */
          var dia=parseInt(fecha.substring(0,2));//Cogemos los valores de la fecha introducida
          var mes=parseInt(fecha.substring(3,5));
          var anio=parseInt(fecha.substring(6,10));
          
          if((dia<1)||(dia>31))
              correcto=false;
          if((mes<1)||(mes>12))
              correcto=false;
          if((anio<1900)||(anio>2018))
              correcto=false;      
        }  
       if(!correcto)
          console.error(fecha+" no es una fecha correcta en formato "+FORMATO_FECHA)
        
    }
    return fecha;
}




/* NOTA: La aproximación no es correcta al considerar todos los meses como de 30 días
 * Habría que tener en cuenta el número de días de cada mes.
 */
function calculaTiempo(dia,mes){
    var fechaActual=new Date();
    
    var fechaCumple=new Date(mes+"-"+dia+"-"+new Date().getFullYear());
    
    var diferencia=0;

    /* Si el cumple ya ha pasado, calculamos respecto al año siguiente */
    if(fechaActual.getMonth()>fechaCumple.getMonth())
        fechaCumple.setFullYear(fechaActual.getFullYear()+1);
    
    else  if(fechaActual.getMonth()===fechaCumple.getMonth()){     /* Mismo mes */
       if(fechaActual.getDate()>fechaCumple.getDate())
             fechaCumple.setFullYear(fechaActual.getFullYear()+1);           
        
        else if(fechaActual.getDate()===fechaCumple.getDate()) /* Mismo día */
            fechaCumple=fechaActual;
    }
    
    var diferencia=fechaCumple-fechaActual; /* Diferencia en milisegundos */
    var milisegundos=1000*60*60*24*30; /* En un mes */
    
    var meses=Math.floor(diferencia/milisegundos);
    diferencia=diferencia%milisegundos;
    
    milisegundos=milisegundos/30; /* En un día */
    var dias=Math.floor(diferencia/milisegundos);
    diferencia=diferencia%milisegundos;
    
    milisegundos=milisegundos/24; /* En una hora */
    var horas=Math.floor(diferencia/milisegundos);
    diferencia=diferencia%milisegundos;
    
    milisegundos=milisegundos/60; /* En un minuto */
    var minutos=Math.floor(diferencia/milisegundos);
    diferencia=diferencia%milisegundos;
    
    milisegundos=milisegundos/60; /* En un segundo */
    var segundos=Math.floor(diferencia/milisegundos);
    
   
   
    document.getElementById("meses").innerHTML=meses+" meses";
    document.getElementById("dias").innerHTML=dias+" dias"; 
   document.getElementById("horas").innerHTML=horas+" horas";
    document.getElementById("minutos").innerHTML=minutos+" minutos"; 
    document.getElementById("segundos").innerHTML=segundos+" segundos";    
}

