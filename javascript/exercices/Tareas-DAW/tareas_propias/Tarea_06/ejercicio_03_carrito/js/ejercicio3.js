/* 
 Archivo donde implementar la logica del problema
 */
/*Al cargar la pagina llamo a las dos funciones que me crearan la estructua html de la misma*/



window.addEventListener("load", inicializador);

/*Instancion dos objetos de las clases para usar*/
var tienda = new Tienda();
var carrito = new Carrito();


function inicializador()//Muestro las capas de inicio y creo evento para los botones que tengamos de inicio
{
    //Muestro las capas
    crearTienda();
    crearCarrito();
    //Asigno a los botones eventos
    inicializadorEventos();
}
;


/*Funcion que me permite  asignar a los botones eventos segun el tipo de boton que sea
 * -Saco el boton que es y la funcion que tiene que hacer mediante los data incluidos en los botones
 */
function inicializadorEventos()
{
    botonPulsado = document.getElementsByTagName("button");//Capturo todos los botones del documento

    for (var i = 0; i < botonPulsado.length; i++) {//IMPORTANTE EL THIS SI NO NO FUNCIONA

        if (botonPulsado[i].dataset.tipo == "suma")//Si he pulsado el boton tipo suma
        {
            botonPulsado[i].addEventListener("click", function () {//Añado evento que llama funcion suma
                suma(this.dataset.identificador);//y le paso el identificador que sera el id del producto
            });

        }
        ;

        if (botonPulsado[i].dataset.tipo == "resta")//Si he pulsado el boton tipo resta
        {
            botonPulsado[i].addEventListener("click", function () {//Añado evento que llama funcion resta
                resta(this.dataset.identificador);//y le paso el identificador que sera el id del porducto
            });
        }
        ;

        if (botonPulsado[i].dataset.tipo == "compra")//Si he pulsado el boton tipo compra
        {
            botonPulsado[i].addEventListener("click", function () {//Añado evento que llama funcion compra
                compra(this.dataset.identificador);//y le paso el identificador que sera el id del porducto
            });
        }
        ;
    }
}
;


/*funcion que llamares cuando pulsemos un boton de compra*/
function compra(identificador)
{
    var producto = tienda.getProducto(identificador)[0];//Saco SOLO el producto del array de la Tienda

    carrito.insertarProducto(producto);//Le inserto en el carrito
    tienda.decrementaCantidad(identificador);//Decrementa el stock de la tienda



    actualizarCapas();//Actualizo las capas

    inicializadorEventos();//Vuelvo asignar a los botones eventos

    /*No he sabido gestionar esto para cambiar la clase. Intente esto
     * Las clases la recojo correctamente y valido que sea el articulo que quiero por su
     * data identificador pero a la hora de cambiar la clase no me lo hace :(*/
    if (tienda.getStock(identificador) == 0)
    {
        console.log("llego a 0");//Hacer otras cosas         
        var spanStock = document.getElementsByClassName("stock-positivo");

        for (var i = 0; i < spanStock.length; i++) {
            if (spanStock[i].dataset.identificador === identificador)
            {
                console.log(spanStock[i].dataset.identificador);
                spanStock[i].className = "";
            }
        }
    }

}
;

/*funcion que llamares cuando pulsemos un boton de compra*/

function suma(identificador)
{

    carrito.incrementaCantidad(identificador);//Incremento en el carrito
    tienda.decrementaCantidad(identificador);//Decremento en la tienda

    if (tienda.getStock(identificador) == 0)
    {
        console.log("llego a 0");//Hacer otras cosas

    }

    actualizarCapas()//Actualizo las capas

    inicializadorEventos();//Vuelvo asignar a los botones eventos

}
;


function resta(identificador)
{
    carrito.decrementaCantidad(identificador);//decremento la cantidad del carrito
    tienda.incrementaCantidad(identificador);//Incremetno en la tienda

    if (carrito.getCantidadFromId(identificador) == 0)
    {

        if (confirm("Se va a quedar a 0, ¿desea eliminar producto?"))
        {
            carrito.eliminarProductoFromId(identificador);
        } else {
            carrito.incrementaCantidad(identificador);
        }
    }

    actualizarCapas()//Actualizo las capas

    inicializadorEventos();//Vuelvo asignar a los botones eventos

}
;

/*Metodo que me permite actualizar las capas (basicamente las borro y las vuelvo a crear)*/
function actualizarCapas()
{
    var elementoActualizar = document.getElementById("productos");//Borro elemento para luego volver a crearlo con los nuevos datos
    elementoActualizar.parentNode.removeChild(elementoActualizar);
    crearTienda();//Vuelvo crear capa tienda con los datos actualizados

    var elementoActualizar2 = document.getElementById("carrito");//Borro elemento para luego volver a crearlo con los nuevos datos
    elementoActualizar2.parentNode.removeChild(elementoActualizar2);
    crearCarrito();//Vuelvo a mostrar la capa carrito actualizada
}
;


/*Funcion para crear la capa de la tienda*/
function crearTienda()
{
    //DIV PARA PRODUCTOS
    var divProductos = document.createElement("div");//Creo div productos
    divProductos.id = "productos";//Creo el atributo productos para este div

    for (var i = 0; i < tienda.numeroProductos(); i++) {//Me haces la estructura aqui metida tantas veces como elementos tengo el array productos de la tienda

        //DIV PARA LOS ARTICULOS
        var divArticulo = document.createElement("div");//Creo div productos
        divArticulo.className = "articulo";

        //ETIQUETA IMAGEN
        var imagen = document.createElement("img")//Creo el elemenot imagen
        imagen.src = "images/" + tienda.getProductoFromPosition(i).getImagen() + ".jpg";//Creo la etiqueta para la imagen
        imagen.title = "" + tienda.getProductoFromPosition(i).getImagen() + "";//Para identificar con que producto esta asociadoimagen.src = "images/" + tienda.getProductoFromPosition(i).getImagen() + ".jpg";//Creo la etiqueta para la imagen

        divArticulo.appendChild(imagen);//Añado al div de Articulos

        //SPAN TEXTO PRECIO 
        var spanPrecio = document.createElement("span")//Creo span tendra texto precio   
        var textoPrecio = document.createTextNode("Precio:");//Creo el texto para el span   
        spanPrecio.appendChild(textoPrecio);//Le añado del texto al span

        divArticulo.appendChild(spanPrecio);//Añado al div de Articulos

        //SPAN VALOR PRECIO
        var spanPrecioValue = document.createElement("span");//Creo etiqueta span que muestra el precio
        spanPrecioValue.className = "precio";//Atributo precio para esta etiqueta
        var valuePrecio = document.createTextNode(tienda.getProductoFromPosition(i).getPrecio());//Precio para mostrar
        spanPrecioValue.appendChild(valuePrecio);//Añado el precio a la eiqueta

        divArticulo.appendChild(spanPrecioValue);//Añado al div de Articulos

        //SPAN TEXTO STOCK
        var spanStock = document.createElement("span");//Creo span titulo stock
        var textoStock = document.createTextNode("Stock:");//Creo el texto del span
        spanStock.appendChild(textoStock);//Añado el texto al span

        divArticulo.appendChild(spanStock);////Añado al div de Articulos

        //SPAN VALOR STOCK
        var spanStockValue = document.createElement("span");//Creo span para mostrar el stoci
        spanStockValue.className = "stock-positivo";//atributo class (De entrada tenemos productos con esto positivo(Se podia controlar con un o algo asi)
        spanStockValue.dataset.identificador = "" + tienda.getProductoFromPosition(i).getImagen() + "";//Para identificar con que producto esta asociado
        var valueStock = document.createTextNode(tienda.getStock(tienda.getProductoFromPosition(i).getImagen()));//Valor que tendra el span
        spanStockValue.appendChild(valueStock);//Añado el valor a span

        divArticulo.appendChild(spanStockValue);//Añado al div de Articulos 

        //BOTON DE COMPRA
        var botonCompra = document.createElement("button");//Creamos el boton de compra
        botonCompra.id = "button";//Cremos atributo id
        botonCompra.dataset.identificador = "" + tienda.getProductoFromPosition(i).getImagen() + "";//Para identificar con que producto esta asociado
        botonCompra.dataset.tipo = "compra";//Para identificar que tipo boton es
        var textoBoton = document.createTextNode("comprar");//Texto que tiene el boton
        botonCompra.appendChild(textoBoton);//Añadimos al boton

        divArticulo.appendChild(botonCompra);//Añadimo al divArticulo

        divProductos.appendChild(divArticulo);//añado el div articulo a div productos

    }

    document.body.appendChild(divProductos);//finalmente añado el divProducto al body


    /*ESTRUCTURA CREADA CON JS
     <div id="productos">  
     <div class="articulo">   
     <img src="images/jvc.jpg"> 
     <span>Precio:</span>
     <span class="precio">150</span>  
     <span>Stock:</span>                       
     <span class="stock-positivo">6</span>Si el stock es 0 o menos 1 stock-negativo  
     <button id="">Comprar</button>  
     </div> 
     </div>
     */
}
;

/*Funcion para crear la capa del carrito*/
function crearCarrito()
{
    //DIV PARA PRODUCTOS
    var divCarrito = document.createElement("div");//Creo div productos
    divCarrito.id = "carrito";//Creo el atributo productos para este div

    for (var i = 0; i < carrito.numeroCompras(); i++) {//Me haces la estructura aqui metida tantas veces como elementos tengo el array productos de la tienda

        //DIV PARA LOS ARTICULOS
        var divArticulo = document.createElement("div");//Creo div productos
        divArticulo.className = "articulo";

        //ETIQUETA IMAGEN
        var imagen = document.createElement("img")//Creo el elemenot imagen
        imagen.src = "images/" + carrito.getCompraFromPosition(i).getImagen() + ".jpg";//Creo la etiqueta para la imagen
         imagen.title = "" + tienda.getProductoFromPosition(i).getImagen() + "";//Para identificar con que producto esta asociado
        divArticulo.appendChild(imagen);//Añado al div de Articulos

        //SPAN TEXTO PRECIO 
        var spanPrecio = document.createElement("span")//Creo span tendra texto precio   
        var textoPrecio = document.createTextNode("Precio:");//Creo el texto para el span   
        spanPrecio.appendChild(textoPrecio);//Le añado del texto al span

        divArticulo.appendChild(spanPrecio);//Añado al div de Articulos

        //SPAN VALOR PRECIO
        var spanPrecioValue = document.createElement("span");//Creo etiqueta span que muestra el precio
        spanPrecioValue.className = "precio";//Atributo precio para esta etiqueta
        var valuePrecio = document.createTextNode(carrito.getCompraFromPosition(i).getPrecio());//Precio para mostrar
        spanPrecioValue.appendChild(valuePrecio);//Añado el precio a la eiqueta

        divArticulo.appendChild(spanPrecioValue);//Añado al div de Articulos

        //SPAN TEXTO STOCK
        var spanStock = document.createElement("span");//Creo span titulo stock
        var textoStock = document.createTextNode("Stock:");//Creo el texto del span
        spanStock.appendChild(textoStock);//Añado el texto al span

        divArticulo.appendChild(spanStock);////Añado al div de Articulos

        //SPAN VALOR STOCK
        var spanStockValue = document.createElement("span");//Creo span para mostrar el stoci
        spanStockValue.className = "stock-positivo";//atributo class (De entrada tenemos productos con esto positivo(Se podia controlar con un o algo asi)
        var valueStock = document.createTextNode(carrito.getCantidadFromId((carrito.getCompraFromPosition(i).getImagen())));//Valor que tendra el span
        spanStockValue.appendChild(valueStock);//Añado el valor a span

        divArticulo.appendChild(spanStockValue);//Añado al div de Articulos 

        //BOTONES DE COMPRA
        var botonCompra = document.createElement("button");//Creamos el boton de compra
        botonCompra.id = "button";//Cremos atributo id
        botonCompra.dataset.identificador = "" + carrito.getCompraFromPosition(i).getImagen() + "";//Para identificar con que producto esta asociado
        botonCompra.dataset.tipo = "suma";//Para identificar tipo de boton
        var textoBoton = document.createTextNode("+");//Texto que tiene el boton
        botonCompra.appendChild(textoBoton);//Añadimos al boton

        divArticulo.appendChild(botonCompra);//Añadimo al divArticulo

        var botonCompra = document.createElement("button");//Creamos el boton de compra
        botonCompra.id = "button";//Cremos atributo id
        botonCompra.dataset.identificador = "" + carrito.getCompraFromPosition(i).getImagen() + "";//Para identificar con que producto esta asociado
        botonCompra.dataset.tipo = "resta";//Para identificar tipo de boton
        var textoBoton = document.createTextNode("-");//Texto que tiene el boton
        botonCompra.appendChild(textoBoton);//Añadimos al boton

        divArticulo.appendChild(botonCompra);//Añadimo al divArticulo

        divCarrito.appendChild(divArticulo);//añado el div articulo a div productos

    }
    ;

    var parrafoTotal = document.createElement("span");
    var textoParrafo = document.createTextNode("Total:" + carrito.getTotalCompra() + "Euros");
    parrafoTotal.appendChild(textoParrafo);
    divCarrito.appendChild(parrafoTotal);

    document.body.appendChild(divCarrito);//finalmente añado el divProducto al body

    /*ESTRUCTURA QUE DEBE CREAR ESTA FUNCION
     <div id="carrito">
     <div class="articulo">   
     <img src="images/jvc.jpg"> 
     <span>Precio:</span>
     <span class="precio">150</span>  
     <span>Cantidad</span>                       
     <span class="stock-positivo">6</span>
     <button id="button">+</button>  
     <button id="button">-</button>  
     </div> 
     <p>totalComprar</>
     </div>
     */
}
;

