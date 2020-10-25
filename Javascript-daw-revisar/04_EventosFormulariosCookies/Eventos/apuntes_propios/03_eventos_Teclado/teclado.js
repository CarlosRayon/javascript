window.addEventListener("load", cargarPagina);

/* RECUERDAD !!!!
 Distinguir entre teclas y caracter
 No todas las teclas tiene representacion en caracter (F1 ,F2, control, shiff etc)
 Algunos caracteres requieren combinacion de teclas
 
 Evento utiles(?)
 e.key  //Tecla pulsada
 e.code //Caracter pulsado
 */
function cargarPagina()
{  //Se desencadenan al pulsar teclas
    document.body.addEventListener("keydown", keydownBody); //Al pulsar si dejo pulsado repite funcion

    document.body.addEventListener("keyup", keyupBody);//Solo salta evento al soltar la tecla

    //Se desencadena con alguna carecter
    document.body.addEventListener("keypress", keypressBody);//Se asocia a pulsacion alguna caracter

}


function keydownBody(evento) {
    e = evento || window.event;//evento multinavegador
    console.log("keydown");

}
function keyupBody(evento) {
    e = evento || window.event;//evento multinavegador
    console.log("keyup");
    //(?)
    console.log("este es el caracter " + e.code);//Pulsar 4 en teclado y en numerico para ver bien la diferencia
    console.log("esta es la tecla " + e.key)

}
function keypressBody(evento) {
    e = evento || window.event;//evento multinavegador
    //Si pulso por ejemplo alt no saltara. Si pulso alt y e por ejemplo (caracter euro) entonces si
    console.log("keypress");

    console.log("este es el caracter (KEYPRESS) " + e.code);//Pulsar 4 en teclado y en numerico para ver bien la diferencia
    console.log("esta es la tecla (KEYPRESS) " + e.key)

//Para saber si una tecla especial ya estaba pulsada
    if (e.altKey) {
        console.log("El alt estaba pulsado ")
    }
    if (e.ctrlKey) {
        console.log("El control estaba pulsado ")
    }
    if (e.altKey) {
        console.log("El alt estaba pulsado ")
    }
    
}
