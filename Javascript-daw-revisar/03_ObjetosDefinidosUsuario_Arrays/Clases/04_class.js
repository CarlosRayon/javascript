/* 
NUEVA FORMA CLASS

estudiar proximante
 

class NombreClase
{
    this.constructor=(valorAtributo, valorAtributo2) {
    this.atributo1 = valorAtributo;
    this.atributo2 = valorAtributo2;
  };
  
    this.setatributo2=function(nuevoValor)
  {
      this.atributo2=nuevoValor;
  };
  
  get getAtributo1() {
    return this.atributo1;
  }
 
}

var objeto = new NombreClase("valor atributo 1","valor atributo 2");

console.log(objeto.getAtributo1());
*/