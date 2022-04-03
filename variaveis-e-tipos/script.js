//Var e Let
/*
var a = 1;
var b = 2;

if(a === 1){
    var a = 11; //escopo global
    let b = 22; //escopo de bloco

    console.log(a); //11
    console.log(b); //22
}

console.log(a); //11
console.log(b); //2
*/

//Hoisting
/*
ex1:
numberOne = 1;
console.log(numberOne+2);

var numberOne; //3

numberOne = 1;
console.log(numberOne+2);

let numberOne; //erro - não tem a funcionalidade de hoisting, precisa declarar antes

ex2:
var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João'){
    var firstName = 'Pedro';
    let lastName = 'Silva';
}

console.log(firstName,lastName); //Pedro Souza

ex3:
var firstName = 'João';
let lastName = 'Souza'; //escopo global

if(firstName === 'João'){
    let lastName = 'Rodrigues'; //escopo de bloco
    var firstName = 'Pedro'; //escopo global
    lastName = 'Silva'; //reatribuicao

    console.log(lastName); //Silva
}

console.log(firstName,lastName); //Pedro Souza
*/

//Constantes
/*
ex1:
const FIRST_NAME = 'Stephany';

FIRST_NAME = 'Julia'; //erro - constante não pode ter valor reatribuído

const FIRST_NAME = 'Maria'; //erro - constante não pode ser redeclarada

ex2:
FIRST_NAME = 'Stephany';

console.log(FIRST_NAME);

const FIRST_NAME; //erro - constante não aceita hoisting

ex3:
const FIRST_NAME;

FIRST_NAME = 'Julia'; //erro - constante não pode ser iniciada vazia
*/

//Estruturas de dados
let um = 'um';
typeof(um); //string
um = 1;
typeof(um); //number