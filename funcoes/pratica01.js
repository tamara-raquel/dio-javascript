/*
Atividade 1: Alunos aprovados

1. Crie uma função que receba o array alunos e um número que irá representar a média final.
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final.
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

//criar o array alunos
let alunos = [
    {nome: 'Maria', nota: 7,},
    {nome: 'Pedro', nota: 6.5,},
    {nome: 'Lidia', nota: 7.8,}
];


//cria a funcao
function turma(alunos, media){
    //cria o array auxiliar
    let arr_aux = [];
    
    //percorrendo o array
    for(let i=0; i < alunos.length; i++){
        
        //desestruturando o objeto
        const {nota, nome} = alunos[i];

        //busca alunos com notas maiores ou iguais a media
        //se sim, adiciona ao array auxiliar
        if(nota >= media){
            arr_aux.push(nome);
        }
    }
    return arr_aux;
}
console.log(turma(alunos, 7)); //["Maria", "Lidia"]