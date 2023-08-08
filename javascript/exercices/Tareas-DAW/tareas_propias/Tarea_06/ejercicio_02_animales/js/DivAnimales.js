/* 
 Clase que servira como molde para crear objetos div con una imagen de un animal de fondo
 */

function DivAnimales()
{
    //Atributos
    this._nombreAnimalMostrar;
    this._id;
    this._clase = "animal";


    this.arrayAnimales = ["cerdo", "gato", "perro", "vaca", "gallina", "serpiente"];//Array con los nombres de los animales(fotos que tengo)
}

   DivAnimales.prototype.crearDivSimple = function (id)//Creo un objeto de tipo div simple
{
    var div = document.createElement("div");//Creo el elemento div    
    div.id = id;//Le añado el atributo id  
    return div;
};


DivAnimales.prototype.crearDivAnimales = function (nombreAnimal)
{

    var rutaImagen = "images/" + nombreAnimal + ".png";//ruta de la imagen a mostra 
    var rutaSonido = "sounds/" + nombreAnimal + ".wav";
    var div = document.createElement("div");//Creo el div
    div.id = nombreAnimal;//Le añado el id que sera el pasado por parrametros
    div.className = this._clase;//Le añado la clase 
    div.style.background = "url(" + rutaImagen + ") top center";//Añado la foto al fondo
    div.style.backgroundSize = " 100% 100%";

    //Creo la etiqueta audio con otra hijo soucer y la añado al div
    var audio = document.createElement("audio");//Creo elemento audio

    audio.id = "audio" + nombreAnimal;//Le doy un id al audio para capturalos mas facilmente despues

    var source = document.createElement("source");//Creo elemento source
    source.src = rutaSonido;//Añado el atributo src a source
    audio.appendChild(source);//Añado a audio el elemento source
    div.appendChild(audio);//Añado audio como hijo del div
    return div;

};




DivAnimales.prototype.crearElementosDivs = function ()
{
    var divPrincipal = this.crearDivSimple("animales");

    var listaElemento = Array();

    for (var i = 0; i < this.arrayAnimales.length; i++) {

        listaElemento.push(this.crearDivAnimales(this.arrayAnimales[i]));
    }

    return listaElemento;

}

