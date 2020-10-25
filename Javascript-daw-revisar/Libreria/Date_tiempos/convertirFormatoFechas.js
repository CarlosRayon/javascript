
/****************************FORMATOS PARA FECHAS***************************************
 * 
     * Convierte un texto de la forma 2017-01-10 a la forma
     * 10/01/2017
     
     * @param {string} texto Texto de la forma 2017-01-10
     * @return {string} texto de la forma 10/01/2017
     *
     */
    function formato(texto) {
        return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');
    }



    /*Convierte un fecha en formato yyyy-mm-dd en dd/mm/yyyy
     * (Podemos poner el separador que queramos usar en el join)
     * 
     * @param {String} fecha en formato yyyy-mm-dd
     */
    function convertDateFormat(fecha) {
        var info = fecha.split('-').reverse().join('/');
        return info;
    }




    /*
     Obtener los datos de la fecha (eg: día, mes, año) separando la cadena por el separado - y luego 
     armar la fecha en el orden deseado y con el separador que queramos
     @param string (string) : Fecha en formato YYYY-MM-DD
     @return (string)       : Fecha en formato DD/MM/YYYY
     */
    function convertDateFormat(string) {
        var info = string.split('-');
        return info[2] + '/' + info[1] + '/' + info[0];
    }

