
/* DDWEC02 - Solución Tarea. Ejercicio 9 - Javier González Pisano */

var MONEDAS=[200,100,50,20,10,5,2,1];
/* Al manejar céntimos nos ahorramos los cálculos con números reales, y los posibles
 * errores de redondeo
 */

var cajaMonedas=new Array(MONEDAS.length);

/*****************   DECLARACIÓN DE FUNCIONES ******************************/

/*
 * Función inicializaMonedas()
 *   Recibe: 
 *              cantidadInicial [entero]
 * 
 *   Inicializa los valores de la caja de monedas a cantidadInicial
 */
function inicializaMonedas(cantidadInicial){
    for (var i = 0; i < cajaMonedas.length; i++) {
        cajaMonedas[i]=cantidadInicial;
    }
}

/*
 * Función maximoDisponible()
 *   Recibe: 
 *             -
 *   Devuelve:
 *             [real] 
 *   Devuelve el máximo disponible en la caja.
 */

function maximoDisponible(){
    var maximo=0;
    for (var i = 0; i < cajaMonedas.length; i++) {
         maximo=maximo+ cajaMonedas[i]*MONEDAS[i];
    }
    
    return maximo/100;
}





/*
 * Función esNumero()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c puede convertirse a un valor numérico.
 */
function esNumero(c){
    if((isNaN(parseInt(c)))||(c!=parseFloat(c)))
        return false;
    else
        return true;
}

/*
 * Función entradaReal()
 *  Recibe: 
 *              c [cadena]
 *   Devuelve:  [real]
 * 
 *   Pide al usuario un valor hasta que éste sea un número o la cadena FIN
 *   Recibe el mensaje que le muestro al usuario en la ventana de entrada de datos
 */

function entradaRealOFin(mensaje){
    var correcto=false;
    while(!correcto){
        var valorLeido=prompt(mensaje);
        var numeroLeido=parseFloat(valorLeido);
        if(esNumero(valorLeido)||valorLeido==="FIN")
            correcto=true;
        else
            console.error(valorLeido+ " no es un número real");            
    }
    if(valorLeido==="FIN")
        return valorLeido;
    else
        return parseFloat(numeroLeido.toFixed(2));
                /* toFixed() convierte a cadena, por eso se convierte de nuevo para 
                 * devolver un real.
                 */
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
 * Función entradaEntero()
 *  Recibe: 
 *              c [cadena]
 *   Devuelve:  [entero]
 * 
 *   Pide al usuario un valor hasta que éste sea un entero.
 *   Recibe el mensaje que le muestro al usuario en la ventana de entrada de datos
 */

function entradaEntero(mensaje){
    var correcto=false;
    while(!correcto){
        var valorLeido=prompt(mensaje);
        var numeroLeido=parseInt(valorLeido)
        if(esEntero(valorLeido))
            correcto=true;
        else
            console.error(valorLeido+ " no es un entero");            
    }
    return numeroLeido;
}







/*
 * Función pasoAMonedas()
 *  Recibe: 
 *              cantidad [real]
 *   Devuelve:  entero[]
 * 
 *   Devuelve un array de enteros que representa las monedas necesarias para
 *   representar la cantidad
 */

function pasoAMonedas(cantidad){
    var cambio=new Array(MONEDAS.length);
    var resto=cantidad*100;
    
    for(var i=0;i<cambio.length;i++){
        
        var disponible=cajaMonedas[i];
        var necesario=parseInt(resto/MONEDAS[i]);
        
        if(disponible>=necesario){
            cambio[i]=parseInt(resto/MONEDAS[i]);
            resto=resto % MONEDAS[i]; 
            cajaMonedas[i]=cajaMonedas[i]-necesario;
        }
        else{
            /* Supuesto no contemplado en el enunciado.
             * Usaremos tantas monedas como tengamos disponibles. */           
            cambio[i]=disponible;
            cajaMonedas[i]=0;
            resto=resto-(disponible*MONEDAS[i]);
        }
        

    }
      
    return cambio;
}

/*****************   CUERPO DEL SCRIPT ******************************/

var cantidadInicial=entradaEntero("Introduce la cantidad de monedas inicial");
inicializaMonedas(cantidadInicial);


var finalizar=false;
while(!finalizar){
    
    var numero=entradaRealOFin("Intoduzca la cantidad a convertir (FIN para finalizar)");
    if(numero!=="FIN"){
       if(numero>maximoDisponible()){
           console.error("No tenemos dinero disponible para convertir dicha cantidad a monedas");
       }
       else{
            var cambio=pasoAMonedas(numero);
            var mensaje=numero+" euros son"
             for (var i = 0; i < cambio.length; i++) {
                 if(cambio[i]!==0){
                     if(i===0 || i===1)
                         mensaje+=", "+cambio[i]+" x "+MONEDAS[i]/100+ " euros";               
                     else
                         mensaje+=", "+cambio[i]+" x "+MONEDAS[i]+ " centimos";
                 }
             }
             console.log(mensaje);
        }
    }
    else{
        finalizar=true;
        console.warn("Script finalizado");
    }   
}


