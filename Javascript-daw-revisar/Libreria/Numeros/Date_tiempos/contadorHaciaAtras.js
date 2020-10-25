/*Contador de cuentas hacia atras*/
var contador=10;
	
function restar(){	
     contador=contador-1; 
     document.write(contador);	
     if(contador==0){
	
        acabarCuentaAtras();	
    }	
}	
function acabarCuentaAtras(){
	
    clearInterval(temporizador); // Paramos la ejecución del método, indicando la variable creada al final
	
    alert("Fin del tiempo, ha llegado a cero");
	
}	
	
var temporizador=setInterval(function(){restar()},1000); // 10000ms = 10s
