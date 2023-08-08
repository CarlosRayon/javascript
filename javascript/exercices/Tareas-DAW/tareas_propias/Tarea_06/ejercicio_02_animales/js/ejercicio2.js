/* 
 Archivo que implementara la logica del programas
 */

window.addEventListener("load", inicializadora);

var div = new DivAnimales();//Creo un objeto de tipo div que me servira para crear los divs

function inicializadora()
{

    var divPrincipal = div.crearDivSimple("animales");//Creo un div simple con la clase divAnimales 
    document.body.appendChild(divPrincipal);//Añado el div al body
    
    //Creo una lista con todos los div creados con la funcion crear elementos y le añado eventos
    var listaDivAnimales = div.crearElementosDivs();
    
    //Añado la lista de divs al div principal
    for (var i = 0; i < listaDivAnimales.length; i++)
    {
        document.getElementById("animales").appendChild(listaDivAnimales[i]);
    };
    
    //Capturo todos los div que tengan clase animal
    var animales=document.getElementsByClassName("animal");
    
    //Añado evento a todos estos divs
    for (var i = 0; i < animales.length; i++) {
        animales[i].addEventListener("click",function(){reproducirSonidoAnimales(this.id);});//IMPORTANTE EL THIS     
    }
}

/*Funcion que reproduce el sonido del animal
 * @argument {String} Sera el id del div animal sobre el que queremos interactuar
 * */
function reproducirSonidoAnimales(idAnimal)
{
    var divAnimal = document.getElementById("audio"+idAnimal);

    divAnimal.play();

    movimiento(idAnimal);
}
;

/*Funcion que genera un movimiento aleatorio a los elementos
 *  -Añade una clase nueva a la clase ya exitente del elemento que sera la que genere el  movimiento
 *  @argument {String} Sera el id del div animal sobre el que queremos interactuar
 */

function movimiento(idAnimal)
{
    var arrayMovimiento = ["rota", "grande", "pequenio"];//Array con los posibles movimientos
    var divAnimal = document.getElementById(idAnimal);//Capturo el elemento que pulse por su id

    divAnimal.classList.add(arrayMovimiento[aleatorio(3)]);//Añado la una nueva clase a la ya existente que sera la que saque del array de forma aleatoria
    // divAnimal.className+=arrayMovimiento[aleatorio(3)]; Otra opcion de añadir la clase

    /*Llamo a la funcion que me quita la clases que da moviento a los div
     la llamo calculando que ya se ha completado el tiempo total del movimiento
     de esta manera evito que cada vez que pinche sobre el animal se cree clases sobre clases
     */
    setTimeout(borrarClasesMovimiento, 5000, idAnimal);

}
;


/*Funcion que genera aleatorio entre uno y el maximo(incluidos) podemos poner en vez uno un 0
 * @param {number} maximo
 * @return {number}
 */
function aleatorio(maximo)
{
    return parseInt(Math.random() * maximo + 0);
}
;

/*Funcion que borra una clase concreta
 * -Funcion que borrara la clase que da moviento a los objetos
 *  para evitar crear clase sobre clase
 * 
 */

function borrarClasesMovimiento(idAnimal)
{
    var divAnimal = document.getElementById(idAnimal);
    divAnimal.classList.remove("rota", "grande", "pequenio");
}
;