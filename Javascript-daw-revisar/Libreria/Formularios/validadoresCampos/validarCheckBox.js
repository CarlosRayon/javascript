/* 
 Para validar si un check box esta selecionado
@argument {String} id id del checbox 
@returns {Boolean} 
 */
function validarCheckBox(id)
{
    var checkBox = document.getElementById(id);
    if (checkBox.checked) {
        return true;
    } else {
        return false;
    }
}

