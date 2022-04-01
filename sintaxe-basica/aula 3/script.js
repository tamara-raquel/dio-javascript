//o que sao vetores ou arrays

//declaração
let array = ['string', 1, true];
console.log(array);

//pode guardar outros arrays
let array5 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array5);

//acessando um índice de um array
console.log(array5[0]); //string

//métodos

//forEach()
array5.forEach(function(item, index){console.log(item, index)});

//push()
array5.push('novo item');
console.log(array5);

//pop()
array5.pop();
console.log(array5);

//shift()
array5.shift();
console.log(array5);

//unshift()
array5.unshift('novo item inicial');
console.log(array5);

//indexOf()
console.log(array5.indexOf('true'));

//splice()
array5.splice(0, 3);
console.log(array5);

//slice()
let novoArray = array5.slice(0, 4);
console.log(novoArray);

//objetos
let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno); //acessando uma propriedade

//desestruturação do objeto
var string = object.string;
console.log(string);
var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);