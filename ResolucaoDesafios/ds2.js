/*
 ### Inverter array

Implemente um método que inverta um array, sem utilizar métodos nativos (.map(), .forEach() ...).

// Entrada do método
run([1, 2, 3, 4])

// Resultado do método
[4, 3, 2, 1]

Resolução:
let arrayExemplo = [1, 2 ,3]
a = arrayExemplo[0]
b = arrayExemplo[1]
c = arrayExemplo[2]

Para inverter eu quero que 'c' receba valor de 'a' e o 'a' receba o valor de 'c',vdessa forma :
a = c
c = a

mas quando 'a' receber o valor de 'c' eu vou acabar perdendo a referencia do valor de 'a', assim crio uma terceira variavel
que armazene o valor de 'a' para realizar a troca

valorA = a
a = c
c = valorA


 */


function inverterArray(array){
    
    let recebeArray = new Array();
    recebeArray = array
    //contar quantidade de posições me um array
    let comprimento = recebeArray.length

    let ultimo_indice = comprimento -1 //ex: em um array de comprimento 4 o ultimo_indice seria igual a 3
    
    for(let i = 0; i < comprimento /2;i++){
        let a = array[i]
        array[i] = array[ultimo_indice - i] // 3-0
        array[ultimo_indice - i] = a
    }

   console.log(array)

}


inverterArray([1, 2, 3, "sla"])


