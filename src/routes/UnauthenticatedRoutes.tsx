import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/home';

import {Lojas} from '../pages/Lojas/lojas'

const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/lojas" element={<Lojas/>} />
  </Routes>
);

export default UnauthenticatedRoutes;
