import { Transacao, transacaoExemplo } from "../utils/Transacao";

if (transacaoEValida(transacaoExemplo)) {
  console.log("Executando a transação");
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
