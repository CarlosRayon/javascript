/* 
 Clase Carrito, La usaremos para almacenar los productos adquiridos en la Tienda (Prototypos)
 */

/*Constructor
 * inicial el array a crear eñ carrito
 */
function Carrito()
{
    //Atributo  
    this._compras= new Array();

};


//Metodos añadidos por prototypos

/*Metodo getCompras que devuelve el array compras*/
Carrito.prototype.getCompras = function ()
{
    return this._compras;
};

/*Metodo que devuelve el numero de productos que contien el array
 * @returns {Entero} numero total productos del array compras 
 */

Carrito.prototype.numeroCompras = function ()
{
    return this._compras.length;
};

/*Metodo que devuelve un producto con un id determinado
 * @argument {String} id del producto a buscar
 * @returns {Producto} Devuelve objeto con id pasado por parametro, Si no hay objeto devuelve null
 */
Carrito.prototype.getCompraFromId = function (id)
{
    for (var i = 0, max = this._compras.length; i < max; i++) {

        if (this._compras[i][0].getId() === id)
        {
            console.log("mismo id");
            return this._compras[i][0];
        }

    }
    return null;


};

/*Metodo que devuelve un producto por una posicion
 * @argument {Entero} posicion
 * @returns {Producto} Devuelve el objeto que este en la posicion pasada por parametros. null si no hay posicion  
 */

Carrito.prototype.getCompraFromPosition = function (i)
{
    if (i >= this._compras.length || i<0)
        return null;//Si no existe la posicion
    return this._compras[i][0];
};

/*Metodo que inserta un producto al array compra
 * -Si no existe se inserta con cantidad 1
 * -Si ya existe se incrementa en uno la cantidad
 *@argument {Producto} producto para guardar en la primera posicion del array
 *@returns {Boolean} Si no existia producto devuelve true Si ya existia devuelve false  
 */

Carrito.prototype.insertarProducto = function (p)
{
    if (this._compras.length == 0) //Si la lista compras esta vacia la inicio con el primer producto     
    {
        this._compras;
        this._compras[0] = new Array();
        this._compras[0][0] = p;
        this._compras[0][1] = 1;
        return true;
    }

    if (this._compras.length > 0)
    {
        for (var i = 0; i < this._compras.length; i++) {

            if (this._compras[i][0].getId() === p.getId())//Con un for y un if compruebo si ya existe el id
            {
                this._compras[i][1] += 1;   //Si ya existe le aumento la cantidad   
                return false;
            }

        }

        //Si no hay id significa que no existe
        var tamaño = this._compras.length;
        this._compras[tamaño] = new Array();
        this._compras[tamaño][0] = p;
        this._compras[tamaño][1] = 1;
        return true;
    }
};

/*Metodo que elimina un producto por id
 * -Desplaza los producto una posicon(ordena el array)
 * @argument {String} id del producto
 * @returns {Boolean}  true si se ha podido eliminar false si no o no existe
 */

Carrito.prototype.eliminarProductoFromId = function (id)
{
    for (var i = 0, max = this._compras.length; i < max; i++)
    {
        if (this._compras[i][0].getId() === id)
        {
            this._compras.splice(i, 1);
            return true;
        }
    }
    return false;
};


/*metodo que devuelve el coste total de las compras del carrito
 * @returns {Entero} Total de los precio de los productos
 */

Carrito.prototype.getTotalCompra=function()
{
    var precioCompra=0;
    for (var i = 0; i < this._compras.length; i++)
    {   
       precioCompra+=(this._compras[i][0].getPrecio()*this._compras[i][1]);              
    }
    
    return precioCompra;
};

/*Metodo que devuelve la cantidad de un producto por su id
 * -Si el producto no existe devuelve -1
 * @argument {String} id de un producto
 * return {entero} Cantidad del prodcuto o -1 si no existe
 */

Carrito.prototype.getCantidadFromId=function(id)
{
    for (var i = 0; i < this._compras.length; i++)
    {      
        if(this._compras[i][0].getId()===id)
        {
            return this._compras[i][1];
        }              
    }   
    return -1;   
};

/*Metodo que incrementa la cantidad del producto que tenga el id del parametro
 * -Devuelve la cantidad incrementada
 * -Si no existe el producto devuelve -1
 * @argument {String} id de un producto
 * @returns {Entero} La cantidad incrementada en 1 o -1 si no existe el producto
 * 
 */
Carrito.prototype.incrementaCantidad=function(id)
{
    for (var i = 0; i < this._compras.length; i++) {
        
        if(this._compras[i][0].getId()===id)
        {
            this._compras[i][1]+=1;
            return this._compras[i][1];
        }      
    }  
    return -1;   
};

/*Metodo que decrementa la cantidad en 1
 * -Si el producto existe decrementa su cantidad en 1
 * -Si no exite devuelve -1
 *@argument {String} id del producto
 *@returns {Entero} la cantidad decrementada o -1 si no existe el producto
 */

Carrito.prototype.decrementaCantidad=function(id)
{
    for (var i = 0; i < this._compras.length; i++) {
        
        if(this._compras[i][0].getId()===id)
        {
            this._compras[i][1]-=1;
            return this._compras[i][1];      
        }      
    }    
    return -1;  
};










