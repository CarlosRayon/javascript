
    /* Quita todos los ceros del principio de una cadena si tiene (01)->(1)
 * @param  {string}
 * @return {double}
 */
function quitaCeros(cad){
  var enc = false;
  var i=0;
  while (i<cad.length && !enc) {
    if (cad.charAt(i)=='0'){
      i++;
    } else{
      enc = true;
    }
  }
  return (cad.substring(i,cad.length)*1);
};
