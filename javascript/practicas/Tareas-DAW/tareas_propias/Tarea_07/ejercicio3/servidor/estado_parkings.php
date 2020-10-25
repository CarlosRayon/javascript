<?php

	// Para que el navegador no haga cache (fecha de expiración menor a la actual)
	header('Content-Type: application/json');
        header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$infoParkings = array(
  array(120, 300,"Valdecilla Norte"),
  array(150, 380,"Valdecilla Sur"),
  array(250, 260,"Mercado de Méjico"),
  array(380, 200,"Numancia"),
  array(470, 180,"Jesús de Monasterio"),
  array(625, 210,"Ferry"),
  array(875, 70,"Tetuán"));

$retorno=array("error"=>true);

if (isset($_GET['id'])) {
        $retorno=array("id"=>$_GET['id'],"coordenadas"=>array($infoParkings[$_GET['id']][0],$infoParkings[$_GET['id']][1]),"porcentaje"=>rand(0, 100),"nombre"=>$infoParkings[$_GET['id']][2]);
}else {
	$retorno = array();
	$n= count($infoParkings);
	for($i=0; $i<$n; $i++) {
	  $numeroAleatorio = rand(0, 100);
	  $retorno[] = array('id' => $i,
                              'porcentaje' => $numeroAleatorio,
			      'coordenadas' => $infoParkings[$i],
			      'nombre' => $infoParkings[$i][2]);
	}
}

echo json_encode($retorno);
?>