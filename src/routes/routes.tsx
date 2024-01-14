import { BrowserRouter} from 'react-router-dom';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';
import { useAuth } from '../context/auth'

export function Rotas () {
  const {isAuthenticated} = useAuth();


  return (
    <BrowserRouter>
      {isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}

    </BrowserRouter>
  );
};

