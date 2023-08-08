
 /* Prueba de la clase tienda */
 
 var miTienda=new Tienda();
 miTienda.cargaProductos();
 
 console.log("Número de productos [10]: "+miTienda.numeroProductos());
 for (var i = 0; i < miTienda.numeroProductos   (); i++) {
     var p=miTienda.getProductoFromPosition(i);
     var stock=miTienda.getStock(p.id);
      console.log("Producto id-->"+p.id+" imagen-->"+p.imagen+" precio-->"+p.precio+" stock-->"+stock);
}
 
 
var p=miTienda.getProductoFromPosition(0);
var stock=miTienda.decrementaStock(p.id);

console.log("Producto (tras decrementar) id-->"+p.id+" imagen-->"+p.imagen+" precio-->"+p.precio+" stock-->"+stock);

stock=miTienda.incrementaStock(p.id);
console.log("Producto (tras incrementar) id-->"+p.id+" imagen-->"+p.imagen+" precio-->"+p.precio+" stock-->"+stock);


