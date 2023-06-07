/**
### Filtrar array

Implemente um método que retorne um array filtrado, sem os itens passados por parâmetro.

Exemplo:
// Entrada do método
run([5, 4, 3, 2, 5], [5, 3])

// Resultado do método
[4, 2]
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

