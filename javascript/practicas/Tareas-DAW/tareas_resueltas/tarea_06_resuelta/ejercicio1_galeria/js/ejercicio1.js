
const NUMERO_IMAGENES=7;

var galeria=new Galeria(NUMERO_IMAGENES);
window.addEventListener("load",cargaPagina);

function cargaPagina(){
    
    estableceFoto(galeria.posicionActual());
    document.getElementById("primera").addEventListener("click",clickPrimera);
    document.getElementById("ultima").addEventListener("click",clickUltima);
    document.getElementById("anterior").addEventListener("click",clickAnterior);
    document.getElementById("siguiente").addEventListener("click",clickSiguiente);
}

function clickPrimera(){
    habilitaBotones();
    estableceFoto(galeria.posicionPrimera());
    
    this.classList.add("deshabilitado");
    document.getElementById("anterior").classList.add("deshabilitado");
    
}

function clickUltima(){
    habilitaBotones();
    estableceFoto(galeria.posicionUltima());
    
    this.classList.add("deshabilitado");
    document.getElementById("siguiente").classList.add("deshabilitado");
}

function clickAnterior(){
    habilitaBotones();
    estableceFoto(galeria.posicionAnterior());  
    if(galeria.cursorEnPrimera()){
        document.getElementById("primera").classList.add("deshabilitado");
        document.getElementById("anterior").classList.add("deshabilitado");          
    }
}

function clickSiguiente(){
    habilitaBotones();
    estableceFoto(galeria.posicionSiguiente());
    if(galeria.cursorEnUltima()){
        document.getElementById("ultima").classList.add("deshabilitado");
        document.getElementById("siguiente").classList.add("deshabilitado");          
    }

}

function estableceFoto(foto){
    document.getElementById("imagen").style.backgroundImage="url(images/"+foto+")";
}

function habilitaBotones(){
     document.getElementById("primera").classList.remove("deshabilitado");
     document.getElementById("siguiente").classList.remove("deshabilitado");  
     document.getElementById("anterior").classList.remove("deshabilitado");
     document.getElementById("ultima").classList.remove("deshabilitado");
}