 /* 
     * Funcion que devuelve la fecha con formato Jueves, 7 de Diciembre de 2017
     * @argument {Date} fecha
     * @returns {String} String con la fecha (Jueves, 7 de Diciembre de 2017)
     */
    //Creo la fecha
    var f = new Date();
    
    function diasMesesDeUnaFecha(fecha)
    {
        //Creo array con los meses
         var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        //Creo array con los dias
        var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

        //Paso los datos obtenidos como posicion en el array
        return(diasSemana[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear());
    };
    

//diasMesesDeUnaFecha(f);
