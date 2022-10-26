import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../constants/routes';
import { RoutesTypes } from '@constants/routesTypes';

const authRoutes = Object.keys(routes.AUTH);
const mainRoutes = Object.keys(routes.MAIN);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {authRoutes.map((route: string) => {
          const element = routes.AUTH[route as keyof RoutesTypes['AUTH']];

          return (
            <Route
              key={route}
              path={element.path}
              element={<element.component />}
            />
          );
        })}
        {mainRoutes.map((route: string) => {
          const element = routes.MAIN[route as keyof RoutesTypes['MAIN']];

          return (
            <Route
              key={route}
              path={element.path}
              element={<element.component />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
