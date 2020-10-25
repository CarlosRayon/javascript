/* 
Ver el estado del readyState mediante un swich
Nos puede servir para comprobar que estado tienes
 */
  switch (this.readyState)
    {
        case 1:
            console.log("el estado es " + this.readyState + " conexión del servidor establecida");
            break;
        case 2:
            console.log("el estado es " + this.readyState + " solicitud recibida");
            break;
        case 3:
            console.log("el estado es " + this.readyState + " solicitud de procesamiento");
            break;
        case 4:
            console.log("el estado es " + this.readyState + " solicitud finalizada y la respuesta está lista");
            break;
    }

