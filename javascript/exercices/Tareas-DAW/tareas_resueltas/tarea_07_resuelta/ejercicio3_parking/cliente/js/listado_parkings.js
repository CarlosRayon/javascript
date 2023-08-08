
 /* Definición de la clase ListadoParking */
 
 function ListadoParkings(){
     this._parkings=new Array();
 }
 
 ListadoParkings.prototype.addParking=function(parking){
     if(this.getParkingFromId(parking.id)===null)
        this._parkings.push(parking);
 };
 
 ListadoParkings.prototype.getNumeroParkings=function(){
     return this._parkings.length;
 };
 
 ListadoParkings.prototype.getParkingFromId=function(id){
     var parking=null;
     for (var i = 0; i < this._parkings.length; i++) {
        if(this._parkings[i].id==id)
            parking=this._parkings[i];
    }
    return parking;
 };
 
 ListadoParkings.prototype.actualizaPorcentaje=function(id,porcentaje){
     var parking=this.getParkingFromId(id);
     if(parking!==null)
         parking.porcentaje=porcentaje;
 };
 
 ListadoParkings.prototype.getParking=function(indice){
     return this._parkings[indice];
 };