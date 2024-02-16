
import { collection, getDocs, setDoc, doc} from 'firebase/firestore';
import { Firestore,Autenticator,Storage  } from './firebase';
import { Funcionarios, SetFuncProps } from '../dto/funcDTO';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {createUserWithEmailAndPassword} from 'firebase/auth';



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

export async function setFunc(values: SetFuncProps) {
  try {
    const { user } = await createUserWithEmailAndPassword(Autenticator, values.email, values.password);
    

   
    const storageRef = ref(Storage, String(values.userName));
    

    let url = '';

    if (values.imgFunc) {
      const metadata = {
        contentType: values.imgFunc.type
      };

      const uploadTask = uploadBytesResumable(storageRef, values.imgFunc, metadata);
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
      console.error('Error')
    }
    
   

    const userDocRef = doc(Firestore, 'colaboradores', user.uid);

    await setDoc(userDocRef, {
      nome: values.nome,
      email: values.email,
      cpf: values.cpf,
      idLoja: values.idLoja,
      meta: values.meta,
      userName: values.userName,
      perfil: values.perfil,
      imgFunc: url,
    });

    return 'usuário cadastrado com sucesso';

  } catch (error) {
    console.error('Erro ao buscar slides:', error);
    throw error;
  }
}
