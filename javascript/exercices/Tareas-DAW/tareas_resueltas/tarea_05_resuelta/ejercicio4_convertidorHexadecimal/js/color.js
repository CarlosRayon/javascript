

/* DDWEC05 - Solución Tarea. Ejercicio 4 - Javier González Pisano */


/******** DEFINICION DE CLASE Color ************/

const BASE_16=16;


function Color(){
    if(arguments.length===1){
        this._valorHexadecimal=arguments[0];
        this._valorRGB=this._hex2RGB(this._valorHexadecimal);
    }else if(arguments.length===3){
        this._valorRGB=new Array(parseInt(arguments[0]),parseInt(arguments[1]),parseInt(arguments[2]));
        this._valorHexadecimal=this._RGB2Hex(this._valorRGB);
     }
     else{
        this._valorHexadecimal="000000";
        this._valorRGB=new Array(0,0,0);
     }
}

Color.prototype.setRGB=function(rgb){
    this._valorRGB=rgb;
    this._valorHexadecimal=this._RGB2Hex(this._valorRGB); 
};

Color.prototype.seHex=function(hex){
    this._valorHexadecimal=hex;
    this._valorRGB=this._hex2RGB(this._valorHexadecimal);
};

Color.prototype.getRojo=function(){
    return this._valorRGB[0];
};

Color.prototype.getVerde=function(){
    return this._valorRGB[1];
};

Color.prototype.getAzul=function(){
   return this._valorRGB[2];
};

Color.prototype.getHex=function(){
  return this._valorHexadecimal;
};

Color.prototype._RGB2Hex=function(rgb){
    var hex="";
   
     for (var i = 0; i < this._valorRGB.length; i++) {
        var cociente=Math.floor(this._valorRGB[i]/BASE_16);
        var resto=this._valorRGB[i]%BASE_16;
        
        var cociente=CARACTERES_HEX[cociente];
        var resto=CARACTERES_HEX[resto];
        
        hex+=cociente;
        hex+=resto;       
    }
    return hex;
};

Color.prototype._hex2RGB=function(hex){

    var rgb=new Array(3);
    for (var i = 0; i < rgb.length; i++) {
        var grupo=hex.substring(2*i,2*i+2);
        var valor=(CARACTERES_HEX.indexOf(grupo[0])*BASE_16)+CARACTERES_HEX.indexOf(grupo[1]);
        rgb[i]=valor;
    }
    return rgb;
    
};





