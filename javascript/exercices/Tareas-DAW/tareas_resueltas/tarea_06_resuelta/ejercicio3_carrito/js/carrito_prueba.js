/* Prueba de la clase Carrito */

var carritoPrueba=new Carrito();

carritoPrueba.insertaProducto({id:"A",precio:1.5,imagen:"productoA.jpg"});
carritoPrueba.insertaProducto({id:"B",precio:2,imagen:"productoB.jpg"});
carritoPrueba.insertaProducto({id:"C",precio:2.5,imagen:"productoC.jpg"});

carritoPrueba.insertaProducto({id:"D",precio:3,imagen:"productoD.jpg"});


console.log("He insertado "+carritoPrueba.numeroCompras()+" productos [4]");
console.log("Total compra: "+carritoPrueba.getTotalCompra()+ " [9]");

carritoPrueba.insertaProducto({id:"D",precio:3,imagen:"productoD.jpg"});

console.log("Inserto repetido y hay "+carritoPrueba.numeroCompras()+" productos [4]");
console.log("Total compra: "+carritoPrueba.getTotalCompra()+ " [12]");


var p=carritoPrueba.getCompraFromId("A");
console.log("He obtenido el producto: "+p.id+" [A]");

var p1=carritoPrueba.getCompraFromPosition(1);
console.log("He obtenido el producto: "+p1.id+" [B]");

carritoPrueba.eliminaProductoFromId("C");
console.log("Tras eliminar hay "+carritoPrueba.numeroCompras()+" productos [3]");

