

const LETRAS=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const CODIGOS={
    ASIGNACION_OK:1, /* La asignación se realizó correctamente */
    ASIGNACION_SIN_PREFERENCIA:2, /* La asignación se realizó pero no se respetó la preferencia de ubicación */
    AUTOBUS_LLENO:3 /* La asignación no pudo realizarse al estar el autobús lleno */
};

const CODIGOS_DESCUENTO=["DEFC","DGHS"];

  function aleatoriosEntreMinimoMaximo(min, max)
    {
        return Math.round(Math.random() * (max - min) + min);
    };


