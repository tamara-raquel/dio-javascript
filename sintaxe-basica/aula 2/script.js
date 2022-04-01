//tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string ou caractere
var nome = 'tamara'
console.log(typeof(nome));

//como declarar
var variavel;
console.log(typeof(variavel)); //null
variavel = 'casa';
console.log(typeof(variavel));

let variavel2 = 'ana';
console.log(typeof(variavel2));
variavel2 = 'paula'; //sobrescreve o valor dado inicial

const constante = 'javascript';
//retorna erro se tentar criar vazia/sem valor
//retorna erro se tentar atribuir outro valor após a declaração

//escopo
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();

//atribuição
var atribuicao = 'valor';

//comparação
var comparacao = '0' == 0; //true - valores iguais
console.log(comparacao);

//comparação idêntica
var comparacaoIdentica = '0' === 0; //false - valor igual mas tipos diferentes
console.log(comparacaoIdentica);

//operadores aritméticos

//adição
var adicao = 1 + 1; //2
console.log(adicao);

//subtração
var subtracao = 2 - 1; //1
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3; //6
console.log(multiplicacao);

//divisão real
var divisaoReal = 6 / 2; //3
console.log(divisaoReal);

//divisão inteira (ou resto da divisão)
var divisaoInteira = 5 % 2; //1
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 10; //1024
console.log(potenciacao);

//operadores relacionais

//maior que
var maiorQue = 3 > 2; //true
console.log(maiorQue);

//menor que
var menorQue = 5 < 2; //false
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2; //true

//menor ou igual a
var menorOuIgual = 5 <= 2; //false

//operadores lógicos

//e
var e = true && false; //false
console.log(e);

//ou
var ou = false || true; //true
console.log(ou);

//nao
var nao = !true; //false
console.log(nao);