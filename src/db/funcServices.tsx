
import { collection, getDocs } from 'firebase/firestore';
import { Firestore } from './firebase';
import { Funcionarios } from '../dto/funcDTO';


export async function getFunc(): Promise<Funcionarios[]> {
  try {
    const querySnapshot = await getDocs(collection(Firestore, 'colaboradores'));
    const dataFunc: Funcionarios[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      dataFunc.push(data as Funcionarios);
    });

    return dataFunc;
  } catch (error) {
    console.error('Erro ao buscar slides:', error);
    throw error;
  }
}
