/*
### Encontrar valores comuns de arrays

Implemente um método que encontre os valores comuns entre dois arrays.

Exemplo:

// Entrada do método
run([6, 8], [8, 9])

// Resultado do método
[8]

*/


function encontrarValoresComuns(array1, array2) {
    let valorComum = [];
    let indice = 0
  
    for (let i = 0; i < array1.length; i++) {
      let igual = false;
  
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          igual = true;
          break;
        }
      }
  
      if (igual) {
        valorComum[indice] = array1[i];
        indice +=1
      }
    }
  
    return valorComum;
  }
  
  // Exemplo de uso:
  const array1 = [6, 8];
  const array2 = [8, 9];
  
  console.log(encontrarValoresComuns(array1, array2));
 
  