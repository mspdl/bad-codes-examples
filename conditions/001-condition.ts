type Transacao = {
  eSegura: boolean;
  valor: number;
  cliente: {
    nome: string;
    saldo: number;
  };
};

const transacao = {
  eSegura: false,
  valor: 123.0,
  cliente: {
    nome: "Fulano",
    saldo: 0.0,
  },
};

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
