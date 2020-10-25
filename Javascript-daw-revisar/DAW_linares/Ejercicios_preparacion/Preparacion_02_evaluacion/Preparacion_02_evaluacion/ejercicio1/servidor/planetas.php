<?php

// Establecemos las cabeceras HTTP para especificar que devolvemos contenido JSON
header('Content-Type: application/json;');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); 

$nombres = array ("Sol", "Mercurio","Venus","Tierra","Marte","Jupiter","Saturno","Urano","Neptuno","Pluton");
$posOrbitas = array (0, 0, 10, 30, 40, 50, 60, 70, 80, 90);
$velocidades= array(0, 0.01, 0.015, 0.02, 0.022, 0.03, 0.037, 0.041, 0.048, 0.05);
$descripciones = array(	"Sol",
		"Mercurio: 172.404 km/h alrededor del Sol y 10.83 km/h de rotación en el ecuador",
		"Venus: 126.108 km/h alrededor del Sol y 6.52 km/h de rotación en el ecuador",
		"Tierra: 107.244 km/h alrededor del Sol y 1674 km/h de rotación en el ecuador",
		"Marte: 86.868 km/h alrededor del Sol y 866 km/h de rotación en el ecuador",
		"Júpiter: 47.016 km/h alrededor del Sol y 45.583 km/h de rotación en el ecuador",
		"Saturno: 34.705 km/h alrededor del Sol y 36.840 km/h de rotación en el ecuador",
		"Urano: 24.516 km/h alrededor del Sol y 14.794 km/h de rotación en el ecuador",
		"Neptuno: 19.548 km/h alrededor del Sol y 9.719 km/h de rotación en el ecuador",
		"Pluton: 19.548 km/h alrededor del Sol y 9.719 km/h de rotación en el ecuador"
			);

$planetas=array();

for($i=0;$i<count($nombres);$i++){
    array_push($planetas,array("id"=>$i,"nombre"=>$nombres[$i],"posOrbita"=>$posOrbitas[$i],"velocidad"=>$velocidades[$i],"descripcion"=>$descripciones[$i]));
}

echo json_encode($planetas);


?>