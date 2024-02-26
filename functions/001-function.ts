// Melhore essa função usando código limpo

import { cliente } from "../utils/Cliente";
import { transacao } from "../utils/Transacao";

function executarTransacao() {
  if (transacao.eSegura && cliente.idade > 18) {
    if (
      transacao.eSegura &&
      transacao.valor > 0 &&
      transacao.cliente &&
      transacao.cliente.nome &&
      transacao.cliente.saldo > 0 &&
      transacao.cliente.saldo >= transacao.valor
    ) {
      console.log("Executando a transação");
    }
  }
}
