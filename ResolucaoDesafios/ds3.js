/*
### Limpar array

Implemente um método que limpe os itens desnecessários de um array que foi passado para a função (false, undefined, strings vazias, zero, null)

Exemplo:
// Entrada do método
run([1, '', undefined, 0, 4, 'ola'])

// Resultado do método
[1, 4, 'ola']

 */

/*
OBS: eu tive que instanciar um array dentro, pois meu vsCode estava bugado e não reconhecia o ".lenght"
Explicação da resolução:
    A função recebe um array e já definido no enunciado o que de ser dercartado no array. e para isso criares um array chamdo "arrayLimpo" onde 
    armazenará o valores do array "Limpo".
    Para a filtragem utilizaremos uo laço for que passará por todo o array recebido no parametro verificando com um if se o valor verificado é diferente dos itens desnecessário, caso seja verdadeiro a condição esse valor irá ser inserido no arrayLimpo
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

