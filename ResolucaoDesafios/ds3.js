/*
### Limpar array

Implemente um método que limpe os itens desnecessários de um array que foi passado para a função (false, undefined, strings vazias, zero, null)

Exemplo:
// Entrada do método
run([1, '', undefined, 0, 4, 'ola'])

// Resultado do método
[1, 4, 'ola']

 */

function limparArray(array){
    let recebeArray = new Array()
    recebeArray = array

    let indice = 0;
    let arrayLimpo = []

    for(let i = 0; i < recebeArray.length; i++){
        if (recebeArray[i] !== false && recebeArray[i] !== undefined && recebeArray[i] !== '' && recebeArray[i] !== 0 && recebeArray[i] !== null){
            arrayLimpo[indice] = recebeArray[i]
            indice += 1
        }
    }
    
    return arrayLimpo


     
    
}

console.log(limparArray([1, '', undefined, 0, 4, 'ola']))

