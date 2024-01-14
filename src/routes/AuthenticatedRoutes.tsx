import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/home';

const AuthenticatedRoutes = () => (
  <Routes>

    <Route path="/" element={<Home/>} />
   
  </Routes>
);

export default AuthenticatedRoutes;