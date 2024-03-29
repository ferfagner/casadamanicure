import {ApiResponseFuncionarios, DadosFuncionario} from '../dto/funcDTO'
import {BASE_URL, EVENTOS, TABLE, REPORT} from './api.d'
import axios from 'axios';
import {ApiResponseDadosProps,ApiResponseDadosLoja, ApiResponseDadosLojaLuco } from '../dto/lojasDTO'

interface getDadosFuncProps{
  userName?: String,
  nomeLoja: String,
  firstDay?:String,
  LastDay?:String
}

interface getDadosFuncProps{
  userName?: String,
  nomeLoja: String,
  firstDay?:String,
  LastDay?:String
}

interface getDadosProps{
  nomeLoja?: String,
  firstDay?:String,
  lastDay?:String,
}



function getFirstAndLastDay() {
  const date = new Date();
  
  const currentDate = new Date().toISOString().slice(0, 10);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().slice(0, 10);
  return [firstDay, lastDay, currentDate];
}

const [primeiroDia, ultimoDia, currentDate] = getFirstAndLastDay();
  
  export async function getDadosFunc({ userName, nomeLoja, firstDay, LastDay }: getDadosFuncProps) {

    try {
      const response = await axios.post<ApiResponseFuncionarios>(
        `${BASE_URL}${EVENTOS}${REPORT}`,
        {
          databasecliente: "BancoDadosCasaVieiraPorto.fdb",
          comboempresas: `${nomeLoja}`,
          datainicial: `${firstDay ? firstDay : primeiroDia}`,
          datafinal: `${LastDay ? LastDay : ultimoDia}`,
          typerel: 2
        },
        {
          auth: {
            username: `${process.env.API_LOGIN}`,
            password: `${process.env.API_PASSWORD}`
          }
        }
      );
  
      const userData = response.data.dados.find((user: DadosFuncionario) => user.loginfuncionario === userName);
    
      if (userData) {
        return userData;
      } else {
        console.error(`Usuário ${userName} não encontrado na resposta da API.`);
        return null;
      }
  
    } catch (error) {
      console.error('Erro ao obter dados:', error);
      throw error; 
    }
  }

export async function getAllProducts() {

    try {
      const response = await axios.post(
        `${BASE_URL}${EVENTOS}${TABLE}`,
        {
          databasecliente: "BancoDadosCasaVieiraPorto.fdb",
          typetable: 4,
        },
        {
          auth: {
            username: `${process.env.API_LOGIN}`,
            password: `${process.env.API_PASSWORD}`
          }
        }
      );
  
      const productData = response.data.dados.produtos
      if (productData) {
        return productData;
      } else {
        console.error(`Nenhum produto encontrado na resposta da API.`);
        return null;
      }
  
    } catch (error) {
      console.error('Erro ao obter dados:', error);
      throw error; 
    }
  }

 export async function getDadosGeral({nomeLoja, firstDay, lastDay}:getDadosProps) {
  try {
  const response = await axios.post<ApiResponseFuncionarios>(
    `${BASE_URL}${EVENTOS}${REPORT}`,
    {
      databasecliente: "BancoDadosCasaVieiraPorto.fdb",
      comboempresas: `${nomeLoja ? nomeLoja : 'CENTRAL'}`,
      datainicial: `${firstDay? firstDay :currentDate}`,
      datafinal: `${lastDay? lastDay: currentDate}`,
      typerel: 2
    },
    {
      auth: {
        username: `${process.env.API_LOGIN}`,
        password: `${process.env.API_PASSWORD}`
      }
    }
  );
 
  if (response) {
    return response.data.dados;
  } else {
    console.error(`Dados não encontrado na resposta da API.`);
    return null;
  }
  
} catch (error) {
  console.error('Erro ao obter dados:', error);
  throw error; 
}
}

export async function getDadosGeralMes({nomeLoja, firstDay, lastDay}:getDadosProps) {
  
  try {
  const response = await axios.post<ApiResponseDadosProps>(
    `${BASE_URL}${EVENTOS}${REPORT}`,
    {
      databasecliente: "BancoDadosCasaVieiraPorto.fdb",
      comboempresas: `${nomeLoja ? nomeLoja : 'CENTRAL'}`,
      datainicial: `${firstDay? firstDay :currentDate}`,
      datafinal: `${lastDay? lastDay: currentDate}`,
      typerel: 3
    },
    {
      auth: {
        username: `${process.env.API_LOGIN}`,
        password: `${process.env.API_PASSWORD}`
      }
    }
  );
 
  if (response) {
    return response.data.dados;
  } else {
    console.error(`Dados não encontrado na resposta da API.`);
    return null;
  }
  
} catch (error) {
  console.error('Erro ao obter dados:', error);
  throw error; 
}
}

export async function getDadosLojaGeral({nomeLoja, firstDay, lastDay}:getDadosProps) {
 
  try {
  const response = await axios.post<ApiResponseDadosLoja>(
    `${BASE_URL}${EVENTOS}${REPORT}`,
    {
      databasecliente: "BancoDadosCasaVieiraPorto.fdb",
      comboempresas: `${nomeLoja ? nomeLoja : 'CENTRAL'}`,
      datainicial: `${firstDay? firstDay :currentDate}`,
      datafinal: `${lastDay? lastDay: currentDate}`,
      typerel: 5
    },
    {
      auth: {
        username: `${process.env.API_LOGIN}`,
        password: `${process.env.API_PASSWORD}`
      }
    }
  );
 
  if (response) {
    return response.data.dados;
  } else {
    console.error(`Dados não encontrado na resposta da API.`);
    return null;
  }
  
} catch (error) {
  console.error('Erro ao obter dados:', error);
  throw error; 
}
}

export async function getDadosLojaLucro({nomeLoja, firstDay, lastDay}:getDadosProps) {
  
  console.log(nomeLoja, firstDay, lastDay)
  try {
  const response = await axios.post<ApiResponseDadosLojaLuco>(
    `${BASE_URL}${EVENTOS}${REPORT}`,
    {
      databasecliente: "BancoDadosCasaVieiraPorto.fdb",
      comboempresas: `${nomeLoja ? nomeLoja : 'CENTRAL'}`,
      datainicial: `${firstDay? firstDay :currentDate}`,
      datafinal: `${lastDay? lastDay: currentDate}`,
      typerel: 8
    },
    {
      auth: {
        username: `${process.env.API_LOGIN}`,
        password: `${process.env.API_PASSWORD}`
      }
    }
  );
 
  if (response) {
    console.log(response.data.dados)
    return response.data.dados;
   
  } else {
    console.error(`Dados não encontrado na resposta da API.`);
    return null;
  }
  
} catch (error) {
  console.error('Erro ao obter dados:', error);
  throw error; 
}
}


 
  
  