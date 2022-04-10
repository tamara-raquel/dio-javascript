/*
Atividade 2: This

Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor do this.
Crie seus próprios objetos.

function calculaIdade(anos){
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
*/

//Criando objetos
const pessoa01 = {
    nome: 'Victor',
    idade: 32
}
const pessoa02 = {
    nome: 'Sara',
    idade: 21
}
const animal = {
    nome: 'Amora',
    idade: 2
}

//Função dada
function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

//Usando o método Call
console.log(calculaIdade.call(pessoa01, 5)); //Daqui a 5 anos, Victor terá 37 anos de idade
console.log(calculaIdade.call(animal, 4)); //Daqui a 4 anos, Amora terá 6 anos de idade
console.log(calculaIdade.apply(pessoa02, [9])); //Daqui a 9 anos, Sara terá 30 anos de idade