<?php

// Establecemos las cabeceras HTTP para especificar que devolvemos contenido JSON
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); 

// Ofertas de la semana
$ofertas = array();
$ofertas[] = array("id"=>0, "titulo"=> "MSI GeForce GTX 1080Ti Founder Edition 11GB GDDR5X",          "img"=>"msi.jpg",        "pvp"=> 200,  "existencias"=> 8,    "colores"=>["negro","blanco"]);
$ofertas[] = array("id"=>1, "titulo"=>"Honor 6X Dorado Libre + Huawei AM08 Altavoz Bluetooth Blanco", "img"=>"altavoz.jpg",    "pvp"=> 125,  "existencias"=> 2,    "colores"=>["azul","blanco","negro","rojo"]);
$ofertas[] = array("id"=>2, "titulo"=> "Samsung 49K6300 49 LED Curvo",                                "img"=>"tv.jpg",         "pvp"=> 1300, "existencias"=> 1,    "colores"=>["negro","blanco","plata"]);
$ofertas[] = array("id"=>3, "titulo"=> "Samsung Galaxy J3 4G Blanco Libre",                           "img"=>"movil.jpg",      "pvp"=>120,  "existencias"=> 10,   "colores"=>["gris","blanco"]);
$ofertas[] = array("id"=>4, "titulo"=> "Oculus Rift Gafas de Realidad Virtual",                       "img"=>"oculus.jpg",     "pvp"=>687,  "existencias"=> 2,    "colores"=>["negro"]);
$ofertas[] = array("id"=>5, "titulo"=> "TP-Link TL-WR940N Wireless Router WiFi N 4 Puertos",          "img"=>"router.jpg",     "pvp"=>22,   "existencias"=> 25,   "colores"=>["rojo","blanco"]);
$ofertas[] = array("id"=>6, "titulo"=> "HP 250 G5 Z3A41ES Intel Core I3-5005U/8GB/256SSD/15.6",       "img"=>"hp.jpg",         "pvp"=>509,  "existencias"=> 5,    "colores"=>["negro","blanco","rojo","azul","verde","naranja"]);
$ofertas[] = array("id"=>7, "titulo"=> "GoPro Hero 5",                                                "img"=>"gopro.jpg",      "pvp"=>429,  "existencias"=> 1,    "colores"=>["negro","gris","blanco"]);

// Informacion detallada sobre las ofertas
$info = array();
$info[] = "Una potencia casi un 100% superior a la anterior generación. Esta ha sido la carta de presentación de la GTX 1080Ti en todos los test a los que ha sido sometida esta tarjeta gráfica.La nueva serie de tarjetas gráficas Nvidia ha sorprendido a todo el mundo en todos los aspectos imaginables al superar en potencia, reducir el consumo y mantener un precio que nadie esperaba, sobre todo sabiendo que dobla, y en algunos casos triplica, el desempeño gráfico de la 980 y mantiene un precio muy similar al de lanzamiento de éstas.";
$info[] = "5.5 pulgadas de potencia en Full HD son las señas de móvil Honor 6X para abrir la puerta de tu corazón.Un smartphone  con un acabado perfecto y diseño impecable. El metal le confiere un aire distinguido y robusto que contrasta con su ligereza y sensación en mano.";
$info[] = "Tu televisor Samsung Smart TV Full HD consigue crear una experiencia totalmente realista e inmersiva. Verás tus programas de televisión favoritos bajo una nueva perspectiva. Auto Depth Enhancer aplica distintos niveles de contraste a diferentes zonas de la pantalla consiguiendo una mayor sensación de profundidad. Siéntete el protagonista lo que ves con Samsung.";
$info[] = "Con el Samsung Galaxy J3, la compañía surcoreana continúa la línea basada en ofrecer móviles baratos con especificaciones interesantes dentro de los smartphone de su gama.En concreto, el Samsung J3 cuenta con una pantalla de 5 pulgadas AMOLED con resolución HD que cobra vida con un procesador Quad-Core a 1.5GHz y 1.5GB de RAM.En cuanto al apartado de almacenamiento,  este móvil Samsung dispone de 8GB de almacenamiento que puedes ampliar con una tarjeta MicroSD de hasta 128GB.";
$info[] = "Oculus Rift es sinónimo de realidad virtual, de innovación, de progreso e investigación. Estas gafas de realidad virtual han hecho tambalearse el mundo desde que se anunció su desarrollo y potencial. ¿Alguien no querría poder internarse en un mundo virtual con unas gafas VR con las que recrear todo tipo de fantasías sin limitaciones? ¿Se ha pensado en las posibles aplicaciones de la realidad virtual y la utilidad que pueden tener las gafas en dicho mundo? Seguro que sí, y por ello se está apostando muy fuerte por hacer que la realidad virtual sea cada vez más una ‘realidad real";
$info[] = "El Router N inalámbrico TL-WR940N es un dispositivo de conexión a la red por cable o de forma inalámbrica diseñado específicamente para satisfacer las necesidades de las pequeñas empresas,oficinas y oficinas en casa. Cumple el estándar IEEE 802.11n,con velocidades de transmisión inalámbrica de hasta 300M. Este router cuenta con 4 puertos a 10/100Mbps para alcanzar la transmisión de ofertas más efectiva. Utiliza tecnología MIMO,tiene tres antenas omnidireccionales fijas que proporcionan el mejor funcionamientoinalámbrico,así como las mejores tasas de transmisión,estabilidad y cobertura. La tecnología CCA™evita automáticamente conflictos de canal mediante su capacidad de selección de canales. También funciona correctamente con otros productosinalámbricos11g y 11n.";
$info[] = "Le presentamos el portátil Notebook 250 G5 W4N01EA de HP. Complete las tareas profesionales con la tecnología Intel® y las herramientas esenciales de colaboración. El chasis duradero ayuda a proteger el ordenador portátil contra los rigores del día.  Tenga por seguro que el HP 250 puede mantenerse al día con las asignaciones sobre la marcha. El chasis duradero protege el portátil, por lo que se ve tan profesional como usted. Complementos que perfeccionan la experiencia. HP, líder mundial en PCs, le ayuda a equiparse con un ordenador portátil totalmente funcional, listo para conectarse a todos sus periféricos y diseñado para adaptarse a las necesidades del negocio.";
$info[] = "La cámara GoPro Hero 5 Black Edition no es una cámara deportiva cualquiera, es la auténtica reina de la acción y muy pronto lo vas a comprobar. El modelo Hero 5 Black es el último modelo de la conocida compañía GoPro, que ha conseguido lanzar al mercado un dispositivo ligero, resistente y fácil de usar. Graba vídeos en 4K, dale órdenes a viva voz y hazlo todo con un solo botón. Su pantalla táctil te sorprenderá por su simplicidad y fluidez, también por su nitidez. La calidad de vídeo es endiabladamente alta gracias a su estabilizador, al avanzado sistema de audio que capta hasta la última brizna de hierba moverse bajo tus pies gracias al apoyo de un avanzado y complejo sistema de reducción de ruido indeseado y el sensor óptico con el que captar imágenes y vídeos 4K, y muchos más modos que harán que todas tus peripecias queden inmortalizadas.El GPS incorporado permite añadir la geolocalización a tus vídeos y fotos para que recuerdes el lugar en el que te encontrabas aquel día que descendías por los rápidos de un río o hacías escalada extrema por paredes verticales.";

// Obtener id producto para info



if(isset($_GET["id"])){
        $id=$_GET["id"];
        $productos=array("id"=>intval($id),"info"=>$info[$id]);
}
else
        $productos=$ofertas;

echo json_encode($productos);

?>