 /*********** EXPLICACION BURBUJEO (TERCER PARAMETRO DE ADDEVENTLISTENER************
  * Modelo W3C:
En este modelo se integran los dos modelos anteriores. 
Simplemente se realiza la fase de captura de eventos primero y, cuando termina,se realiza la fase de burbujeo.
 En este modelo cuando registramos un evento con addEventListener(evento, funcion, true|false) tenemos la opción
 de indicar cuándo queremos que se dispare el evento:
en la fase de captura ( , , true)
en la fase de burbujeo ( , , false)
También disponemos de un nuevo método para cancelar eventos con preventDefault(), y de un método para detener la propagación de eventos en la fase de burbujeo, con stopPropagation().

  
 *captura y burbujeo
 Captura---true: El flujo de eventos es como el representado, y la fase de captura ocurre al lanzarse el evento.
 El orden de propagación para el ejemplo sería, por tanto, el indicado, body-div-button
 
 Burbujeo----false: Permite saltar la fase de captura, y la propagación seguiría sólo la burbuja. 
 Así, el orden sería button-div-body
 
 */


