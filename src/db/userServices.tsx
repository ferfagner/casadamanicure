import { collection, getDoc, doc, DocumentData } from 'firebase/firestore';
import { Firestore } from './firebase';
import {Funcionarios} from '../dto/funcDTO'

export const mapUserDocToUserProps = (doc: DocumentData): Funcionarios => {
    const data = doc.data();
  
    // Certifique-se de ajustar esses mapeamentos conforme necessário
    return {
      id: data.id || '',
      idLoja: data.idLoja || '',
      nome: data.nome || '',
      sobrenome: data.sobrenome || '',
      imgFunc: data.imgFunc || '',
      userName: data.userName || '',
      meta: data.meta || '',
      perfil: data.perfil || '',
      password: data.password || '',
      cpf: data.cpf || '',
      email: data.email || '',
    };
  };
  
  export const getUserById = async (userId: string): Promise<Funcionarios | null> => {
    try {
      const usersCollectionRef = collection(Firestore, 'colaboradores');
    
   
    const userDocRef = doc(usersCollectionRef, userId);

    const userDocSnapshot = await getDoc(userDocRef);
  

    if (userDocSnapshot) {
      const userData = mapUserDocToUserProps(userDocSnapshot);
      return userData;
    } else {
      console.log('Nenhum documento encontrado na coleção com esse ID.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao pesquisar documento na coleção por ID externo:', error);
    throw error;
  }
};
  