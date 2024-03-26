
import { collection, getDocs, setDoc, doc} from 'firebase/firestore';
import { Firestore,Autenticator,Storage  } from './firebase';
import { Funcionarios, SetFuncProps } from '../dto/funcDTO';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import { updatePassword} from 'firebase/auth'


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

export const setAvaliacao = async (usernameFunc: string, nota: number, valor: string, nome: string, data: string) => {
  
const id = uuidv4();
  try {

    await setDoc(doc(Firestore, 'avaliacao', id), {
      usernameFunc: usernameFunc,
      nota: nota,
      valor: valor,
      nomeCliente: nome,
      dataVenda: data
    });

    return { success: true };
 
} catch (error) {
  console.error('Erro ao pesquisar documento na coleção por ID externo:', error);
  throw error;
}
};

function alterarSenha( novaSenha: string) {
  var user = Autenticator.currentUser

  if(user){
    updatePassword(user, novaSenha)
    .then(function() {
      console.log("Senha alterada com sucesso!");
    })
    .catch(function(error) {
      console.error("Erro ao alterar senha:", error);
    });
}
  }
 
