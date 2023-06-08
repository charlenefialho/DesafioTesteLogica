/*
### Encontrar valores comuns de arrays

Implemente um método que encontre os valores comuns entre dois arrays.

Exemplo:

// Entrada do método
run([6, 8], [8, 9])

// Resultado do método
[8]

*/

/*
 Resolução:
 Será recebido dois array para comparação de valores e os valores em comum será adicionado em um novo array chamado
 "valorComum" será feito dois loops para comparar o todos os valores do array1 com todos os valores do array2 , fora do loop que percorre
 o array2 há uma variavel que nos sinalizará caso haja valor em comum , ela começa com false e caso o a condição que compara os valores seja verdadeira essa variavel muda para True e o loop irá parar c caso seja uma condiçao falsa o aço continua comparando os valores e a variavel igual se mantém com False ,fora desse loop há outra condição que verifica se a variavel igual(tipo boolean) é verdadeira caso seja o valor sera adicionado ao array de valor comum

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

  let array1 = [6, 8];
  let array2 = [8, 9];
  
  console.log(encontrarValoresComuns(array1, array2));
 
  