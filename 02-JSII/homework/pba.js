function deleteAbc(cadena){
    // Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    // y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
    // Tu código:
    var array = cadena.split('');
    var arrayFiltrado = array.filter(letra => letra !== 'a' && letra !== 'b' && letra !== 'c');
    return arrayFiltrado.join('')
  }
 
  console.log(deleteAbc('adbecf'))