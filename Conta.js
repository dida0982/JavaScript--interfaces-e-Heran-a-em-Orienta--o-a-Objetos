export class Conta{
    constructor(saldoInicial,cliente,agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente ;
        this._agencia = agencia;
        this.tipo = tipo;
    }
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor){

        let taxa = 1
       const valorSacado = taxa * valor;
       if(this.saldo >= valorSacado){
        this._saldo -= valorSacado;
        return valorSacado;
       }
       
    }

    depositar(valor){
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }   

}