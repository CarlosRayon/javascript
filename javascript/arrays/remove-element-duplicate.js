/**
 * Elimina elementos duplicados de un array
 *
 * @param {Array} arr
 * @returns {Array} Array si lo elementos duplicados
 */
// const removeDuplicates = arr => [...new Set(arr)]
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];


/**
 * Elimina elementos duplicados de un array
 *
 * @param {Array} arr Array de elementos
 */
const removeDuplicatesAlternative = arr => arr.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);

/**
 * Elimina elementos duplicados de un array (como la anterior version función flecha)
 * @param {Array} arr Array de elementos
 */
function removeDuplicatesAlternativeArrow(arr) {
    return arr.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
}
