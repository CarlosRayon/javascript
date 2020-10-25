

/* Definición de la clase Autobus */

function Autobus(matricula, origen, destino, fecha, precioBase, plazas)
{
    this.matricula = matricula;
    this.origen = origen;
    this.destino = destino;
    this.fecha = fecha;
    this.precioBase = precioBase;
    this.plazas = [plazas][4];


    this.generaLocalizador = function ()
    {
        var localizador = "";
        localizador = LETRAS[aleatoriosEntreMinimoMaximo(0, 25)];
        localizador += LETRAS[aleatoriosEntreMinimoMaximo(0, 25)];
        localizador += LETRAS[aleatoriosEntreMinimoMaximo(0, 25)];
        localizador += LETRAS[aleatoriosEntreMinimoMaximo(0, 25)];
        localizador += aleatoriosEntreMinimoMaximo(0, 9);
        localizador += aleatoriosEntreMinimoMaximo(0, 9);
        return localizador;
    };


    this.generarPrecio = function ()
    {
     
    };


}
;