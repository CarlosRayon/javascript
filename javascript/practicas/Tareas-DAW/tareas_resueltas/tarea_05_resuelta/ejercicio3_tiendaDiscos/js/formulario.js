
/* DDWEC05 - Solución Tarea. Ejercicio 3 - Javier González Pisano */

var tienda=new Tienda();

window.addEventListener("load",cargaPagina);

function cargaPagina(){
    document.getElementById("guardar").addEventListener("click",guardaDisco);
    document.getElementById("eliminar").addEventListener("click",eliminaDisco);
    document.getElementById("ver").addEventListener("click",verDisco);
    document.getElementById("modificar").addEventListener("click",modificaDisco);
   
}

/* Manejador de evento click sobre el botón de guardar */
function guardaDisco(){
    var correcto=true;
    
    document.getElementById("informacion").style.display="none";
    correcto=(validaObligatorios()
            &&validaFechaCorrecta()
            &&validaEstanteria()
            &&validaDiscoRepetido());
    
    if(correcto){
        var titulo=document.getElementById("titulo").value;
        var cantante=document.getElementById("cantante").value;
        var fecha=new Date(document.getElementById("fecha").value);
        var estanteria=parseInt(document.getElementById("estanteria").value);
        var tipo=getTipoMusica(document.getElementById("tipo").value);
        var prestado=false;
        if(document.getElementById("prestado_si").checked)
            prestado=true;
            
       
       tienda.addDisco(titulo,cantante,tipo,fecha,estanteria,prestado);
       document.getElementById("informacion").style.display="block";
       document.getElementById("informacion").innerHTML="El disco "+titulo+" se ha insertado correctamente"; 

       actualizaListado();
    }                
}

function actualizaListado(){
    document.getElementById("listado").style.display="block";
    document.getElementById("listado").innerHTML="Hay "+tienda.getNumeroDiscosDisponibles()+" discos disponibles";
    if(tienda.getNumeroDiscosDisponibles()>0){
         document.getElementById("listado").innerHTML+="<ul>";
         for (var i = 0; i < tienda.getNumeroDiscos(); i++) {
             if(tienda.getDisco(i).prestado===false)
               document.getElementById("listado").innerHTML+="<li>"+tienda.getDisco(i).titulo+"</li>"; 
         }
         document.getElementById("listado").innerHTML+="</ul>";
     }
}

function validaObligatorios(){
    return  validaObligatorio("titulo")&&validaObligatorio("cantante")&&validaObligatorio("fecha")&&validaObligatorio("estanteria")&&validaObligatorio("tipo");
}

function validaObligatorio(item){
   var correcto=true;
   if((document.getElementById(item).value.trim()==="")||
      ((item==="tipo")&&(document.getElementById(item).value==="none"))){
       correcto=false;
       document.getElementById("informacion").style.display="block";
       document.getElementById("informacion").innerHTML="El campo "+item+" es obligatorio";     
   }
   return correcto;  
}

function validaFechaCorrecta(){
    var correcto=true;
    var expresion= /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
    var partes = document.getElementById("fecha").value.split('-');
    var fecha = partes[2] + '/' + partes[1] + '/' + partes[0];
    if(!expresion.test(fecha)){
        correcto=false;
        document.getElementById("informacion").style.display="block";
        document.getElementById("informacion").innerHTML="El formato de la fecha no es correcto (DD/MM/AAAA)";        
    }
    return correcto;
    
}

function validaEstanteria(){
    var correcto=true;
    var valor=document.getElementById("estanteria").value;
    if(!(esEntero(valor))||(valor<1)||(valor>10)){
        correcto=false;
        document.getElementById("informacion").style.display="block";
        document.getElementById("informacion").innerHTML="La estantería debe ser un número entre 1 y 10";         
    }
    return correcto;
}

function validaDiscoRepetido(){
    var valida=true;
    var titulo=document.getElementById("titulo").value;
    if(tienda.existeDisco(titulo)){
        valida=false;
        document.getElementById("informacion").style.display="block";
        document.getElementById("informacion").innerHTML="El disco "+titulo+" ya existe en la tienda";
    }
    return valida;
}


function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}

function getTipoMusica(valor){
    switch(parseInt(valor)){
        case 1:
            return TIPO_MUSICA.ROCK;
            break;
        case 2:
            return TIPO_MUSICA.POP;
            break;       
        case 3:
            return TIPO_MUSICA.PUNK;
            break;       
        case 4:
            return TIPO_MUSICA.INDIE;
            break;             
    }
}

/* Manejador de evento click sobre el botón de eliminar */
function eliminaDisco(){
     var titulo=document.getElementById("titulo").value;
     if(titulo.trim()!==""){
     if(tienda.deleteDisco(titulo)){
        document.getElementById("informacion").style.display="block";
        document.getElementById("informacion").innerHTML="Se ha elimnado el disco "+titulo;     
        actualizaListado();
     }
     else{
        document.getElementById("informacion").style.display="block";
        document.getElementById("informacion").innerHTML="No existe ningún disco con el título "+titulo;          
     }
 }
}

/* Manejador de evento click sobre el botón de ver */
function verDisco(){
     var titulo=document.getElementById("titulo").value;
     if(titulo.trim()!==""){
         var disco=tienda.getDisco(tienda.getPosicion(titulo));
         if(disco!==null){
             document.getElementById("informacion").style.display="none";
             document.getElementById("cantante").value=disco.cantante;
             var fecha=disco.fecha.getFullYear()+"-";
             if((disco.fecha.getMonth()+1)<10)
                 fecha+="0"+(disco.fecha.getMonth()+1)+"-";
             else
                  fecha+=(disco.fecha.getMonth()+1)+"-";
 
              if((disco.fecha.getDate())<10)
                 fecha+="0"+(disco.fecha.getDate());
             else
                  fecha+=disco.fecha.getDate();
            
             document.getElementById("fecha").value=fecha;
             document.getElementById("estanteria").value=disco.estanteria;
             document.getElementById("tipo").value=disco.tipo;
             if(disco.prestado)
                  document.getElementById("prestado_si").checked=true;
              else
                  document.getElementById("prestado_no").checked=true;                
             
             
         }
         else{
            document.getElementById("informacion").style.display="block";
            document.getElementById("informacion").innerHTML="No existe ningún disco con el título "+titulo;             
         }
     }    
    
}

/* Manejador de evento click sobre el botón de modificar */
function modificaDisco(){
   var correcto=true;
   var titulo=document.getElementById("titulo").value;
    if(tienda.existeDisco(titulo)){
        document.getElementById("informacion").style.display="none";
        correcto=(validaObligatorios()
                &&validaFechaCorrecta()
                &&validaEstanteria());
        if(correcto){

            var cantante=document.getElementById("cantante").value;
            var fecha=new Date(document.getElementById("fecha").value);
            var estanteria=parseInt(document.getElementById("estanteria").value);
            var tipo=getTipoMusica(document.getElementById("tipo").value);
            var prestado=false;
            if(document.getElementById("prestado_si").checked)
                prestado=true;


           tienda.modificaDisco(titulo,cantante,tipo,fecha,estanteria,prestado);
           document.getElementById("informacion").style.display="block";
           document.getElementById("informacion").innerHTML="El disco "+titulo+" se ha modificado correctamente"; 

           actualizaListado();   
       }
    }
    else{
           document.getElementById("informacion").style.display="block";
           document.getElementById("informacion").innerHTML="No existe el disco con el título "+titulo;       
    }
}
