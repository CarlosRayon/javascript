/**
 *Only number in the input
 *
 * @param {*} e
 * @returns
 */
function onlyNumber(e) {
	var key = window.Event ? e.which : e.keyCode;
	return key >= 48 && key <= 57;
}

/* use in code */

//<input type="text" placeholder="Teléfono*" onKeyPress="return onlyNumber(event)" id="telefono" pattern="^[9|8|7|6]\d{8}$" maxlength="9" minlength="9" title="Por favor, valor numérico de 9 dígitos que empieza por alguno de estos valores 9 - 8 - 7 -6" >