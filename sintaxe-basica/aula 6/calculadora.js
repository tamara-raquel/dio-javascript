function calculadora(){
    //Para exibir as opções para o usuário e capturar a opção escolhida pelo usuário
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**) ');

    //Verifica se a operação é válida
    if (!operacao || operacao>=7){
        alert('Erro - operação inválida!');
        calculadora();
    }//fim validacao de operacao
    else {
        //Criação da variáveis
        let n1 = Number(prompt('Insira o primeiro valor:')); //fazer a transformação para o tipo número, caso contrário será interpretado como string
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        //Verificação de as variáveis são válidas
        if (!n1 || !n2){
            alert('Erro - parâmetros inválidos!');
            calculadora();
        }//fim da verificacao das variaveis

        //Declaração das funções
        function soma(){
            resultado = n1+n2;
            alert(`${n1}+${n2}=${resultado}`) //entre CRASES, não aspas
            novaOperacao();
        }//fim function soma()
        function subtracao(){
            resultado = n1-n2;
            alert(`${n1}-${n2}=${resultado}`) 
            novaOperacao();
        }//fim function subtracao()
        function multiplicacao(){
            resultado = n1*n2;
            alert(`${n1}*${n2}=${resultado}`) 
            novaOperacao();
        }//fim function multiplicacao()
        function divisaoReal(){
            resultado = n1/n2;
            alert(`${n1}/${n2}=${resultado}`) 
            novaOperacao();
        }//fim function divisaoReal()
        function divisaoInteira(){
            resultado = n1%n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`) 
            novaOperacao();
        }//fim function diviaoInteira()
        function potenciacao(){
            resultado = n1**n2;
            alert(`${n1} elevado a ${n2} é igual a ${resultado}`) 
            novaOperacao();
        }//fim function potenciacao()

        //Funcao para retornar ao menu ou sair após cada operação
        function novaOperacao(){
            let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não');

            if (opcao == 1){
                calculadora();
            }
            else if (opcao == 2){
                alert('Até mais');
            }
            else {
                alert('Digite uma opção válida!');
                novaOperacao();
            }
        }//fim function novaOPeracao()
        
        //Verificador de operação
        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }//fim verificador de operacao

        //Para exibir a opção escolhida pelo usuário
        //console.log(operacao);

    }//fim else
}//fim function calculadora()
 
//chamada da função
calculadora();