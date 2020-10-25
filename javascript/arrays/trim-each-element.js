/* I leave each element of the array without spaces to compare correctly*/
arrayData = arrayData.map(string => string.trim());


/* The simple variant without dependencies: */
for (var i = 0; i < array.length; i++) {
  array[i] = array[i].trim()
}


/* ES6 variant: */
const newArray = oldArray.map(string => string.trim())

/* ES6 function variant: */
const trimArray = array => array.map(string => string.trim())
