//Pequeño algoritmo para obtener solo la resolución  introducida en la creación del evento (Evito mostrar todo el title)

var str = "solo muestro esto esto ya no quiero";
var index = str.match(/esto ya/).index;
var newStr = str.slice(0, index);
var size = str.length;

var newStrRever = str.slice(index, size);
console.log(newStr); // “solo muestro esto”
console.log(newStrRever); // “esto ya no quier”
