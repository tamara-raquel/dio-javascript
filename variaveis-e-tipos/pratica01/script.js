//Solução 1

function verificaPalindromo(string){
    //verifica se e string e não nula, vazia ou undefined:
    if(!string) return "string inexistente";

    //se a string existe:

    //1-separar todas as letras - método split()
    //2 - após o split, retorna um array com os caracteres, então posso usar o método reverse para inversão
    //3 - depois de inverter, junto tudo usando o método join(), usando aspas para já transformar em string
    //4 - verifica se essa string invertida é igual à string original
    string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));

//Solução 2

function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    //percorrendo a string:
    //percorro a string pela metade - verificando o primeiro e o último índice, o segundo e o penúltimo e assim por diante
    for(let i=0; i<string.length/2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2("ama"));