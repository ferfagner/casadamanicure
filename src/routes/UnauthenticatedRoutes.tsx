import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/home';

const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
  </Routes>
);

export default UnauthenticatedRoutes;
