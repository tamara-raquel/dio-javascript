//Callback

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1,num2){
    return num1+num2;
}

const sub = function(num1,num2){
    return num1-num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 3, 2);

console.log(resultSoma); //3
console.log(resultSub); //1

//Objeto "arguments"
function findMax(){
    let max = -Infinity;

    for(let i=0; i<arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}
//Passando vários argumentos:
findMax(1, 2, 3, 6, 90, 1) //90
//O objeto arguments é um array que contém todos os parâmetros passados quando a função foi invocada

function showArgs() {
    return arguments;
}
showArgs(1, 2, [2,3,4], "string");
//Arguments(4) [1, 2, Array(3), "string"]
//arguments pode ser útil pois é objeto iterável (tem length e índices)

//Object Destructuring
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

//Desestruturando o objeto entre chaves só com os elementos que me interessam:
function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user); //42
getFullName(user); //John Doe


//For in
function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}
const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);
//nome
//idade
//cidade

function forInExemplo2(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}
const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}
forInExemplo2(meuObjeto);
//João
//20
//Salvador

//For of
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}
const palavra = "abacaxi";
logLetras(palavra)
//a
//b
//a
//c
//a
//x
//i


function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}
const nums = [30, 20, 233, 2];

logLetras(nums)
//30
//20
//233
//2

//This
//No exemplo abaixo, this refere-se a pessoa

const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};
pessoa.fullName();
//André Soares
pessoa.getId();
//1
//fullName e getId são métodos - funções dentro de objetos

//This e método Call
const animal = {
    nome: 'Murphy'
};
function getSomething(){
    console.log(this.nome);
}
getSomething.call(animal);
//call determina que this se refira a animal

//exemplo 2 com método call
//passando parâmetros para a função
const myObj = {
    num1: 2,
    num2: 4,
};
function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj, 1, 5);
//12

//This com função Apply
const myObj = {
    num1: 2,
    num2: 4,
};
function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.apply(myObj, [1, 5]);
//12

//This e método Bind
//clona a estrutura da função onde é chamado
//aplica o valor do objeto passado como parâmetro
const retornaNomes = function(){
    return this.nome;
};
let bruno = retornaNomes.bind({nome: 'Bruno'});
bruno();    //como a variável bruno se torna clone da função retornaNomes, deve ser chamada como se fosse uma função
//Bruno
