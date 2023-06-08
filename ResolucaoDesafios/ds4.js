/*

### Converter array em objeto

Implemente um método que possa converter um array de arrays em um objeto com chave e valor

Exemplo:

// Entrada do método
run([["c",2],["d",4]])

// Resultado do método
{ c: 2, d: 4 }

 /*
 OBS: eu tive que instanciar um array dentro, pois meu vsCode estava bugado e não reconhecia o ".lenght"
 Resolução:
 objeto é composto de chave: valor , que em array seria array de subArrays com 2 posições fixas 
 e chave fica sempre no indice 0 e o valor no indice 1 ,assim o que muda de indice é o indice do array externo
 assim basta criar um objeto e fazer o loop pelo indice do array externo e para acessar a chave do sub array basta indicar que está no indice [0] e o valor no indice[1].
 
 */

function converterArrayEmObjeto(recebeArray){
    let array = new Array()
    array = recebeArray
    let objeto = {}

    for(let i = 0; i < array.length;i++){
        objeto[array[i][0]] = array[i][1]
        
    }
    return objeto

}

console.log(converterArrayEmObjeto([["c",2],["d",4]]))
