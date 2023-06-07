/*

### Converter array em objeto

Implemente um método que possa converter um array de arrays em um objeto com chave e valor

Exemplo:

// Entrada do método
run([["c",2],["d",4]])

// Resultado do método
{ c: 2, d: 4 }

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
