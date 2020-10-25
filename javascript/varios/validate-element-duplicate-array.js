/**
 * Saber si tenemos elementos duplicados en un array
 * 
 * @param {Array} arrayData
 * @returns {Boolean} true duplicado false no
 */

function duplicateElement(arrayData) {
    return arrayData.length != [...new Set(arrayData)].length
}

/**
 * Saber si tenemos elementos duplicados en un array (version función flecha)
 * 
 * @param {Array} arrayData
 * @returns {Boolean} true duplicado false no
 */

const duplicateElementArrow = arrayData => arrayData.length != [...new Set(arrayData)].length;