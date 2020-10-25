/* 
 * @author Carlos Rayon Alvarez
Archivo de prueba
 */
var tienda1= new Tienda();
var tienda2 =new Tienda();

//Enumerador para guardar los estilos de musica
const TIPO_MUSICA={
        1: "ROCK", //"ROCK":1,
        2: "POP", //"POP":2,
        3: "PUNK", //"PUNK":3,
        4: "INDIE"   //"INDIE":4
}

//Creo tres objetos
var disco1 ={
    titulo: "Salvavidas",
    cantante: "La MODA",
    fecha: new Date(),
    estanteria: "estante1",
    tipoMusica:TIPO_MUSICA[1],
    prestado:false   
};
var disco2 ={
    titulo: "Invader Must Die",
    cantante: "The Prodigy",
    fecha: new Date(),
    estanteria: "estante2",
    tipoMusica:TIPO_MUSICA[3],
    prestado:false  
};
var disco3 ={
    titulo: "Llorona",
    cantante: "Evita",
    fecha: new Date(),
    estanteria: "estante3",
    tipoMusica:TIPO_MUSICA[4],
    prestado:true   
};

//Pruebo el enumerador
var dato=TIPO_MUSICA.POP;

//Guardo los (Discos) en la psudoclase
tienda1.Discos.push(disco1);
tienda1.Discos.push(disco2);
tienda1.Discos.push(disco3);

//var tituloDisco1=tienda1.Discos[0].titulo;
//
//Compruebo el metodo getNumeroDisco.
var numerosDiscosTienda=tienda1.getNumeroDiscos();
//Pruebo el metodo getNumeroDiscosDisponibles(
var numeroDiscosDisponibles=tienda1.getNumeroDiscosDisponibles();
//Pruebo la funcion addDisco
var discoAnadido1=tienda2.addDisco("miDisco","yo",1,"01/01/1982",2,false);
var discoAnadido2=tienda2.addDisco("OtroDisco","yo",2,"01/01/1982",2,false);
var discoAnadido3=tienda2.addDisco("OTRODISCO","yo",2,"01/01/1982",2,false);//Pruebo con otro disco que se llame igual

//Pruebo el metodo getTituloDisco
//var tituloDisco=tienda1.getTituloDisco(2);

//Pruebo el metodo getDisco
 //var discoCompleto=tienda1.getDisco(5);
 
 //Pruebo el metodo deleteDisco
 //var discoBorrado=tienda1.deleteDisco("Invader Must Die");
 
 //Preubo el metodo existeDisco
// var existeDisco=tienda1.existeDisco("invader must die");
 
 //Pruebo el metodo modificaDisco
// var discocambiado=tienda1.modificaDisco("Salvavidas","Yo",4,"12/12/1982",2,true);
 //var discoCompleto=tienda1.getDisco(0);
 

/* Pruebas de switch
for (var item in TIPO_MUSICA)
{  
    switch (TIPO_MUSICA[item]) {
        case "ROCK":
            alert(1);
            break;
        case "POP":
            alert(2);
            break;
        case "PUNK":
            alert(3);
            break;
        case "INDIE":
            alert(4);
            break;
            default:
                alert("ninguno");         
    } 
    
};
*/