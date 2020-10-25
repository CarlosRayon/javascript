
/* DDWEC04 - Solución Tarea. Ejercicio 5 - Javier González Pisano */

/******** DECLARACIÓN DE CLASE Edificio (Función constructora) ************/


function Edificio(calle,numero,codigoPostal){
   this._calle=calle || "Sin calle";
   this._numero=numero || 0;
   this._codigoPostal=codigoPostal || 39000;
   this._plantas=new Array();
   
   console.warn("Construido nuevo edificio en "+this._calle+" "+this._codigoPostal+", CP "+this._codigoPostal);
   
   this.agregaPlantasYPuertas=function(nPlantas,nPuertas){
        for (var i = 0; i < nPlantas; i++) {//creo tantas plantas (fila) como datos introduccidos
            this._plantas.push(new Array(nPuertas));//dentro de cada planta (fila) creo tantas puertas (columnas) como puertas
            
            /* Inicializamos los propietarios */
            for (var j= 0; j < nPuertas; j++) {
                this._plantas[this._plantas.length-1][j]="Sin propietario";
                
            }
        }
   };
   
   this.modificaNumero=function(numero){
       this._numero=numero;
   };
   this.modificaCalle=function(calle){
       this._calle=calle;
   };
   this.modificaCP=function(cp){
       this._codigoPostal=cp;
   };
   this.getCalle=function(){
       return this._calle;
   };
   this.getNumero=function(){
       return this._numero;
   };
   this.getCP=function(){
       return this._codigoPostal;
   };
   
   this.agregaPropietario=function(nombre,planta,puerta){
      if((planta<this._plantas.length)&&(puerta<this._plantas[planta].length)){
        this._plantas[planta][puerta]=nombre;
        console.warn(nombre+ " es el nuevo propietario de  la puerta "+puerta+" de la planta "+planta);
         }
   

   };
   this.imprimePlantas=function(){
     console.warn("Plantas del edificio "+this._calle+" "+this._codigoPostal+", CP "+this._codigoPostal);


        for (var i = 0; i < this._plantas.length; i++) {
            for (var j = 0; j < this._plantas[i].length; j++) {
                console.log("Planta "+i+" puerta "+j+" >> "+this._plantas[i][j]);
            }
            
        }
   };
   
 }


/*****************   CUERPO DEL SCRIPT ******************************/

var edificioA=new Edificio();//instancio con el constructor vacio
edificioA.modificaCalle("General Dávila")
edificioA.modificaCP(39001);
edificioA.modificaNumero(1);
edificioA.agregaPlantasYPuertas(2,2);
edificioA.agregaPropietario("Francisco Núñez",0,0);
edificioA.agregaPropietario("Francisco Pérez",0,1);
edificioA.agregaPropietario("Francisco González",1,0);
edificioA.agregaPropietario("Francisco Fernández",1,1);
edificioA.imprimePlantas();

var edificioB=new Edificio("Floranes",32,39007);
edificioB.agregaPlantasYPuertas(3,3);
edificioB.agregaPropietario("Manuel Perez",2,1);
edificioB.agregaPlantasYPuertas(1,1);
edificioB.agregaPropietario("Manuel González",3,0);
edificioB.imprimePlantas();


