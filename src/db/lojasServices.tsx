import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { Firestore, Storage } from './firebase';
import { SetLojaProps, Lojas } from '../dto/lojasDTO';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
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
    console.error('Erro ao buscar lojas:', error);
    throw error;
  }
}

export async function setLoja(values: SetLojaProps) {
  const id = uuidv4();

  try {
    const storageRef = ref(Storage, id);

    let url = '';

    if (values.photourl) {
      const metadata = {
        contentType: values.photourl.type,
      };

      const uploadTask = uploadBytesResumable(storageRef, values.photourl, metadata);
      await new Promise<void>((resolve, reject) => {
        uploadTask.on('state_changed', null, reject, () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              url = downloadURL;
              resolve();
            })
            .catch(reject);
        });
      });
    } else {
      throw new Error('Nenhuma imagem selecionada');
    }

    await setDoc(doc(Firestore, 'lojas', id), {
      celular: values.celular,
      cep: values.cep,
      cidade: values.cidade,
      email: values.email,
      endereco: values.endereco,
      id: values.id, 
      inalguracao: values.inalguracao,
      photourl: url, 
      localizacao: values.localizacao, 
      numero: values.numero,
      uf: values.uf,
    });

    return { success: true };
  } catch (error) {
    console.error('Erro ao cadastrar loja', error);
    return { success: false, error: 'error' };
  }
}
