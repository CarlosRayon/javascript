/* 
 Clase Dato que usare para crear objetos literales de tipo Dato
 */

function Dato(etiqueta, valor)
{
    var objetoDato = {
        etiqueta: etiqueta,
        valor: valor,
        getEtiqueta: function () {
            return this.etiqueta;
        },
        getValor: function () {
            return this.valor;
        }
    };
    return objetoDato;
}