function substituiPares(array){
    //verifica se o array existe:
    if(!array) return -1;
    //verifica se o array não tem o length (null/undefined/false):
    if(!array.length) return -1;
    
    for(let i=0; i<array.length; i++){
        if(array[i] === 0){
            console.log('Já é zero');
        }
        else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0`)
            array[i] = 0;
        }
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));