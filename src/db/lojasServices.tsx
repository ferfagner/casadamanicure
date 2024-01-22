
import { collection, getDocs } from 'firebase/firestore';
import { Firestore } from '../db/firebase';
import { Lojas } from '../dto/lojasDTO';


export async function getLojas(): Promise<Lojas[]> {
  try {
    const querySnapshot = await getDocs(collection(Firestore, 'lojas'));
    const dataLojas: Lojas[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      dataLojas.push(data as Lojas);
    });

    return dataLojas;
  } catch (error) {
    console.error('Erro ao buscar slides:', error);
    throw error;
  }
}
