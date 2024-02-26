// Melhore essa função usando código limpo

import { Cliente, clienteExemplo } from "../utils/Cliente";
import { Transacao, transacaoExemplo } from "../utils/Transacao";

function executarTransacao() {
  if (
    transacaoEPermitida(transacaoExemplo, clienteExemplo) &&
    transacaoEValida(transacaoExemplo)
  ) {
    console.log("Executando a transação");
  }
}

function transacaoEPermitida(transacao: Transacao, cliente: Cliente) {
  return transacao.eSegura && cliente.idade > 18;
}

function transacaoEValida(transacaoExemplo: Transacao) {
  return (
    transacaoExemplo.eSegura &&
    transacaoExemplo.valor > 0 &&
    transacaoExemplo.cliente &&
    transacaoExemplo.cliente.nome &&
    transacaoExemplo.cliente.saldo > 0 &&
    transacaoExemplo.cliente.saldo >= transacaoExemplo.valor
  );
}
