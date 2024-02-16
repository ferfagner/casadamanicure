export interface Funcionarios{
    id: string;
    idLoja: string;
    nome: string;
    sobrenome: string;
    imgFunc: string;
    userName: string;
    meta: number
    perfil: number
    password: string;
    cpf:string
    email: string
  }


export interface ApiResponseFuncionarios {
  dados: DadosFuncionario[];
}

export interface DadosFuncionario {
  loginfuncionario?: string;
  quantidadevenda: number;
  vl_desconto: number;
  vl_total_nf: number;
}

export interface SetFuncProps{
  nome: string,
  email: string,
  cpf: string,
  meta: number,
  userName: string,
  perfil: number,
  password: string,
  idLoja: string,
  imgFunc: Blob | null; 
}