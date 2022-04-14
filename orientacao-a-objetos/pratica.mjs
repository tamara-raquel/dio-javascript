/*
Atividade: Conta Bancária

Nesta atividade, o objetivo é testar os conceitos de Orientação a Objetos.

1. Crie a classe ContaBancaria, que posssui os parâmetros agencia, numero, tipo e saldo.
2. Dentro de ContaBancaria, construa o getter e setter de saldo.
3. Dentro de ContaBancaria, crie os métodos sacar e depositar.
4. Crie uma classe filha chamada ContaCorrente, que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito.
5. Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito.
6. Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão.
7. Crie uma classe filha chamada ContaPoupanca, que herda todos os parâmetros de ContaBancaria.
8. Crie uma classe filha chamada ContaUniversitaria, que herda todos os parâmetros de ContaBancaria.
9. Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

//Cria classe ContaBancaria
class ContaBancaria{
    //construtor
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //sempre que tenho um getter/setter acrescentar um underline antes
    }

    //construa o getter e o setter de saldo
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    //cria os métodos sacar e depositar
    sacar(valor){
        //verificar antes se a conta tem saldo para o valor solicitado
        if(valor > this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

//Cria uma classe-filha ContaCorrente
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta corrente';
        this._cartaoCredito = cartaoCredito;
    }

    //cria o getter e setter do cartaoCredito
    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

//Cria uma classe-filha ContaPoupanca
class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta poupanca';
    }
}

//Cria uma classe-filha ContaUniversitaria
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta universitaria';
    }

    //sobrescrever o método sacar
    sacar(valor){
        if(valor>500){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;
    }
}

const minhaConta = new ContaPoupanca(1, 234);

console.log(minhaConta.saldo); //0
console.log(minhaConta.agencia); //234
console.log(minhaConta.numero); //1
console.log(minhaConta.tipo); //conta poupanca

minhaConta.depositar(2000);
minhaConta.sacar(300);
console.log(minhaConta.saldo); //1700