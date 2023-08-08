/* 
 Clase Producto para crear objetos de tipo literal Paroducto
 */

function Producto(id, precio, imagen)
{
    var producto = {
        //Atributos
        id: id,
        precio: precio,
        imagen: imagen,
        
        //Metodos get. 
        getId: function () {
            return this.id
        },
        getPrecio: function () {
            return this.precio
        },
        getImagen: function () {
            return this.imagen
        }
    }
    return producto;
}