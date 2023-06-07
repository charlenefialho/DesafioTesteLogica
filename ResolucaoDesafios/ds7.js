/*
 ### Igualar arrays

Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.

Exemplo:
// Entrada do método
run([1, 2, 3, 4],[1, 2, 3, 4])
run([1, 2, 3, 4],[1, 2, 3, 5])

// Resultado do método
true
false


*/

function compararArray(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  
  console.log(compararArray([1, 2, 3, 4], [1, 2, 3, 4]));  // true
  console.log(compararArray([1, 2, 3, 4], [1, 2, 3, 5]));  // false
  
  
  
  
  

