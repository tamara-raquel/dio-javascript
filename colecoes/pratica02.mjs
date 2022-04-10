/*
Atividade 2: Sets

Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos
*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

//Cria a funcao
function valoresUnicos(arr){
    //cria um set para registrar os valores únicos
    const mySet = new Set(arr);

    //usa a função Spread para retornar os elementos em um array
    return [...mySet];
}
console.log(valoresUnicos(meuArray)); //[30, 40, 5, 223, 2049, 3034]