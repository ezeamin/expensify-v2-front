import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '../constants/routes';
import { RoutesTypes } from '@constants/types/routesTypes';

import Layout from 'views/Layout/Layout';
import PrivateRoute from './PrivateRoute';

const authRoutes = Object.keys(routes.AUTH);
const mainRoutes = Object.keys(routes.MAIN);
const otherRoutes = Object.keys(routes.OTHER);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        {authRoutes.map((route: string) => {
          const element = routes.AUTH[route as keyof RoutesTypes['AUTH']];

          return (
            <Route
              key={route}
              path={element.path}
              element={<PrivateRoute component={element.component} />}
            />
          );
        })}

        {/* Protected routes */}
        <Route path='/' element={<Layout />}>
          {mainRoutes.map((route: string) => {
            const element = routes.MAIN[route as keyof RoutesTypes['MAIN']];

            return (
              <Route
                key={route}
                path={element.path}
                element={<PrivateRoute component={element.component} needsLogin />}
              />
            );
          })}
        </Route>

        {/* Other routes */}
        {otherRoutes.map((route: string) => {
          const element = routes.OTHER[route as keyof RoutesTypes['OTHER']];

          return (
            <Route
              key={route}
              path={element.path}
              element={<PrivateRoute component={element.component} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
