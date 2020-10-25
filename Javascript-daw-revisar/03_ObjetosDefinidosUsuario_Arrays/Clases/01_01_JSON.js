        /*
       Objetos tipo JSON . 
       Se definen como objetos literales
       */

var Beatles = {
    "Country": "England",
    "YearFormed": 1959,
    "Style": "Rock'n'Roll",
    "Members": ["Paul", "John", "George", "Ringo"],
    "Double": [{ "Style": "Rock'n'Roll", "Country": "England", }, "John", "George", "Ringo"]
}
//Acceso datos
console.log(Beatles.Members[0]);
console.log(Beatles.Double[0].Country);

//Serializar desserializar RECUERDA!!! No podemos serializar objetos con métodos
var serializado = JSON.stringify(Beatles);//Convertimos el objeto a string para poder guardar
console.log(serializado);

var desserializado = JSON.parse(serializado);//Convierte el string a objeto JSON
console.log(desserializado);

//EJEMPLOS

//guardamos los datos en localstorage previa serializacion (DEBERIAMOS CREAR LA CLASE JUGADOR PARA FUNCIONAR)
var jugador1 = new Jugador("Scorpion", 100, 1, "2:00", false);
var jugador2 = new Jugador("Sub-Zero", 100, 2, "1:30", true);
var jugador3 = new Jugador("Rayden", 100, 3, "2:00", false);
sessionStorage.setItem("jugador" + jugador1.id, JSON.stringify(jugador1));
sessionStorage.setItem("jugador" + jugador2.id, JSON.stringify(jugador2));
sessionStorage.setItem("jugador" + jugador3.id, JSON.stringify(jugador3));

//Recuperamos los datos y reconvertidos a JSON
for (var i = 0; i < sessionStorage.length; i++) {
    var jugadorJSON = sessionStorage.getItem("jugador" + i);
    var jugador = JSON.parse(jugadorJSON);
    alert(jugador.nombre);
}