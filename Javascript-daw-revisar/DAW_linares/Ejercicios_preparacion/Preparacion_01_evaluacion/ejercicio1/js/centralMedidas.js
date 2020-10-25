

function CentralMedidas()
{
    this.medidas = new Array();
}

CentralMedidas.prototype.existeCiudad = function (ciudad)
{  
    for (var i = 0; i < this.medidas.length; i++) {
        if (this.medidas[i][0] === ciudad) {
            return false;//Si ya se encuentra salimos de la funcion
        }
    }
};


CentralMedidas.prototype.insertarMedidas = function (ciudad, valores)
{
    if (valores.length > 30)
    {
        //Valido que no tengamos ya la ciudad
        for (var i = 0; i < this.medidas.length; i++) {
            if (this.medidas[i][0] === ciudad) {
                return false;//Si ya se encuentra salimos de la funcion
            }
        }

        //Creo un array juntando los dos datos
        var arrayDatos = new Array();
        arrayDatos.push(ciudad);//añado valor individual en la primera posicion
        for (var i = 0; i < valores.length; i++) {//añado los valores del array con lo que obtengo todos los valores del array en las siguientes posiciones
            arrayDatos.push(parseInt(valores[i]));
        }


        //El array con los datos se le añado a la estructura de medidas
        this.medidas.push(new Array());//Creo un nuevo array(fila)
        var tamaño = this.medidas.length - 1;//Capturo el tamaño del array para insertar el dato en esta posicion EVITO QUE SE SOBREESCRIBA
        for (var i = 0; i < arrayDatos.length; i++) {
            this.medidas[tamaño].push(arrayDatos[i]);//En la posicion vacia siguiente le añado los datos del array de datos creados con anterioridad
        }

        return true;

    } else {

        return false;
    }
};

CentralMedidas.prototype.actualizarMedidas = function (ciudad, valor, dia)
{
    for (var i = 0; i < this.medidas.length; i++) {

        if (this.medidas[i][0] === ciudad) {

            this.medidas[i][dia] = valor;
            return true;
        }
    }
    return false;
};

CentralMedidas.prototype.mediaMedidas = function (ciudad)
{
    var totalValores = 0;

    for (var i = 0; i < this.medidas.length; i++) {
        if (this.medidas[i][0] === ciudad) {
            for (var j = 1; j < this.medidas[i].length; j++) {
                totalValores += this.medidas[i][j];
            }
            return (totalValores / 30);
        }
    }

};

CentralMedidas.prototype.eliminarCiudad = function (ciudad)
{
    for (var i = 0; i < this.medidas.length; i++) {
        if (this.medidas[i][0] === ciudad) {
            this.medidas.splice(i, 1);
            return true;
        }
    }
    return false;
};

CentralMedidas.prototype.imprime = function ()
{
    var datos = "";
    for (var i = 0; i < this.medidas.length; i++) {
        datos += "La ciudad es " + this.medidas[i][0];
        for (var j = 1; j < this.medidas[i].length; j++) {
            datos += "Dato dia " + j + " es " + this.medidas[i][j];
        }
    }
    return datos;
};

CentralMedidas.prototype.toHTML = function ()
{

    var tabla = "<table>";//Empiezo creando la tabla
    //
    //CREO LA CABEZERA DE LA TABLA
    tabla += "<tr><th>ciudades</th>"; //PRIMERA POSICION
    
    for (var i = 1; i < this.medidas[0].length; i++) {//TANTAS CABEZERAS(COLUMNAS) COMO DATOS TENGAMOS EN EL ARRAY DE MEDIDAS
        tabla += "<th>" + i + "</th>";
    }
    tabla += "<th>Medias</th></tr>";//UNA CABECERA MAS PARA LAS MEDIDAS


    //AÑADO LOS DATOS A LAS SIGUIENTES FILAS DE LAS TABLA
    for (var i = 0; i < this.medidas.length; i++) {
        tabla += "<tr>";//CREO FILA
        for (var j = 0; j < this.medidas[i].length; j++) {//AÑADO VALORES
            tabla += "<td>" + this.medidas[i][j] + "</td>";
        }
        
        tabla += "<td>" + this.mediaMedidas(this.medidas[i][0]) + "</td>";//VALOR EXTRA
        tabla += "</tr>";//CIERRO FILA      
    }
    tabla += "</table>";//CIERRO TABLA

    document.getElementById("tabla-medidas").innerHTML = tabla; //AÑADO LA TABLA AL DIV CORRESPONDIENTE
};
















