
/* DDWEC05 - Solución Tarea. Ejercicio 3- Javier González Pisano */

/******** PRUEBA DE CLASE Tienda  ************/

var tienda=new Tienda();
tienda.addDisco("Thriller","Michael Jackson",TIPO_MUSICA.POP,new Date("01-01-1982"),1,false);
tienda.addDisco("Back in Black","AC/DC",TIPO_MUSICA.ROCK,new Date("01-01-1982"),2,true);
tienda.addDisco("Appetite for destruction","Guns n Roses",TIPO_MUSICA.ROCK,new Date("01-01-1987"),1,false);
tienda.addDisco("Space Oddity","David Bowie",TIPO_MUSICA.PUNK,new Date(),1,true);


console.log("Numero de discos: "+ tienda.getNumeroDiscos());
console.log("Numero de discos disponibles: "+ tienda.getNumeroDiscosDisponibles());

console.warn("Títulos de los discos: ");
for (var i = 0; i < tienda.getNumeroDiscos(); i++) {
    console.log(tienda.getTituloDisco(i));
}

console.warn("Detalle de los discos: ");
for (var i = 0; i < tienda.getNumeroDiscos(); i++) {
    var disco=tienda.getDisco(i);
    var salida="";
    salida += "Titulo: "+disco.titulo+"\n";
    salida += "Cantante: "+disco.cantante+"\n";
    salida +=" Fecha: "+disco.fecha+"\n";
    salida +=" Tipo: "+disco.tipo+"\n";
    salida +=" Estanteria: "+disco.estanteria+"\n";   
    if(disco.prestado)
        salida+=" Prestado";
    console.log(salida);
}

console.warn("Modificamos disco: ");
tienda.modificaDisco("Space Oddity","D. Bowie",TIPO_MUSICA.ROCK);
var disco=tienda.getDisco(tienda.getPosicion("Space Oddity"));
var salida="";
salida+="Titulo: "+disco.titulo+"\n";
salida+=" Cantante: "+disco.cantante+"\n";
salida+=" Fecha: "+disco.fecha+"\n";
salida+=" Tipo: "+disco.tipo+"\n";
salida+=" Estanteria: "+disco.estanteria+"\n";  if(disco.prestado)
    salida+=" Prestado";
 console.log(salida);

console.warn("Borramos disco");
tienda.deleteDisco("BACK IN BLACK");
console.warn("Títulos de los discos: ");
for (var i = 0; i < tienda.getNumeroDiscos(); i++) {
    console.log(tienda.getTituloDisco(i));
}
