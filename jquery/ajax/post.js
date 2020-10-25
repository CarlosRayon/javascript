/* Request ajax done.fail.always */

$.ajax({
	type: 'POST',
	url: 'script',
	data: data,
	dataType: 'json',
})
	.done(function (result) {
		console.log(result);
	})
	.fail(function (xhr, status, error) {
		console.log(xhr + '\n' + status + '\n' + '\n' + error);
	})
	.always(function (xhr, status) {
		console.log('Estado Peticion: ' + status);
	});

/* Request ajax success */
$.ajax({
	type: 'POST',
	url: 'endpoint',
	data: data,
	success: function (respuesta) {
		console.log(respuesta);
	},
	error: function () {
		console.log('No se ha podido obtener la información');
	},
});



