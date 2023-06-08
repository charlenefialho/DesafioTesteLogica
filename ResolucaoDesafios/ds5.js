/**
### Filtrar array

Implemente um método que retorne um array filtrado, sem os itens passados por parâmetro.

Exemplo:
// Entrada do método
run([5, 4, 3, 2, 5], [5, 3])

// Resultado do método
[4, 2]
 */

/*
OBS: eu tive que instanciar um array dentro, pois meu vsCode estava bugado e não reconhecia o ".lenght"
 Resolução: 
 a função recebe de parametro um array e os itens que serão removidos do array (que tambem são um array), será retornado um novo array
 chamado de "arrayFiltrado" onde iremos colocar os itens filtrados 
 haverá for aninhado onde iremos percorer o array recebido, onde cada valor do array recebido será verificado com cada valor dos array dos itens 
 que queremos remover(para isso para cada valor do array iremos verificar percorrendo o array dos itens a ser removidos)
é definido uma variavel do tipo boolean com valor de false e caso a verificação do segundo laço seja verdadeiro ela irá receber true
e o laço será interrompido , e a verificação continuará para o proximo valor do array recebido
fora do segundo há uma condição em que caso seja verdadeira irá adicionar os itens filtrados no "arrayFiltrado"

*/

function filtrarArray(recebeArray, recebeItens){
    let indice = 0
    let arrayFiltrado = []

    let array = new Array()
    array = recebeArray

    let itens = new Array()
    itens = recebeItens 
    for(let i = 0; i< array.length; i++){

        let remover = false

        for(let n = 0; n < recebeItens.length; n++){
            if(array[i] === itens[n] ){
                remover = true
                break
            }
        }

        if (remover != true) {
            arrayFiltrado[indice] = array[i];
            indice +=1
          }
        
    }

    return arrayFiltrado

}

console.log(filtrarArray([5, 4, 3, 2, 5], [5, 3]))

