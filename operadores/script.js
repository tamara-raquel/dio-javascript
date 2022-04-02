//Função para receber os números
function comparaNumeros(num1,num2){
    if(!num1 || !num2) return 'Defina dois números';
    
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criaSegundaFrase(num1,num2);

    //concatenação
    return `${primeiraFrase} ${segundaFrase}`
}    
function criaPrimeiraFrase(num1,num2){
    let saoIguais = '';
    if(num1 !== num2){
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}    
function criaSegundaFrase(num1,num2){
    const soma = num1+num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10; //true/false
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}    

comparaNumeros(1, 2);

//console.log(comparaNumeros(1, 2));
    
    //const saoIguais = num1 === num2; //retorna true/false
    //const soma = num1+num2; //retorna a soma

    //return saoIguais ? "São iguais" : "Não são iguais";
