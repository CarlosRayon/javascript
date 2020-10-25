/* 
 @author Carlos Rayon Alvarez Tarea 05 JavaScript
 */

/*Creamos la psudoclase 
 * @class Pseudoclase de Tienda donde podemos guardar un array de discos. Creda con una funcion constructora
 */

function Tienda() {
    /*Propiedad de la psudoclase
     * @property {Array} Discos 
     */
    this.Discos = [];//Array de objetos de tipo disco

    /*Simulacion de enumerador(constante tipo array/objeto)
     * 
     * @property {Enumerador} TIPO_MUSICA
     */
    const TIPO_MUSICA = {
        1: "ROCK", //"ROCK":1,
        2: "POP", //"POP":2,
        3: "PUNK", //"PUNK":3,
        4: "INDIE"   //"INDIE":4
    };

    //METODOS DE LA PSEUDOCLASE//
    /* Metodos que devuelve el numero de discos que tiene la tienda
     * @returns {number} 
     */
    this.getNumeroDiscos = function ()
    {
        return this.Discos.length;
    };

    /* Metodo que devuelve al numero de discos disponibles(Cuanto disco tienen la propiedad prestado en false, no prestados y disponibles)
     * @argument {number} discoPrestados
     */
    this.getNumeroDiscosDisponibles = function ()
    {
        var discosPrestados = 0;
        for (var i = 0; i < this.Discos.length; i++) {
            if (this.Discos[i].prestado === false)
            {
                discosPrestados++;
            }
        }
        return discosPrestados;
    };

    /* Metodo que añade un disco a la tienda y devuelve true o false si no se ha podido añadir por ya exitir por tener mismo titulo
     * @argument {String} titulo 
     * @argument {String} cantante 
     * @argument {Number} tipo 
     * @argument {Date} fecha 
     * @argument {Number} estanteria 
     * @argument {boolean} prestado 
     * 
     * @returns {Boolean} 
     */

    this.addDisco = function (titulo, cantante, tipo, fecha, estanteria, prestado)
    {
        var noHaytitulosIguales = true;
        //Creamos un objeto y a los atributos les damos lo valores pasado por parametros
        var nuevoDisco = {
            titulo: titulo,
            cantante: cantante,
            tipoMusica: TIPO_MUSICA[tipo],
            fecha: new Date(fecha),
            estanteria: estanteria,
            prestado: prestado
        };

        //Validamos con no tengamos otro disco con el mismo titulo       
        for (var i = 0; i < this.Discos.length; i++) {
            if (nuevoDisco.titulo.toUpperCase() == this.Discos[i].titulo.toUpperCase())//Lo pongo todo en mayuscula para evitar dos titulo iguales introducidos de manera distinta
            {
                noHaytitulosIguales = false;//Si tenemos dos titulos iguales  la variable cambiara a false 
            }
        }
        //Añado el disco al array de discos de la la tienda si no hay uno igual      
        if (noHaytitulosIguales)
        {
            this.Discos.push(nuevoDisco);
        }
        return noHaytitulosIguales;
    };

    /* Metodo que devuelve el titulo del disco que este en la posicion marcada (Si en la posicion pasada no hay disco nos devolvera null)
     * @argument {Number} pos
     */
    this.getTituloDisco = function (pos)
    {
        var titulo = "";
        //Compruebo con operador operador ternario el indice introducido se corresponda con alguna posicion de l array. Sino pues null 
        (pos >= this.Discos.length) ? titulo = null : titulo = this.Discos[pos].titulo;
        return titulo;
    };

    /* Metodo que devuelve el disco que este en la posicion indicada
     * @argument {String} pos 
     * @returns {Object} 
     */
    this.getDisco = function (pos)
    {
        //Devuelvo el disco en la posision(si no hay disco en la posicion indicada devolvera undefine)
        return this.Discos[pos];
    };

    /* Metodo que elimina un disco por el titulo del mismo
     * @argument {String} titulo
     * @returns {Boolean} 
     */
    this.deleteDisco = function (titulo)
    {
        var tituloBorrado = false;
        for (var i = 0; i < this.Discos.length; i++) {
            if (titulo.toUpperCase() === this.Discos[i].titulo.toUpperCase())
            {
                this.Discos.splice(i, 1);
                //delete this.Discos[i]; Este borra el dato pero no la posicion
                tituloBorrado = true;
            }
        }
        return tituloBorrado;
    };

    /*
     * Metodo que devuelve verdadero si el titulo que le pasamos existe en la tienda
     * @argument {String} titulo
     * @returns {Boolean}  
     */
    this.existeDisco = function (titulo)
    {
        var existeDisco = false;
        for (var i = 0; i < this.Discos.length; i++)
        {
            if (titulo.toUpperCase() == this.Discos[i].titulo.toUpperCase())
            {
                existeDisco = true;
            }
        }
        return existeDisco;
    };

    /*Metodo que modifica las propiedades de disco accediendo a el mediante el titulo. Devuelve true si ha podido modificar false si no puede 
     * @argument {String} titulo 
     * @argument {String} cantante 
     * @argument {Number} tipo 
     * @argument {Date} fecha 
     * @argument {Number} estanteria 
     * @argument {Boolean} prestado 
     * 
     * @returns {Boolean}
     */

    this.modificaDisco = function (titulo, cantante, tipo, fecha, estanteria, prestado)
    {
        var modificado = false;
        var indice;
        var indiceTipoMusica;

        if (this.existeDisco(titulo))
        {
            indice = this.posicionDiscoPorIndice(titulo);//Saco el indice donde tenemos el disco con el titulo que le pasamos como argumento

            //Con este switch saco el indice del enumerador que tiene el tipo de musica que tiene el disco
            //Lo hago para luego pasar este inice en la modificacion opcional de datos. Si no se introduce el dato por parametro esta propiedad del disco sea igual que la que tenia.
            switch (this.Discos[indice].tipoMusica)
            {
                case "ROCK":
                    indiceTipoMusica = 1;
                    break;
                case "POP":
                    indiceTipoMusica = 2;
                    break;
                case "PUNK":
                    indiceTipoMusica = 3;
                    break;
                case "INDIE":
                    indiceTipoMusica = 4;
                    break;
            }

            //Cambio las propiedades del disco con los argumentos pasados por parametro. Si no le paso nada el disco queda con los argumentos que tenia.
            this.Discos[indice].cantante = cantante || this.Discos[indice].cantante;
            this.Discos[indice].tipoMusica = TIPO_MUSICA[tipo] || TIPO_MUSICA[indiceTipoMusica];//Debo pasarle el indice que marca el tipo de musica que es. Le consiguo del switch
            this.Discos[indice].fecha = fecha || this.Discos[indice].fecha;
            this.Discos[indice].estanteria = estanteria || this.Discos[indice].estanteria;
            this.Discos[indice].prestado = prestado || this.Discos[indice].prestado;
            modificado = true;
        }
        return modificado;
    };


//FUNCION EXTRA PARA USAR EN EL METODO ANTERIOR
    /* @function Funcion que devuelve la posicion donde esta el disco que tiene el mismo titulo que el titulo que le pasamos
     * @argument {String} titulo
     * @returns {Number} 
     */
    this.posicionDiscoPorIndice = function (titulo) {
        var indice;
        for (var i = 0; i < this.Discos.length; i++) {
            if (this.Discos[i].titulo.toUpperCase() == titulo.toUpperCase())
            {
                indice = i;
            }
        }
        return indice;
    };

}

