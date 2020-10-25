/*  
 OBJETOS LITERALES:
 -Para no se quieren muchos objetos del mismo tipo
 RECUERDA!!! No se usa ; para separar cada atributo, funcion sino que se usa la ,
 RECUERDA!!! No se usa el = para dar valores sino los :
 */
 var objeto={
 atributo1:"valor",
 atributo2:"valor2",
 atributoArray:["dato1","dato2"],
 metodo1:function(parametro){
 this.atributo1=parametro;
 },
 metodo2:function(){
 return this.atributo1;
 }
 };
 
 //Se pueden crear tambien como objeto simple con new
 var objeto2= new Object();
 //Añadimos atributos y metodos al objeto de la siguiente manera:(RECUERDA!!! Aqui si usamos =
 objeto2.atributo1="valor",
 objeto2.atributo2="valor2",
 objeto2.metodo1=function(parametro){
 this.atributo1=parametro;
 },
 objeto2.metodo2=function(){
 return this.atributo1;
 };
 
 /*
  UTILIZACION
    -Al crearlos de esta manera los objetos ya lo tenemos instanciados.
    -Lo podemos usar directamente como objetos normales
 */
 
     objeto.metodo1();

     objeto2.metodo2();
     

/*Clase de objetos literales*/
function Dato(etiqueta, valor,array)//RECUERDA!!!Los parametro al array se los podemos pasar asi de sencillo [100,250]
{
    var objetoDato = {
        etiqueta: etiqueta,
        valor: valor,
        array:array,
        getEtiqueta: function () {
            return this.etiqueta;
        },
        getValor: function () {
            return this.valor;
        }
    };
    return objetoDato;
}
