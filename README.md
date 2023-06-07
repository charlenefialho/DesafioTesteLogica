# Desafio Teste de Lógica

## Pré requisito para testar o código
Ter git baixado(caso for clonar o repositório)
e ter o node.js instalado para executar no prompt os códigos javascript

## Para testar o código
Basta dar um git clone com a ulr desse repositorio no prompt de comando
```git
//exemplo:
 git clone <url>
```

abrir o diretório do projeto
e no terminal digitar: 
 ```node.js
  node ResolucaoDesafios/nomeArquivo.js
```


## Desafios
Desafios propostos  para avaliação de lógica  :
- Desafio 1
### Array de elementos por repetições
Implemente um método que possa criar um array baseado nos valores que foram passados para ele.
Exemplo:
```javascript
// Entrada do método
run(2, 'i')

// Resultado do método
['i', 'i']

```

- Desafio 2
### Inverter array
Implemente um método que inverta um array, sem utilizar métodos nativos (.map(), .forEach() ...).
Exemplo:
```javascript
// Entrada do método
run([1, 2, 3, 4])

// Resultado do método
[4, 3, 2, 1]

```
- Desafio 3

### Limpar array
Implemente um método que limpe os itens desnecessários de um array que foi passado para a função (false, undefined, strings vazias, zero, null)
Exemplo:
```javascript
// Entrada do método
run([1, '', undefined, 0, 4, 'ola'])

// Resultado do método
[1, 4, 'ola']

```

- Desafio 4
### Converter array em objeto
Implemente um método que possa converter um array de arrays em um objeto com chave e valor
Exemplo:
```javascript
// Entrada do método
run([["c",2],["d",4]])

// Resultado do método
{ c: 2, d: 4 }

```

- Desafio 5
    
 ### Filtrar array
    
 Implemente um método que retorne um array filtrado, sem os itens passados por parâmetro.
```javascript
// Entrada do método
run([5, 4, 3, 2, 5], [5, 3])

// Resultado do método
[4, 2]

```

- Desafio 6
### Novo array sem valores duplicados

Implemente um método que retorne um array, sem valores duplicados.
```javascript
// Entrada do método
run([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])

// Resultado do método
[1, 2, 3, 4, 5, 7]
```

- Desafio 7
### Igualar arrays

Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.

```javascript
// Entrada do método
run([1, 2, 3, 4],[1, 2, 3, 4])
run([1, 2, 3, 4],[1, 2, 3, 5])

// Resultado do método
true
false
```

- Desafio 8
    
### Remover aninhamentos de um array
    
Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Exemplo:

```javascript
// Entrada do método
run([1, 2, [3], [4, 5]])

// Resultado do método
[1, 2, 3, 4, 5]
```

- Desafio 9
    
### Dividir array
Implemente um método que divida um array por uma quantidade passada por parâmetro.
Exemplo:
```javascript
// Entrada do método
run([1, 2, 3, 4, 5], 2)

// Resultado do método
[[1, 2], [3, 4], [5]]

```

- Desafio 10
    
### Encontrar valores comuns de arrays
    
Implemente um método que encontre os valores comuns entre dois arrays.
Exemplo:

```javascript
// Entrada do método
run([6, 8], [8, 9])

// Resultado do método
[8]

```

- Desafio 11
    
 ### Encontrar a intersecção de múltiplos arrays
 Implemente um método que encontre a intersecção de múltiplos arrays (ou seja, os valores que aparecem em todos eles).
 Exemplo:
 ```javascript
// Entrada do método
run([[1, 2, 3], [2, 3, 4], [3, 4, 5]])

// Resultado do método
[3]

```
 
