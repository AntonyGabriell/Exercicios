/**************************************

* Obejtivo: Calculo de media para exercicio para calculo de media de uma faculdade
* Autor: Antony Gabriel
* Data Criaçao: 04/08/2022
* Ultima atualizacao: 04/08/2022
* Autor: 
* Finalidade: 
* Versão: 1.0

****************************************/


const media = function (valor1, valor2, valor3, valor4) {

    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4
    let resultado
    let contaMedia

    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('ERROR: As notas devem ser informadas para o calculo')
        
    } else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
        console.log('ERROR: As notas nao podem ser abaixo de 0 ou acima de 100')
        
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERROR: As notas devem ser numeros reais')
    }

    

}


const contaMedia = (valor1, valor2, valor3, valor4) => (parseFloat(valor1) + (parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))) / 4

const verifica = function(contaMedia){
    if (contaMedia >= 70.0) {
        return 'aprovado!'
    } else if (contaMedia < 50.0) {
        return 'reprovado!\n'
    } else if (contaMedia >= 50.0 && contaMedia <= 69.0) {
        return 'de exame!\n'

    }
}

module.exports = {
    media,
    contaMedia,
    verifica
}