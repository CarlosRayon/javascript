


window.addEventListener("load", animales);


function animales()
{
    var divAnimal = document.getElementsByClassName("animal");//CAPTURO ELEMENTOS
    for (var i = 0; i < divAnimal.length; i++) {//DOY EVENTOS A TODOS
        divAnimal[i].addEventListener("click", juegoAnimal);
    }
}

function juegoAnimal()
{
    if(esEntero(this.children[1].innerHTML))//VALIDO QUE EL DATO SEA UN ENTERO...
    {
       var numero=parseInt(this.children[1].innerHTML);//SI LO ES LO CONVERTIO...
       this.children[1].innerHTML=numero+1;//LE SUMO
    }else//...SI NO LO ES PONGO 1
    {
      this.children[1].innerHTML=1;  
    }
    
    var mensajeUltimo = "Acaba de pulsar sobre un " + this.children[0].className;
    document.getElementById("ultimo").innerHTML = mensajeUltimo;

}

function esEntero(c) {
    if (isNaN(parseInt(c)) || (parseInt(c) !== parseFloat(c)) || (c != parseInt(c)))
        return false;
    else
        return true;
}
