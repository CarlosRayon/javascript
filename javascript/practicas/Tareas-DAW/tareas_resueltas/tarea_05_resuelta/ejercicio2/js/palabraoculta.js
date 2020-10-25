
/* DDWEC05 - Solución Tarea. Ejercicio 2 - Javier González Pisano */

/******** DECLARACIÓN DE CLASE PalabraOculta (prototipos) ************/

function PalabraOculta(){
    this._palabras=new Array(3);
    this._palabras[0]=["PATO","PICO","POTA","CASA","COSA","SAPO","PALO","PELO","DEDO","GATO"];
    this._palabras[1]=["TOMATE","TETERA","LABIOS","DANESA","CABREO","CABLES","MACETA","VACUNO","CABEZA","AZALEA"];
    this._palabras[2]=["CABALLOS","DACTILAR","FABULOSO","JABALINA","LABRADOR","OBELISCO","PACHUCHO","VACACION","XENOFOBO","SUDBITOS"];
 
    this._dificultad=0;
    this._palabraActual=-1;
    this._intentos=0;
    this._aciertos=0;
};

PalabraOculta.prototype.setDificultad=function(letras){

  switch(parseInt(letras)){
      case 4:
          this._dificultad=0;
          break;
      case 6:
          this._dificultad=1;
          break;
      case 8:
          this._dificultad=2;
          break;          
  }        
};



PalabraOculta.prototype.generaPalabra=function(){
    this._palabraActual=this._generaAleatorio(0,this._palabras[this._dificultad].length-1);
    return this._desordena(this._palabras[this._dificultad][this._palabraActual].toUpperCase());
};

PalabraOculta.prototype.getPalabraActual=function(){
    return this._palabras[this._dificultad][this._palabraActual].toUpperCase();
};


PalabraOculta.prototype.acierto=function(){
   this._intentos++;
   this._aciertos++;
};

PalabraOculta.prototype.fallo=function(){
   this._intentos++;
};

PalabraOculta.prototype.porcentajeAcierto=function(){
    if(this._intentos===0)
        return 0;
    else
        return (this._aciertos/this._intentos).toFixed(2)*100;
};


PalabraOculta.prototype._generaAleatorio=function(min,max){
     return Math.round((Math.random()*(max-min))+min);
};

PalabraOculta.prototype._desordena=function(cadena){
     return cadena.split("").sort(function(){return Math.random()-0.5;}).join("");
};



