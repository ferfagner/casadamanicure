import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/home';
import {Lojas} from '../pages/Lojas/lojas'

import {Login} from '../pages/Login/login'

import {Sobre} from '../pages/Sobre/sobre'
import {Dashboard} from '../pages/Dashboard/dashboard'
import {DashboardAdmin} from '../pages/DashboardAdmin/dashboardAdmin'
import { CadastroFunc } from '../pages/CadastroFunc/cadastroFunc';
import { CadastroLoja } from '../pages/CadastroLoja/cadastroLoja';
import {Acaliacao} from '../pages/Avaliacao/avaliacao'
import {Consulta} from '../pages/Consulta/consulta'

    

const AuthenticatedRoutes = () => (
  <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/lojas" element={<Lojas/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/sobre" element={<Sobre/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/dashboardAdmin" element={<DashboardAdmin/>} />
    <Route path="/cadastroFunc" element={<CadastroFunc/>} />
    <Route path="/cadastroLoja" element={<CadastroLoja/>} />
    <Route path="/avaliacao" element={<Acaliacao/>} />
    <Route path="/Consulta" element={<Consulta/>} />
    
    
   
  </Routes>
);

export default AuthenticatedRoutes;