// Melhore essa função usando código limpo

import { clienteExemplo } from "../utils/Cliente";
import { transacaoExemplo } from "../utils/Transacao";

function executarTransacao() {
  if (transacaoExemplo.eSegura && clienteExemplo.idade > 18) {
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
  }
}
