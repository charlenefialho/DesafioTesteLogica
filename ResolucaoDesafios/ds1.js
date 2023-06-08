/*
### Array de elementos por repetições

Implemente um método que possa criar um array baseado nos valores que foram passados para ele.

// Entrada do método
run(2, 'i')

// Resultado do método
['i', 'i']

 */
/*
Explicação da Resolução:
A função recebe dois parametros(qtdPosicoes, elemento) qtdPosicoes irá determinar o comprimento do nosso array e elemento será o valor contido
em cada indice do array.
Inserimos o valor no array através indice e como temos a quantidade de  posições do array definido(passado no parametro) iremos usar o laço for para realizar o loop pelo indice e ir inserindo os valores em cada posição do array.

*/

function criarArray(qtdPosicoes,elemento){
    let array = []
    for(let i = 0; i< qtdPosicoes;i++){ 
        array[i] = elemento
    }
    console.log(array)
}

criarArray(2,'i')