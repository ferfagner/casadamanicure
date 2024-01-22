export interface Lojas{
    celular: string;
    cep: string;
    cidade: string;
    email: string;
    endereco: string;
    id: string;
    numero: string;
    photourl: string;
    uf: string;
    inalguracao: string;
  }

  export interface LojasProps {
    dataLoja: Lojas[]; 
  }