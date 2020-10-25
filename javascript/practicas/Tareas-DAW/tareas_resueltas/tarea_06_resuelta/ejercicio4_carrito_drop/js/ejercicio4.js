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

const PREFIJO_BOTON = "comprar-";
const PREFIJO_PRODUCTO = "producto-";
const PREFIJO_ARTICULO = "articulo-";
const PREFIJO_STOCK = "stock-";
const PREFIJO_CANTIDAD = "cantidad-";
const PREFIJO_MAS = "mas-";
const PREFIJO_MENOS = "menos-";

const SUFIJO_CARRITO = "-carrito";
const SUFIJO_TIENDA = "-tienda";

var tienda;
var carrito;

window.addEventListener("load", cargaPagina);

/* Evento de carga de página sobre window
 * Instanciamos las dos variables globales carrito y tienda. */
function cargaPagina() {
    creaCarrito();
    creaTienda();
}


/* Crea la capa Carrito (vacía) */
function creaCarrito() {
    carrito = new Carrito();

    var capaCarrito = creaElemento("div", document.body, "carrito");

    creaElemento("h1", capaCarrito, null, null, "Mi carrito");
    creaElemento("p", capaCarrito, "total", null, "Carrito vacío");

    capaCarrito.addEventListener("drop", dropCapaCarrito);
    capaCarrito.addEventListener("dragover", dragOverCapaCarrito);
}



/* Crea la capa tienda y la rellena a partir de la información de la instancia de Tienda */
function creaTienda() {
    tienda = new Tienda();
    tienda.cargaProductos();

    var capaTienda = creaElemento("div", document.body, "productos");
    creaElemento("h1", capaTienda, null, null, "Mi tienda");


    for (var i = 0; i < tienda.numeroProductos(); i++) {
        var producto = tienda.getProductoFromPosition(i);
        var stock = tienda.getStock(producto.id);

        var capaProducto = creaElemento("div", capaTienda, PREFIJO_PRODUCTO + producto.id, "articulo");
        capaProducto.draggable = true;

        var imagenProducto = creaElemento("img", capaProducto);
        imagenProducto.src = "images/" + producto.imagen + ".jpg";


        var capaInformacion = creaElemento("div", capaProducto, null, "informacion");

        creaElemento("span", capaInformacion, null, null, "Precio:");
        creaElemento("span", capaInformacion, null, "precio", producto.precio);

        creaElemento("span", capaInformacion, null, null, "Stock:");
        var capaStock = creaElemento("span", capaInformacion, PREFIJO_STOCK + producto.id, "stock-positivo", stock);
        if (stock === 0)
            capaStock.className = "stock-negativo";

        capaProducto.addEventListener("dragstart", dragStartProducto);
        capaProducto.addEventListener("dragend", dragEndProducto);

    }

    capaTienda.addEventListener("drop", dropCapaTienda);
    capaTienda.addEventListener("dragover", dragOverCapaTienda);
}

/* Actualiza la información del carrito insertando el producto que pasamos como 
 * parámetro
 */
function actualizaCarrito(producto) {
    var capaCarrito = elementoID("carrito");

    var insertado = carrito.insertaProducto(producto);
    if (insertado) { /* Creo una nueva capa para el artículo */
        var capaArticulo = creaElemento("div", capaCarrito, PREFIJO_ARTICULO + producto.id, "articulo");
        capaArticulo.draggable = true;
        var imagenProducto = creaElemento("img", capaArticulo);
        imagenProducto.src = "images/" + producto.imagen + ".jpg";
        imagenProducto.draggable = false;

        creaElemento("span", capaArticulo, null, null, "Precio:");
        creaElemento("span", capaArticulo, null, "precio", producto.precio);

        creaElemento("span", capaArticulo, null, null, "Cantidad:");
        creaElemento("span", capaArticulo, PREFIJO_CANTIDAD + producto.id, "stock-positivo", "1");

        var botonMas = creaElemento("button", capaArticulo, PREFIJO_MAS + producto.id, null, "+");
        botonMas.addEventListener("click", clickMasCarrito);
        if (tienda.getStock(producto.id) === 0)
            botonMas.disabled = true;

        var botonMenos = creaElemento("button", capaArticulo, PREFIJO_MENOS + producto.id, null, "-");
        botonMenos.addEventListener("click", clickMenosCarrito);

        capaArticulo.addEventListener("dragstart", dragStartArticulo);
        capaArticulo.addEventListener("dragend", dragEndArticulo);

        capaCarrito.insertBefore(capaArticulo, elementoID("total"));
    } else { /* Actualizo cantidad */
        var spanCantidad = elementoID(PREFIJO_CANTIDAD + producto.id);
        var valor = parseInt(spanCantidad.innerText);
        valor++;
        cambiaTexto(spanCantidad, valor);
    }

    document.getElementById("total").innerText = "TOTAL:" + carrito.getTotalCompra() + " €";


}

/* Manejador del evento click sobre el botón "+" de un producto */
function clickMasCarrito() {
    var id = idFromCadena(this.id);
    carrito.insertaProducto(tienda.getProducto(id));
    var stock = tienda.decrementaStock(id);

    cambiaTexto(elementoID(PREFIJO_STOCK + id), stock);
    var cantidad = carrito.getCantidadFromId(id);
    cambiaTexto(elementoID(PREFIJO_CANTIDAD + id), cantidad);
    if (stock === 0) {
        this.disabled = true;
        elementoID(PREFIJO_STOCK + id).className = "stock-negativo";
        deshabilitaArrastre(id);
    }

    cambiaTexto(elementoID("total"), "TOTAL:" + carrito.getTotalCompra() + " €");
}

/* Manejador del evento click sobre el botón "-" de un producto */
function clickMenosCarrito() {
    var id = idFromCadena(this.id);
    var cantidad = carrito.decrementaCantidad(id);

    tienda.incrementaStock(id);
    var stock = tienda.getStock(id);

    cambiaTexto(elementoID(PREFIJO_STOCK + id), stock);

    if (stock === 1) { /* El stock era 0, pero ha pasado a ser positivo */
        elementoID(PREFIJO_STOCK + id).className = "stock-positivo";
        elementoID(PREFIJO_MAS + id).disabled = false;
    }

    if (cantidad > 0) {
        cambiaTexto(elementoID(PREFIJO_CANTIDAD + id), cantidad);
    } else {
        /* Elimino el producto del carrito */
        carrito.eliminaProductoFromId(id);
        var producto = elementoID(PREFIJO_ARTICULO + id);
        eliminaElemento(producto);
    }

    if (carrito.numeroCompras() === 0)
        cambiaTexto(elementoID("total"), "Carrito vacío");
    else
        cambiaTexto(elementoID("total"), "TOTAL:" + carrito.getTotalCompra() + " €");
}




/*************** EVENTOS DE DRAG AND DROP ********************************/

/* Manejador de evento dragStart sobre el producto [TIENDA] */
function dragStartProducto(evento) {
    var e = evento || window.event;
    /* El sufijo SUFIJO_TIENDA indica que hemos comenzado el arrastre desde la tienda */
    e.dataTransfer.setData("text/html", this.id + SUFIJO_TIENDA);

}

/* Manejador de evento draEnd sobre el producto [TIENDA] */
function dragEndProducto(evento) {
    var e = evento || window.event;
    e.stopPropagation();
}

/* Manejador de evento dragStart sobre el articulo [CARRITO] */
function dragStartArticulo(evento) {
    var e = evento || window.event;
    /* Indicamos el elemento que vamos a sacar del carrito.
     * El sufijo SUFIJO_CARRITO indica que hemos comenzado el arrastre desde el carrito 
     */
    e.dataTransfer.setData("text/html", this.id + SUFIJO_CARRITO);
}

/* Manejador de evento dragEnd sobre el articulo [CARRITO] */
function dragEndArticulo(evento) {
    var e = evento || window.event;
    e.stopPropagation();
}

/* Manejador de evento drop sobre la tienda */
function dropCapaTienda(evento) {
    var e = evento || window.event;
    if (e.dataTransfer.getData("text/html") !== "") {
        var sufijo = sufijoFromCadena(e.dataTransfer.getData("text/html"));
        if (sufijo === SUFIJO_CARRITO) { /*Si hemos comenzado el arrastre desde el carrito */
            var id = idFromCadena(e.dataTransfer.getData("text/html"));
            var cantidad = carrito.getCantidadFromId(id);
            var stock = tienda.getStock(id);
            for (var i = 0; i < cantidad; i++) {
                tienda.incrementaStock(id);
            }

            cambiaTexto(elementoID(PREFIJO_STOCK + id), tienda.getStock(id));
            if (stock === 0) { /* El stock era 0*/
                elementoID(PREFIJO_STOCK + id).className = "stock-positivo";
                elementoID(PREFIJO_MAS + id).disabled = false;
            }

            /* Elimino el producto del carrito */
            carrito.eliminaProductoFromId(id);
            var producto = elementoID(PREFIJO_ARTICULO + id);
            eliminaElemento(producto);

            if (carrito.numeroCompras() === 0)
                cambiaTexto(elementoID("total"), "Carrito vacío");
            else
                cambiaTexto(elementoID("total"), "TOTAL:" + carrito.getTotalCompra() + " €");
        }
    }
}


/* Manejador de evento dragover sobre la tienda */
function dragOverCapaTienda(evento) {
    var e = evento || window.event;
    e.preventDefault();
}

/* Manejador de evento drop sobre el carrito */
function dropCapaCarrito(evento) {
    var e = evento || window.event;
    if ((e.dataTransfer.getData("text/html") !== "")) {
        var sufijo = sufijoFromCadena(e.dataTransfer.getData("text/html"));

        if (sufijo === SUFIJO_TIENDA) { /*Si hemos comenzado el arrastre desde la tienda */
            var id = idFromCadena(e.dataTransfer.getData("text/html"));
            if ((id !== null) && (tienda.getStock(id) > 0)) {
                var producto = tienda.getProducto(id);
                var stock = tienda.decrementaStock(id);
                cambiaTexto(elementoID(PREFIJO_STOCK + id), stock);
                if (stock === 0) {
                    elementoID(PREFIJO_STOCK + id).className = "stock-negativo";
                    if (elementoID(PREFIJO_MAS + id) !== null)
                        elementoID(PREFIJO_MAS + id).disabled = true;
                }

                actualizaCarrito(producto);
            }
        }
    }
}

/* Manejador de evento dragover sobre el carrito */
function dragOverCapaCarrito(evento) {
    var e = evento || window.event;
    e.preventDefault();
}

function deshabilitaArrastre(id) {
    elementoID(PREFIJO_PRODUCTO + id).draggable = false;
    elementoID(PREFIJO_PRODUCTO + id).removeEventListener("dragstart", dragStartProducto);
    elementoID(PREFIJO_PRODUCTO + id).removeEventListener("dragend", dragEndProducto);
}