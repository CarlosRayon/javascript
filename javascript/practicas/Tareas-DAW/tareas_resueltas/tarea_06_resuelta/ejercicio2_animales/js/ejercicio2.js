
var animales=["perro","gato","vaca","cerdo","tigre","gallina","mono","lobo"];

const EFECTOS={
    GRANDE:1,
    PEQUENIO:2,
    ROTA:3,
    TRANSPARENTE:4,
    ARRIBA:5,
    ABAJO:6
};

const NUMERO_EFECTOS=Object.keys(EFECTOS).length;

window.addEventListener("load",cargaPagina);

function cargaPagina(){
    var contenedor=document.createElement("div");
    contenedor.id="animales";
    
 for (var i = 0; i < animales.length; i++) {
    var animal=document.createElement("div");
    animal.className="animal";
    animal.id=animales[i];
    animal.style.backgroundImage="url(images/"+animales[i]+".png)";
    
    var audio=document.createElement("audio");
    audio.id="player-"+animales[i];
    var source=document.createElement("source");
    source.src="sounds/"+animales[i]+".wav";
    audio.appendChild(source);
    animal.appendChild(audio);
    
    animal.addEventListener("click",pulsaAnimal);
    
    contenedor.appendChild(animal);
}

document.body.appendChild(contenedor);
}


function pulsaAnimal(){
    this.removeEventListener("click",pulsaAnimal);
    
    document.getElementById("player-"+this.id).play();
    var efecto=generaAleatorio(1,NUMERO_EFECTOS);
       
    switch (efecto){
        case EFECTOS.GRANDE:
           this.classList.add("grande");
           break;
           
        case EFECTOS.PEQUENIO:
            this.classList.add("pequenio");           
            break;
            
        case EFECTOS.ROTA:
           this.classList.add("rota");
           break;
           
        case EFECTOS.TRANSPARENTE:
           this.classList.add("transparente");
           break;          
  
         case EFECTOS.ARRIBA:
           this.classList.add("arriba");
           break;    
  
         case EFECTOS.ABAJO:
           this.classList.add("abajo");
           break;    
        
    }
    
    
    
    setTimeout(eliminaEfecto,4000,this);
   
}

function generaAleatorio(min,max){
    return Math.floor((Math.random()*(max+1-min))+min);
}

function eliminaEfecto(elemento){
    elemento.className="animal";  
    elemento.addEventListener("click",pulsaAnimal);
}

