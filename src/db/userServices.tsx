import { collection, query, where, getDocs, DocumentData } from 'firebase/firestore';
import { Firestore } from './firebase';
import {UserDTO} from '../dto/userDTO'

export const mapUserDocToUserProps = (doc: DocumentData): UserDTO => {
    const data = doc.data();
  
    // Certifique-se de ajustar esses mapeamentos conforme necessário
    return {
      id: data.id || '',
      cpf: data.cpf || '',
      email: data.email || '',
      idAsaas: data.idAsaas || '',
      nome: data.nome || '',
    };
  };
  
  export const getUserById = async (userId: string): Promise<UserDTO | null> => {
    try {
      const usersCollectionRef = collection(Firestore, 'users');
      
      const q = query(usersCollectionRef, where('id', '==', userId));
  
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const userData = mapUserDocToUserProps(querySnapshot.docs[0]);
       
        return userData;
      } else {
        console.log('Nenhum usuário encontrado com esse ID.');
        return null;
      }
    } catch (error) {
      console.error('Erro ao pesquisar usuário por ID:', error);
      throw error;
    }
  };
  