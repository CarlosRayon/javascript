
/* DDWEC05 - Solución Tarea. Ejercicio 1 - Javier González Pisano */

/******** DECLARACIÓN DE CLASE PalabraOculta (prototipos) ************/

function PalabraOculta(){
    this._palabras=new Array("LAREDO","SANTANDER","PIELAGOS","LIERGANES","LIENCRES","TORRELAVEGA","SUANCES","SANTOÑA","POTES","COMILLAS");
    this._palabraActual=-1;
    this._intentos=0;
    this._aciertos=0;
};

PalabraOculta.prototype.generaPalabra=function(){
    this._palabraActual=this._generaAleatorio(0,this._palabras.length-1);
    return this._desordena(this._palabras[this._palabraActual].toUpperCase());
};

PalabraOculta.prototype.getPalabraActual=function(){
    return this._palabras[this._palabraActual].toUpperCase();
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



