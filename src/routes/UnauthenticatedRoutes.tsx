import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/home';

import {Lojas} from '../pages/Lojas/lojas'

import {Login} from '../pages/Login/login'

import {Sobre} from '../pages/Sobre/sobre'

import {Acaliacao} from '../pages/Avaliacao/avaliacao'

const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/lojas" element={<Lojas/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/sobre" element={<Sobre/>} />
    <Route path="/avaliacao" element={<Acaliacao/>} />
  </Routes>
);

export default UnauthenticatedRoutes;
