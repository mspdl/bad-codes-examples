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