window.addEventListener("load", cargarPlanetas);

function cargarPlanetas()
{
    peticionGET();
}

function peticionGET() //poner parametros si queremos para pasar a la peticion
{
    var miXHR = new XMLHttpRequest();
    miXHR.onreadystatechange = cambiaEstado;//Cada vez que cambie el estado, hace esta funcion

    var uri = "../servidor/planetas.php"; //MODIFICAR CON LA URI CORRESPONDIENTE
    miXHR.open("GET", uri);
    miXHR.send(null);//Al ser GET el parametro es null
}

/*RECUERDA ESTA FUNCION INCLUIR DIRECTAMENTE EN EL JAVASCRIPT PARA UNA VEZ HECHA LA PETICION HACER ALGO*/
function cambiaEstado()
{
    /*Costantes que guardan los estados correctos del objeto y del servidor*/
    const ESTADO_FINALIZADO = 4;
    const CODIGO_EXITO = 200;

    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO))
    {
        var datos = JSON.parse(this.responseText);

        var arrayPlanetas = new Array();
        for (var i = 0; i < datos.length; i++) {
            var planeta = new Planeta(datos[i].id, datos[i].nombre, datos[i].posOrbita, datos[i].velocidad, datos[i].descripcion);
            arrayPlanetas.push(planeta);
        }


         id= setInterval(moverPlaneta, 50, arrayPlanetas, window.innerHeight, window.innerWidth);  
        
        
        
    }
}

function pararPlaneta()
{
    clearInterval(id);
    
}

function volverIniciar()
{
   cargarPlanetas();
}

function parar(){
    
}
function moverPlaneta(array, ancho, alto,id) {
    eliminaContenido(document.body);
    for (var i = 0; i < array.length; i++) {
        array[i].mover(ancho, alto);
        crearPlanetas(array[i].nombre, array[i].id, array[i].posicionX, array[i].posicionY);
    }
    
    
    
}

function crearPlanetas(planeta, id, positionX, positionY)
{
    var divPlaneta = creaElemento("div", document.body, id, "planeta " + planeta.toLowerCase(), null);
    divPlaneta.style.top = positionX;
    divPlaneta.style.left = positionY;
    var etiquetaImagen = creaElemento("img", divPlaneta, null, null, null);
    etiquetaImagen.src = "css/images/" + planeta + ".gif";
    divPlaneta.addEventListener("mouseover",pararPlaneta);
    divPlaneta.addEventListener("mouseout ",volverIniciar);
    
    
}

