    /*Funcion que comprueba si un numero esta entre el intervalo de otros dos
     * 
     * @param {number} numero
     * @param {number} maximo
     * @param {number} minimo
     * @return {Boolean}
     */
    function intervalo (numero, maximo, minimo) {
        if (numero >= minimo && numero <= maximo) { //HE CONSIDERADO QUE EL VALOR DE LOS LIMITES TAMBIEN SON VALIDOS
            return true;//Si el campo es correcto
        } else {
            return false;
        }
    };
