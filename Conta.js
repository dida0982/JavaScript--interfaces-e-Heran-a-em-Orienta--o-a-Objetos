import { Cliente } from "./Cliente";

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
    this._tipo = tipo;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {

   let texa = 1
   if(this._tipo == "corrente"){
    taxa = 1.1;
   }
   if(this._tipo == "corrente"){
    taxa = 0.5;
   }
    const valorSacado = taxa * valor;
    if (this.saldo >= valor){
        this_.saldo -= valor;
        return valorSacado;
    }
  }

  depositar(valor) {
    if (valor <= 100) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
