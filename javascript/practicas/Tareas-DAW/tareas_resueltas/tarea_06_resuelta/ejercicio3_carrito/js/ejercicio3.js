
/* Manejadores de eventos y funciones de acceso al DOM.
 * 
 * Aunque en el enunciado se recomienda hacer uso de datasets para almacenar los productos,
 * se ha optado por almacenar dicha información en los identificadores correspondientes,
 * pues los usaremos posteriormente para acceder de manera directa a los elementos del DOM.
 * 
 * En cualquier caso, la misma información que se mete en el identificador se podría crear 
 * en el dataset del elemento al crearlo (elemento.dataset.identificador=VALOR), y podríamos acceder
 * posteriormente a dicha información (por ejemplo en el manejador de evento) con 
 * this.dataset.identificador.
 * 
 * 
 * */


/* Constantes globales usadas para componer los identificadores de elementos HTML*/
/* global elementoID */

const PREFIJO_BOTON="comprar-";
const PREFIJO_PRODUCTO="producto-";
const PREFIJO_ARTICULO="articulo-";
const PREFIJO_STOCK="stock-";
const PREFIJO_CANTIDAD="cantidad-";
const PREFIJO_MAS="mas-";
const PREFIJO_MENOS="menos-";

var tienda;
var carrito;

window.addEventListener("load",cargaPagina);

/* Evento de carga de página sobre window
 * Instanciamos las dos variables globales carrito y tienda. */
function cargaPagina(){
    creaCarrito();
    creaTienda();
}


/* Crea la capa Carrito (vacía) */
function creaCarrito(){
    carrito=new Carrito();
    
    var capaCarrito=creaElemento("div",document.body,"carrito");
    
    creaElemento("h1",capaCarrito,null,null,"Mi carrito");    
    creaElemento("p",capaCarrito,"total",null,"Carrito vacío");
   
}

/* Crea la capa tienda y la rellena a partir de la información de la instancia de Tienda */
function creaTienda(){
    tienda=new Tienda();
    tienda.cargaProductos();
    
    var capaTienda=creaElemento("div",document.body,"productos");
    creaElemento("h1",capaTienda,null,null,"Mi tienda");
    
  
    for (var i = 0; i < tienda.numeroProductos(); i++) {
        var producto=tienda.getProductoFromPosition(i);
        var stock=tienda.getStock(producto.id);
        
        var capaProducto=creaElemento("div",capaTienda,PREFIJO_PRODUCTO+producto.id,"articulo");
        
        var imagenProducto=creaElemento("img",capaProducto);
        imagenProducto.src="images/"+producto.imagen+".jpg";
        
        var capaInformacion=creaElemento("div",capaProducto,null,"informacion");
        creaElemento("span",capaInformacion,null,null,"Precio:");
        creaElemento("span",capaInformacion,null,"precio",producto.precio);
        
        creaElemento("span",capaInformacion,null,null,"Stock:");
        var capaStock=creaElemento("span",capaInformacion,PREFIJO_STOCK+producto.id,"stock-positivo",stock);
        if(stock===0)
             capaStock.className="stock-negativo";
       
       var boton=creaElemento("button",capaProducto,PREFIJO_BOTON+producto.id,null,"Comprar");
        if(stock>0)
            boton.addEventListener("click",clickBotonComprar);
    }
    
   
}

/* Manejador del evento click sobre el botón de comprar producto */
function clickBotonComprar(evento){
   var e=evento || window.event;
 
   var id=idFromCadena(this.id);
   var producto=tienda.getProducto(id);
   var stock=tienda.decrementaStock(id);
   
  cambiaTexto(elementoID(PREFIJO_STOCK+id),stock);
   
   if(stock===0){
        elementoID(PREFIJO_STOCK+id).className="stock-negativo";
        elementoID(PREFIJO_BOTON+id).disabled=true;
        if(elementoID(PREFIJO_MAS+id)!==null)
           elementoID(PREFIJO_MAS+id).disabled=true;
    }
   
   actualizaCarrito(producto);
      
}

/* Actualiza la información del carrito insertando el producto que pasamos como 
 * parámetro
 */
function actualizaCarrito(producto){
    var capaCarrito=elementoID("carrito");
  
        var insertado=carrito.insertaProducto(producto);   
        if(insertado){ /* Creo una nueva capa para el artículo */ 
            var capaArticulo=creaElemento("div",capaCarrito,PREFIJO_ARTICULO+producto.id,"articulo");
            
            var imagenProducto=creaElemento("img",capaArticulo);
            imagenProducto.src="images/"+producto.imagen+".jpg";
            
            creaElemento("span",capaArticulo,null,null,"Precio:");
            creaElemento("span",capaArticulo,null,"precio",producto.precio);
            
            creaElemento("span",capaArticulo,null,null,"Cantidad:");
            creaElemento("span",capaArticulo,PREFIJO_CANTIDAD+producto.id,"stock-positivo","1");
       
            var botonMas=creaElemento("button",capaArticulo,PREFIJO_MAS+producto.id,null,"+");
            botonMas.addEventListener("click",clickMasCarrito);
            if(tienda.getStock(producto.id)===0)
               botonMas.disabled=true;
           
            var botonMenos=creaElemento("button",capaArticulo,PREFIJO_MENOS+producto.id,null,"-");            
            botonMenos.addEventListener("click",clickMenosCarrito);

             capaCarrito.insertBefore(capaArticulo,elementoID("total"));                          
        }
        else{ /* Actualizo cantidad */
          var spanCantidad=elementoID(PREFIJO_CANTIDAD+producto.id);
          var valor=parseInt(spanCantidad.innerText);
          valor++;
         cambiaTexto(spanCantidad,valor);
      }
   
      document.getElementById("total").innerText="TOTAL:"+ carrito.getTotalCompra()+" €";
        
      
}

/* Manejador del evento click sobre el botón "+" de un producto */

function clickMasCarrito(){
    var id=idFromCadena(this.id);
    carrito.insertaProducto(tienda.getProducto(id));
    var stock=tienda.decrementaStock(id);
    
    cambiaTexto(elementoID(PREFIJO_STOCK+id),stock);
    var cantidad=carrito.getCantidadFromId(id);
    cambiaTexto(elementoID(PREFIJO_CANTIDAD+id),cantidad);
    if(stock===0){
        this.disabled=true;
        elementoID(PREFIJO_BOTON+id).disabled=true;
        elementoID(PREFIJO_STOCK+id).className="stock-negativo";
    }
        
   cambiaTexto(elementoID("total"),"TOTAL:"+ carrito.getTotalCompra()+" €");   
}

/* Manejador del evento click sobre el botón "-" de un producto */
function clickMenosCarrito(){ 
        var id=idFromCadena(this.id);
        var cantidad=carrito.decrementaCantidad(id);
        
        tienda.incrementaStock(id);
        var stock=tienda.getStock(id);
        
        cambiaTexto(elementoID(PREFIJO_STOCK+id),stock);
            
        if(stock===1){ /* El stock era 0, pero ha pasado a ser positivo */
            elementoID(PREFIJO_STOCK+id).className="stock-positivo";
            elementoID(PREFIJO_BOTON+id).disabled=false;
            elementoID(PREFIJO_MAS+id).disabled=false;               
        }                 

        if(cantidad>0){          
            cambiaTexto(elementoID(PREFIJO_CANTIDAD+id),cantidad);
        }
        else{
            /* Elimino el producto del carrito */
            carrito.eliminaProductoFromId(id);
            var producto=elementoID(PREFIJO_ARTICULO+id);
             eliminaElemento(producto);    
        }
      
       if(carrito.numeroCompras()===0)
            cambiaTexto(elementoID("total"),"Carrito vacío");
       else
            cambiaTexto(elementoID("total"),"TOTAL:"+ carrito.getTotalCompra()+" €");
}



