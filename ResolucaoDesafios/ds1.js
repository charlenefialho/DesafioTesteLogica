/*
### Array de elementos por repetições

Implemente um método que possa criar um array baseado nos valores que foram passados para ele.

// Entrada do método
run(2, 'i')

// Resultado do método
['i', 'i']

 */

function criarArray(qtdPosicoes,elemento){
    let array = []
    for(let i = 0; i< qtdPosicoes;i++){
        array[i] = elemento
    }
    console.log(array)
}

criarArray(5,'i')