import { Overview } from 'views/index';
import { Login } from 'components/Auth/index';
import { RoutesTypes } from './routesTypes';
import { viewList } from './authViews';
import Error404 from 'views/Error/Error404';

const routes: RoutesTypes = {
  // auth
  AUTH: {
    LOGIN: {
      path: '/auth/login',
      component: Login,
      args: {
        view: viewList.LOGIN,
      },
    },
    REGISTER: {
      path: '/auth/register',
      component: Login,
      args: {
        view: viewList.REGISTER,
      },
    },
    RESET_PASSWORD: {
      path: '/auth/restore-password',
      component: Login,
      args: {
        view: viewList.RESTORE_PASSWORD,
      },
    },
    RESET_PASSWORD_FORM: {
      path: '/auth/reset-password/:token',
      component: Login,
      args: {
        view: viewList.RESET_PASSWORD,
      },
    },
  },

  // needsLogin
  MAIN: {
    HOME: {
      path: '/',
      component: Overview,
    },
  },
  
  OTHER: {
    ERROR_404: {
      path: '*',
      component: Error404,
    },
  }
};

export default routes;
