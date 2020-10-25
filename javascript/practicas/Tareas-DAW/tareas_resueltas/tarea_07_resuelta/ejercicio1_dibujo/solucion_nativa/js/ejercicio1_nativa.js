
/* Clase global con la configuración. Propiedades:
* 	numeroColores (entero).Este número debe ser coherente con el número de colores establecidos
*           en la hoja de estilos CSS. Una variante del ejercio podría consistir 
*           en generar los colores de manera aleatoria, de modo que no se leyeran
*           de la hoja de estilos y se establecieran desde el JS.
* 	numeroFilas (entero). Número de filas que contiene el tablero.
* 	numeroColumnas (entero). Número de columnas que contiene el tablero.
* 	colorActual (cadena): Color actual escogido.
* 	activo (booleano): Determina si el pincel está activo (se ha escogido un color
* 	y pulsado sobre el tablero).
 */
var Tablero={
	numeroColores:6,
	filas:40,
	columnas:40,
        colorActual:null,
        activo:false
};




window.addEventListener("load",cargaPagina);


/* Manejador de evento de carga de página. Crea dinámicamente todos los elementos que forman la página.
 *  Los eventos correspondientes también se asignan dinámicamente a medida que creamos los elementos. */
function cargaPagina(){
	creaContenedor();
	creaTitulo();
	creaPaleta();
	creaIndicador();
	creaCuadricula();	
}


/* 
 * Creo la capa contenedora del tablero, haciendo uso de la función auxiliar creaContenedor().
 * A continuación la añadimos al documento.  
 * 
 */
function creaContenedor(){
	creaEtiqueta("div",document.body,"contenedor");
}

/* 
 * Creamos las etiquetas de título con las instrucciones para la página. 
 * Se usa la notación $variable para indicar que es  un objeto jQuery, 
 * no un objeto del DOM como los que hemos manejado en temas anteriores.
 */

function creaTitulo(){
	var contenedor=elementoID("contenedor");
	
	creaEtiqueta("h1",contenedor,null,null,"TABLERO DE DIBUJO");
	creaEtiqueta("p",contenedor,null,null,"Haga CLICK en un color para comenzar a pintar");	
	
}

/*
 * Creamos la paleta de colores. Consiste en un número fijo de capas a los cuales
 * asignamos las siguientes propiedades:
 * 	 - El id colorN, que nos permite identificar el color y asignarle el color definido 
 * 		en el correspondiente archivo CSS.
 *   - La clase color, que nos permite asignar propiedades comunes a todos los colores.
 *   - Manejador del evento click(), que será la función pulsaPaleta().
 */
function creaPaleta(){
	
	var contenedor=elementoID("contenedor");
	
	var paleta=creaEtiqueta("div",contenedor,"paleta"); 
	
	for(var i=0;i<Tablero.numeroColores;i++){
		var color=creaEtiqueta("div",paleta,"color"+(i+1),"color");		
		color.addEventListener("click",clickPaleta);
	}
}


/*
 * Creo el indicador de estado del pincel, consistente en un párrafo con una etiqueta span
 * cuyo texto y color cambia en función del pincel seleccionado.
 */
function creaIndicador(){
        var contenedor=elementoID("contenedor");

	var texto=creaEtiqueta("p",contenedor,null,null,"Estado del pincel: ");
	creaEtiqueta("span",texto,"indicador",null,"SIN SELECCIONAR");
}

/* Creamos la cuadrícula de dibujo, consistente en un contenedor con N x M capas.
 * 	Podría haberse usado una tabla con N x M celdas.
 *  Para poder organizar correctamente las capas agrupamos cada fila en una capa con clase "filadibujo" 
 * 
 *  Cada celda tiene clase "celdadibujo", que permite establecer el tamaño de la misma 
 * 		(aunque el tamaño podría haberse calculado dinámicamente a partir del tamaño de la pantalla
 * 		 y el número de filas/columnas)
 *  
 *  Para cada celda se establece:
 * 	    - El manejador de objeto mousedown (pulsación).
 *      - El manejador de objeto mouseover (el ratón pasa sobre la celda)
 * 
 */
function creaCuadricula(){
        var contenedor=elementoID("contenedor");
    
	var dibujo=creaEtiqueta("div",contenedor,"zonadibujo");	
	for(var i=0;i<Tablero.filas;i++){
		var fila=creaEtiqueta("div",dibujo,null,"filadibujo");
		for(var j=0;j<Tablero.columnas;j++){
			var celda=creaEtiqueta("div",fila,null,"celdadibujo");
			
			celda.addEventListener("mousedown",mouseDownCelda);
			celda.addEventListener("mouseover",mouseOverCelda);		
		}	
	}
}

/* Manejador de evento de pulsación de ratón sobre la paleta de colores. 
 * Se realizan las siguientes acciones:
 *    - En primer comprobamos si ya había un color seleccionado (mediante la variable colorActual).
 *      En caso afirmativo, eliminamos la selección (clase seleccionado) del color seleccionado anteriormente. 
 *   
 *   - Establecemos el color que hemos pulsado como seleccionado. Para ello, tenemos que conseguir el 
 * 		id del div pulsado a través del método attr(). Nótese que accedemos al objeto jQuery que 
 * 		desencadenó el evento usando $(this) [otra opcion hubiera sido acceder a this.id].
 * 
 *     Una vez obtenido el id, establecemos la variable colorActual y cambiamos la clase seleccionado
 * 		para el div sobre el cual hemos pulsado (para que aparezca conun recuadro)  
 *  
 *   - Establecemos la variable activo a false, desactivando así la opción de dibujar con dicho color
 * 		hasta que no pulsemos el tablero.
 * 
 *   - Actualizamos el texto del indicador (INACTIVO) y el color del mismo coincide con color de fondo
 * 		de la paleta que hemos pulsado.
 * 
 * */

function clickPaleta(){
	
	var idColor=this.id;	
	
	if(Tablero.colorActual!==null){
            elementoID(Tablero.colorActual).classList.remove("seleccionado");	
	}
	
	Tablero.colorActual=idColor;

	this.classList.add("seleccionado");
	
	Tablero.activo=false;
        
	cambiaTexto(elementoID("indicador"),"INACTIVO");
        elementoID("indicador").style.color=getCSS(elementoID(idColor),"background-color");
}

/* 
 * Manejador de evento de pulsación sobre celda.
 * La pulsación va a determinar si activo el tablero o no:
 *   El tablero se activa se pulsa una celda y se dan las siguientes condiciones:
 *      - El tablero está desactivado previamente.
 * 		- Se ha escogido un color (colorActual es no nulo).
 *      
 *   El tablero se desactiva cuando, estando activo, se pulsa una celda.
 * 	 
 *  La activación/desactivación implica un cambio en el valor de la propiedad de Tablero "activo" así como en
 * 	 el texto del indicador correspondiente
 *  
 */
function mouseDownCelda(){
	if(Tablero.activo==false){
		if(Tablero.colorActual!=null){
			cambiaTexto(elementoID("indicador"),"ACTIVO");
			Tablero.activo=true;
		}
	}
		
	else{
			cambiaTexto(elementoID("indicador"),"INACTIVO");		
			Tablero.activo=false;
	}
}

/* Manejador de evento de paso de ratón sobre celda
 * Si el tablero está activo cambiamos el color de la celda.
 * El color activo se obtiene a partir de la propiedad CSS background color 
 *   de la celda actual. Accedemos al estilo CSS ya computado.
 * 
 * 
 */

function mouseOverCelda(){
	if(Tablero.activo){
		colorActivo= getCSS(elementoID(Tablero.colorActual),"background-color");
		this.style.backgroundColor=colorActivo;
	
	}
}

