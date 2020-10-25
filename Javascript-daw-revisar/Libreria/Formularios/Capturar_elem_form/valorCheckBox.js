/* 
 Funcion que captura el valor del checkbox si esta seleccionado
 @argument {String} id
 @return {String} valor de checkbox o none si no esta seleccionando
 */
function valorCheckBox(id)
{
    var checkBox = document.getElementById(id);
    if (checkBox.checked)
        return checkBox.value;
    else
        return "none"; //Si borro esto y no tengo seleccionado el checkBox me da undefined
    // 
    //RECUERDA!!! En los return puedo poner true||false si solo queremos validar que este o no seleccionado
}
/*Funcion que guarda el conjunto de datos seleccionados de checkbox con mismo nombre
 @@argument {String} name name del grupo de check box
 @return {Array} Array con los datos de los checkbox seleccionados
 */
function valorvariosCheckBox(name)
{
    var checkBox = document.getElementsByName(name);
    var datos = [];
    for (var i = 0; i < checkBox.length; i++) {
        console.log("dentro");
        if (checkBox[i].checked)
        {
            datos.push(checkBox[i].value);
        }
    }
    return datos;
}