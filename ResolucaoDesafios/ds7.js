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

/*
Resolução:
Primeiro será comparado se os arrays possuem tamanhos diferente, caso seja verdade os array não são iguais e a função retorna falso
se forem de mesmo comprimento um laço for percorrerá os valores dos dois arrays percorrendo ambos pelo memso indice e verificando se há algum
valor diferente do outro retornando um False, caso contrario se não houver nenhum valor diferente a função retornará True

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
  
  
  
  
  

