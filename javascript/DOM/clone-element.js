  /**
   * Clona elementos del html
   * 
   * @param String idBtn Elemento que dispara la acción
   * @param String idElementclone Elemento que queremos clonar
   * @param String idAddClone Elemento al que añadimos el clone
   * 
   */
  function cloneElement(idBtn, idElementclone, idAddclone) {

      const btnClonar = document.getElementById(idBtn);
      const elementClone = document.getElementById(idElementclone);
      const elementAdd = document.getElementById(idAddclone);


      btnClonar.addEventListener('click', e => {
          clon = elementClone.cloneNode(true);

          elementAdd.appendChild(clon); /* Tenemos varias formas de añadir elementos */
      })
  }