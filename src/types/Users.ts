export interface Users {
  nome: string;
  email: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
  };
  telefone: string;
}
