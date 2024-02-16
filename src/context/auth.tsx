// AuthContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';
import {Autenticator} from '../db/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import {useEffect} from 'react'
import{Funcionarios} from '../dto/funcDTO'
import {getUserById} from '../db/userServices'

interface LogInCredential{
    email: string;
    password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  logIn: (credential: LogInCredential) => Promise<void>
  logOut: () => void;
  user: Funcionarios;
}




const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({children}: AuthProviderProps){
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<Funcionarios>({} as Funcionarios)

  async function logIn(credential: LogInCredential) {
    try {
      const { user } = await signInWithEmailAndPassword(Autenticator, credential.email, credential.password);
      console.log(user.uid)
      const userData = await getUserById(user.uid);
  
      if (userData) {
        setData(userData);
      }
  
      setAuthenticated(true);
      localStorage.setItem('authState', JSON.stringify({ isAuthenticated: true, data: userData }));
  
    } catch (error:any) {
  
      if (error.code === 'auth/invalid-login-credentials') {
        throw new Error('E-mail ou senha incorretos!');
      } else {
        throw new Error('Erro ao fazer login. Tente novamente.');
      }
    }
  }
  

  function logOut () {
    setAuthenticated(false);
    localStorage.setItem('authState', JSON.stringify({ isAuthenticated: false, data: {} }));
    
  };

  useEffect(() => {
    const storedAuthState = localStorage.getItem('authState');
    if (storedAuthState) {
      const parsedAuthState = JSON.parse(storedAuthState);
      setAuthenticated(parsedAuthState.isAuthenticated);
      setData(parsedAuthState.data);
    }

    
  }, []);

  return (
    <AuthContext.Provider value={{
        isAuthenticated,
        user: data,
        logIn,
        logOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};




export { AuthProvider, useAuth };
