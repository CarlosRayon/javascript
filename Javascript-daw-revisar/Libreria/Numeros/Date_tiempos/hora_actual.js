/*****************************************************************
SCRIPT BASICO PARA MOSTRAR LA HORA ACTUAL
*****************************************************************/

<script type='text/javascript'>

/*Creamos un objeto del tipo Date*/
var hora=new Date();

/*De este objeto, mediante metodos del mismo, obtenemos los datos que deseamos.*/
document.write(hora.getHours()+':'+hora.getMinutes());
</script>

/*Para mas funciones de Date:
https://www.w3schools.com/jsref/jsref_obj_date.asp*/