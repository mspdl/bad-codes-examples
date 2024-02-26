// Abstraia a condição usando código limpo

import { transacaoExemplo } from "../utils/Transacao";

if (
  transacaoExemplo.eSegura &&
  transacaoExemplo.valor > 0 &&
  transacaoExemplo.cliente &&
  transacaoExemplo.cliente.nome &&
  transacaoExemplo.cliente.saldo > 0 &&
  transacaoExemplo.cliente.saldo >= transacaoExemplo.valor
) {
  console.log("Executando a transação");
}
