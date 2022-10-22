import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../constants/routes';
import { RoutesTypes } from '@constants/routesTypes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object(routes.AUTH).keys.map((route: string) => {
          const element = routes.AUTH[route as keyof RoutesTypes['AUTH']];

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
