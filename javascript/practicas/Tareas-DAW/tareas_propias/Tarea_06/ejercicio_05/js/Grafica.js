/*Clase Grafica
 * Sera una lista de objetos de tipo Dato y los metodos para su manejo
 */
function Grafica()
{
    //Atributos
    this._listaDatos = new Array();

}

//Metodos por prototypos
Grafica.prototype.getListaDatos = function ()
{
    return this._listaDatos;
};

/*
 -añadirDato
 -Añade un objeto Dato a la lista
 @arguments {objeto} objetoDato   objeto que quiero añadir a la lista
 */
Grafica.prototype.añadirDato = function (objeto)
{
    this._listaDatos.push(objeto);
};

/*
 -borrarDato  
 - Borra un dato de la lista basandose en la etiqueta que tenga
 @arguments {String} nombre de la etiqueta del objeto que quiero borrar
 @returns {Boolean} true o false dependiendi si ha podido borrar dato o no
 */
Grafica.prototype.borrarDato = function (etiqueta)
{
    for (var i = 0; i < this._listaDatos.length; i++) {
        if (this._listaDatos[i].getEtiqueta() === etiqueta)
        {//podria meter un confirm("confirmar borrar") y evaluar con if 
            this._listaDatos.splice(i, 1);//borro dato y posicion
            return true;
        }
    }
    return false;
};

/*
 -buscarDato   
 -Busca un dato en concreto por la etiqueta que le pasemos
 @arguments {String} nombre de la etiqueta del objeto que quiero buscar
 @return devolvera TRUE o FALSE
 */
Grafica.prototype.buscarDato = function (etiqueta)
{
    for (var i = 0; i < this._listaDatos.length; i++) {
        if (this._listaDatos[i].getEtiqueta() === etiqueta)
        {
            return true;
        }
    }
    return false;

};

/*
 -totalDatos
 -Numero total de objetos datos que tiene la lista
 @return devulve un numero entero con el total de elementos de la lista
 */
Grafica.prototype.totalDatos = function ()
{
    return this._listaDatos.length;
};


/*
 * valorMayor
 * -Metodo que devuelve cual es el valor mayor de todos los elementos que tengamos en la lista
 */
Grafica.prototype.valorMayor = function ()
{
    var arrayNumeros = new Array();
    for (var i = 0; i < this._listaDatos.length; i++) {//Pasamo todos los valores de lo objeto a un array      
        arrayNumeros.push(this._listaDatos[i].getValor());
    }
    //Devolvemos el mayor de los valores que tengamos
    return Math.max.apply(null, arrayNumeros);// devuelve -Infinity  si no tenemos ningun valor
};

/*Metodo que devuelve el porcentaje del valor de un objeto respecto a un valor(que sera el valor mayor de todos los objetos)
 * @argument {Integer} valor maximo de todos los valores que tengamos en la lista de objetos
 * @argument {Integer} valor de un objeto en concreto
 * */
Grafica.prototype.reglaGrafica = function (maximoValor, valor)
{
    return (valor * 100) / maximoValor;
};

/*Metodo para mostrar los datos en la grafica
 * Crea los div y elementos necesario para mostrar los datos de la grafica
 * @argument {Number} porcentaje que sera el tamaño que tenga el div 
 * @argument {String} dato que mostramos en el div (el valor de la etiqueta del objeto Dato)
 * 
 * */
Grafica.prototype.mostrarDato = function (porcentaje, dato)
{
    var capaGrafica = document.getElementById("grafica");//Capturo div grafica...

    var contenedor = document.createElement("div");//Creo div contenedor...
    contenedor.className = "contenedor";//... al contenedor le añado la class contenedor

    var progreso = document.createElement("div");//..Creo div progreso...
    progreso.className = "progreso";//... le añado la clase progreso..
    progreso.style.width = porcentaje + "%";//...añado un with con un valor que sera el porcentaje que le paso por parametros...

    var texto = document.createTextNode(dato);//...Creo un text node que tendra el valor pasado por parametros(atributo etiqueta del objeto de la lista)

    progreso.appendChild(texto);
    contenedor.appendChild(progreso);
    capaGrafica.appendChild(contenedor);

};
/*Metodo que cambiar la clase del div grafica para hacerle visible/oculto
 * @param {String} visibilidad Pude ser dos valores visible/oculto
 */
Grafica.prototype.mostrarOcultarGrafica = function (visibilidad)
{
    var capaGrafica = document.getElementById("grafica");//Capturo div mensajes....
    capaGrafica.className = "";//Borro su clase original...
    capaGrafica.classList.add(visibilidad);//...y le añado la clase visible

};

/*Metodo para mostrar los resultados de la grafica por pantalla
 * @returns {Boolean} true o false si no tenemos ningun valor en la lista
 * */
Grafica.prototype.resultadoDatos = function ()
{
    var valorMaximo = this.valorMayor();
    if (valorMaximo != "-Infinity")
    {
        this.mostrarOcultarGrafica("visible");
        for (var i = 0; i < this._listaDatos.length; i++) {
            this.mostrarDato(this.reglaGrafica(valorMaximo, this._listaDatos[i].getValor()), this._listaDatos[i].getEtiqueta());
        }
        return true;
    } else
    {
        return false;
    }

};


