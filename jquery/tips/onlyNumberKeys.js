//Evitamos introducir letras en campos numéricos
$(document).ready(function () {
	$('#user-cp').keypress(function (tecla) {
		if (tecla.charCode < 48 || tecla.charCode > 57) return false;
	});
	$('#user-telefono-direccion').keypress(function (tecla) {
		if (tecla.charCode < 48 || tecla.charCode > 57) return false;
	});
});
