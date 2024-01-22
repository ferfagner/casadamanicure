
import { collection, getDocs } from 'firebase/firestore';
import { Firestore } from '../db/firebase';
import { Photos } from '../dto/slidesDTO';


export async function getSlides(): Promise<Photos[]> {
  try {
    const querySnapshot = await getDocs(collection(Firestore, 'slides'));
    const slides: Photos[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      slides.push(data as Photos);
    });

    return slides;
  } catch (error) {
    console.error('Erro ao buscar slides:', error);
    throw error;
  }
}
