//ESTRUTURAS DE DECISÃO

var jogador1=0;
var jogador2=0;
var placar;

/* __ IF __
if (jogador1>0){
    console.log("Jogador 1 marcou ponto");
}
*/

/* __ ELSE __ 
if (jogador1>0){
    console.log("Jogador 1 marcou ponto");
}
else {
    console.log("Ninguém marcou ponto");
}
*/

/* __ ELSE IF __ 
if (jogador1>0) {
    console.log("Jogador 1 marcou ponto");
}
else if (jogador2>0) {
    console.log("Jogador 2 marcou ponto");
}
else {
    console.log("Ninguém marcou ponto");
}
*/

/* __ NINHO DE IF __ 
if (jogador1=-1){
    if (jogador1>0){
        console.log("Jogador 1 marcou ponto");
    }
    else {
        console.log("Ninguém marcou ponto");
    }
}
else {
    console.log("Jogador inválido");
}
*/

/* __ IF TERNÁRIO __ 
// [condição] ? [instrução1] : [instrução2];
//ex1:
//jogador1>0 ? console.log("marcou ponto") : console.log("não marcou ponto");

//ex2:
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Jogadores inválidos");
if (jogador1>0 && jogador2 == 0){
    console.log("Jogador 1 marcou ponto");
    placar = jogador1 > jogador2;
}
else if (jogador2>0 && jogador1 == 0) {
    console.log("Jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
}
else {
    console.log("Ninguém marcou ponto");
}
*/

/* __ SWITCH/CASE __ 
switch (placar){
    case placar = jogador1>jogador2:
        console.log("Jogador 1 ganhou");
        break;
    case placar = jogador2>jogador1:
        console.log("Jogador 2 ganhou");
        break;
    default:
        console.log("Ninguém ganhou");
}
*/

//ESTRUTURAS DE REPETIÇÃO

var array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

/* __ FOR __ 
for(let indice=0; indice < array.length; indice++){
    console.log(indice);
}
*/

/* FOR/IN __ 
for(let i in array){
    console.log(i);
}
for(i in object){
    console.log(i);
}
*/

/* __ FOR/OF __ 
for (i of array){
    console.log(i);
}
*/

/* __ WHILE __ 
var a=0;

while(a<10){
    a++;
    console.log(a);
}
*/

/* __ DO/WHILE __ */
var a=0;
do {
    a++;
    console.log(a);
}
while (a<10)