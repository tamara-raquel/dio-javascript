/*
Atividade: Validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho
corresponda ao número enviado como parâmetro na função. Caso contrário, um
erro será lançado.

1. Crie uma função que recebe um array e um número.
2. Realize as seguintes validações:
    - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    - Se o array não for do tipo 'object', lance um erro do tipo TypeError
    - Se o número não for do tipo 'number', lance um erro do tipo TypeError
    - Se o tamanho do array for diferente do número enviado como parâmetro, lance
    um erro do tipo RangeError
3. Utilize a declaração try...catch
4. Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

//Crie uma função que recebe um array e um número
function validaArray(arr, num){

    //Utilize a declaração try...catch
    try{
        //Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        //Se o array não for do tipo 'object', lance um erro do tipo TypeError
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        //Se o número não for do tipo 'number', lance um erro do tipo TypeError
        if(typeof num !== 'number') throw new TypeError("Número precisa ser do tipo number");

        //Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
        if(arr.length !== num) throw new RangeError("O tamanho do array é inválido")

        //Se o array estiver correto
        return arr;
    }
    catch(e){
        //Filtrar os erros pelo tipo de erro
        //Chamar instruções diferentes dependendo do tipo do erro

        if(e instanceof ReferenceError){
            console.log("Erro do tipo ReferenceError!")
            throw e;
        }
        else if(e instanceof TypeError){
            console.log("Erro do tipo TypeError!")
            console.log(e.message)
        }
        else if(e instanceof RangeError){
            console.log("Erro do tipo RangeError!")
            console.log(e.name)
            console.log(e.message)
            console.log(e.stack)
        }
        else{
            console.log("Tipo de erro não esperado: " +e);
        }
    }
}
const teste = [23, 45, 56, 78];
console.log(validaArray());
console.log(validaArray(3, 2));
console.log(validaArray(teste, 'a'));
console.log(validaArray(teste, 3));
console.log(validaArray(teste, 4));