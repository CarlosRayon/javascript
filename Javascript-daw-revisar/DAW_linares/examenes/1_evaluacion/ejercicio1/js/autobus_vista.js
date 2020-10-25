
/* Manejadores de eventos y funciones de acceso al DOM para la página billetes.html */



window.onload = iniciar; 

function iniciar()
{
    document.getElementById("comprar").addEventListener('click',validarMatricula);
}
  
function validarMatricula()
{
    var matricula=document.getElementById("matricula");
    var pattern=new  RegExp("[0-9]{4}[a-zA-Z]{3}");
    if(!pattern.test(matricula))
    {
      matricula.value="Formato matricula incorrecto";     

        return false;
    }
    document.write("bien");
    return true;
};

function validarOrigen()
{
    var origen = document.getElementById("origen").value;
    
    if(origen=="none")
    {           
        document.getElementById("plazas").innerHTML="Debe selecionar un origen";
        return false;       
    }
    return true;
};

function validarDestino()
{
    var destino=document.getElementById("destino").value;
    if(destino=="none")
    {
        document.getElementById("plazas").innerHTML="Debe selecionar un destino";
        return false;
    }
    
    return true;
};

function validarFecha()
{
     var correcto=true;
    var expresion= /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
    var partes = document.getElementById("fecha").value.split('-');
    var fecha = partes[2] + '/' + partes[1] + '/' + partes[0];
    if(!expresion.test(fecha)){
        document.getElementById("plazas").innerHTML="Debe selecionar una fecha";
        return false;      
    }
    return true;
}

function validarFilas()
{
      var fila=document.getElementById("fila");
      var valorFila=fila.value;
    if(!(esEntero(valorFila))||(valorFila<1)||(valorFila>14)){
        return false;
       fila.value="Numero fila incorrecto";         
    }
    return true;
}
function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}

function validarPrecio()
{
    var precioBase=document.getElementById("precio-base");
    var valor=precioBase.value;
    if(!esEntero(valor))
    {
        precioBase.value="Introducir un valor numerico"       
        return false;
    }
    return true;
}

function validar()
{
    if(validarMatricula()&&validarOrigen()&&validarDestino()&&validarFecha()&&validarFilas()&&validarPrecio())
    {
        
        var matricula=document.getElementById("matricula").value;
        var origen=document.getElementById("origen").value;
        var destino=document.getElementById("destino").value;
        var fecha=new Date(document.getElementById("fecha").value);
        var filas=document.getElementById("filas").value;
        var precio=document.getElementById("precio-base").value;
          
        var autobus= new Autobus(matricula,origen,destino,fecha,filas,precio)
        
            
        
        
    }
}