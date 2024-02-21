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
    localizacao: string;
  }

  export interface LojasProps {
    dataLoja: Lojas[]; 
  }

  export interface ApiResponseDadosProps{
    sucess: String,
    dados: dadosProps[]
  }

  export interface dadosProps{
    mes: string;
    total: number
  }

  export interface ApiResponseDadosLoja{
    sucess: String,
    dados: dadosLojaProps[]
  }

  export interface dadosLojaProps{
    nome: string;
    cdterminal: number;
    valor: number
  }

  export interface ApiResponseDadosLojaLuco{
    sucess: String,
    dados: dadosLojaLuco[]
  }

  
  export interface dadosLojaLuco {
    quantidadevenda: number;
    identificacaointegracao: string;
    vendabruta: number;
    descontos: number;
    comissoes: number;
    customercadoriavendida: number;
    taxacartao: number;
    vendaliquida: number;
    lucrobrutosobrevenda: number;
    quantidadeconta: number;
    despesaperiodo: number;
    lucroliquido: number;
  }

  

  export interface SetLojaProps{
    celular: string;
    cep: string;
    cidade: string;
    email: string;
    endereco: string;
    id: string;
    numero: string;
    photourl: Blob | null;
    uf: string;
    inalguracao: string;
    localizacao: string;
  }
  