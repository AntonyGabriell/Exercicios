/**************************************

* Obejtivo: Criar sistema de tabuada dinamico
* Autor: Antony Gabriel
* Data Criaçao: 011/08/2022
* Ultima atualizacao: 
* Autor: 
* Finalidade: 
* Versão: 1.0

****************************************/

console.log('---TABUADA DINAMICA---')

const {calcTabuada, calcTab} = require('')

//Import da biblioteca readline (perminete interagir com o usuario)
var readline = require('readline');

//Instancia o objeto para criar a interacao com o usuario
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite um numero para iniciar a tabuada: ', function(numero1){

    let tabuada1 = numero1

    entradaDados.question('Digite um numero para finalizar a tabuada: ', function(numero2){

        let tabuada2 = numero2

        entradaDados.question('Digite um numero para iniciar o contador: ', function(numero3){

            let tabuada3 = numero3

            calcu
            })
        })
    })
