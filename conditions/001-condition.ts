// Abstraia a condição usando código limpo

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
