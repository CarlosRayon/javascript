/* 

 */

function validarRadio(name)
{
    var radio = document.getElementsByName(name);
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            console.log(this.value);
        }
    }

}
