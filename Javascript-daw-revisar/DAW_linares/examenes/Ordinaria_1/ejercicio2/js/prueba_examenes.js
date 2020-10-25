
var examen1=new Examen("examen1");
for (var i = 0; i < 10; i++) {
    var pregunta={idPregunta:i,estado:ESTADO_PREGUNTA.ACIERTO};
    examen1.insertaPregunta(pregunta);    
}

var examen2=new Examen("examen2");
for (var i = 0; i < 5; i++) {
    var pregunta={idPregunta:i,estado:ESTADO_PREGUNTA.ACIERTO};
    examen2.insertaPregunta(pregunta);    
}
for (var i = 5; i < 10; i++) {
    var pregunta={idPregunta:i,estado:ESTADO_PREGUNTA.SIN_RESPONDER};
    examen2.insertaPregunta(pregunta);    
}

var examen3=new Examen("examen3");
for (var i = 0; i < 5; i++) {
    var pregunta={idPregunta:i,estado:ESTADO_PREGUNTA.ACIERTO};
    examen3.insertaPregunta(pregunta);    
}
for (var i = 5; i < 10; i++) {
    var pregunta={idPregunta:i,estado:ESTADO_PREGUNTA.FALLO};
    examen3.insertaPregunta(pregunta);    
}

console.log("En el examen "+examen1.id+" se ha obtenido un [10]--> "+examen1.getNotaActual());
console.log("En el examen "+examen2.id+" se ha obtenido un [5]-->: "+examen2.getNotaActual());
console.log("En el examen "+examen3.id+" se ha obtenido un [3.33]-->: "+examen3.getNotaActual());



var pregunta1=examen2.getPreguntaByIndice(1);
console.log("Pregunta 1 [{1,3 (ACIERTO)}]-->"+pregunta1.idPregunta+" "+pregunta1.estado);

var pregunta2=examen3.getPreguntaById(5);
console.log("Pregunta 2 [{5,4 (FALLO)}]-->"+pregunta2.idPregunta+" "+pregunta2.estado);





var examenes=new Examenes();
examenes.insertaExamen(examen1);
examenes.insertaExamen(examen2);
examenes.insertaExamen(examen3);


for (var i = 0; i < examenes.getNumeroExamenes(); i++) {
    var examen=examenes.getExamenById("examen"+(i+1));
    console.log("El examen "+examen.id+" tiene [10]--> "+examen.getNumeroPreguntas()+" preguntas");
}

console.log("La nota media de los exámenes es [6.11]--> "+examenes.getNotaMedia());