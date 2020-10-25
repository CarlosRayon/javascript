/* 
Clase que crea un objeto tipo tienda y los metodos del manejo de la tienda(Prototypos)
*/

function Tienda()
{
    //Atributos 
    this._productos= new Array();
    
    //Entiendo que el array de los productos lo tengo que poner como propiedad en la tienda?
  
    this.productos=[ {"image" : "brigmton", "price" : "120","stock":"6"},
				{"image" : "jvc", "price" : "150","stock":"6"},
				{"image" : "pioneer1", "price" : "120","stock":"6"},				
				{"image" : "pioneer2", "price" : "100","stock":"1"},				
				{"image" : "pioneer3", "price" : "220","stock":"8"},				
				{"image" : "pioneer4", "price" : "120","stock":"3"},
				{"image" : "pioneer5", "price" : "420","stock":"10"},
				{"image" : "pioneer6", "price" : "550","stock":"7"},
				{"image" : "pioneer7", "price" : "580","stock":"9"}];
                            
  this.cargaProductos();//Seria necesario para que al crear objeto se cargen los datos?¿??¿
    
};

//Metodos añadidos por prototypos
/*Metodo que carga los producto de la tienda a partir de la informacion
 * del array de productos.js
 * El array como productos le tengo como atributo de la tienda
 * 
 */
Tienda.prototype.cargaProductos=function ()
{   
    for (var i = 0; i < this.productos.length; i++) {
        
        //var id=(1+i).toString();//RECUERDA!!!Empiezo que el producto sea el numero!!!
        var id=this.productos[i].image; //Pongo como identificador el nombre de la imagen que es unica para cada objeto
        var precio=this.productos[i].price;
        var imagen=this.productos[i].image;
        var stock=this.productos[i].stock;
        
       var producto= new Producto(id,precio,imagen);  
       
       this._productos[i]= new Array();
       this._productos[i][0]=producto;
       this._productos[i][1]=stock;             
    }  
};

/*Metodo que devuelve el numero de productos que contiene la tienda
 * @return {entero} cantidad productos de la tienda
 * */

Tienda.prototype.numeroProductos=function()
{
    return this._productos.length;
};

/*Metodo que devuelve el objeto con id determinado
 * @argument {String} id del objeto
 * @retutn {Objetos} Objeto producto si no existe devuelve null
 * 
 */

Tienda.prototype.getProducto=function (id)//RECUERDA!!!! El id del producto empieza en 1
{   
    for (var i = 0; i < this._productos.length; i++) {
        
        if(this._productos[i][0].getId()===id)
        {
            return this._productos[i];
        }      
    }
   return null; 
};

/*Metodo que devuelve el objeto que este en una posicion concreta
 * @argument {Entero} numero posicion
 * @return {objeto}  Objeto producto si no existe devuelve null*/

Tienda.prototype.getProductoFromPosition=function (pos)
{
  if (pos >= this._productos.length || pos<0)
        return null;//Si no existe la posicion
    return this._productos[pos][0];     
};

/*Metodo que devuelve el stock del producto con determinado id
 * -si el id no existe devuelve -1
 * @argument {String} id del producto
 * @returns {Entero} Stock del producto
 */

Tienda.prototype.getStock=function(id)
{
     for (var i = 0; i < this._productos.length; i++)
    {      
        if(this._productos[i][0].getId()===id)
        {
            return this._productos[i][1];
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

Tienda.prototype.decrementaCantidad=function(id)
{
    for (var i = 0; i < this._productos.length; i++) {
        
        if(this._productos[i][0].getId()===id)
        {
            this._productos[i][1]-=1;
            return this._productos[i][1];      
        }      
    }    
    return -1;  
};
/*Metodo que incrementa la cantidad en 1
 * -Si el producto existe decrementa su cantidad en 1
 * -Si no exite devuelve -1
 *@argument {String} id del producto
 *@returns {Entero} la cantidad decrementada o -1 si no existe el producto
 */

Tienda.prototype.incrementaCantidad=function(id)
{
    for (var i = 0; i < this._productos.length; i++) {
        
        if(this._productos[i][0].getId()===id)
        {
            this._productos[i][1]+=1;
            return this._productos[i][1];      
        }      
    }    
    return -1;  
};



