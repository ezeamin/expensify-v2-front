import { Overview } from 'views/index';
import { Login } from 'components/Auth/index';
import { RoutesTypes } from './types/routesTypes';
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
    DATA_MENU: {
      path: '/data-menu',
      component: Overview,
    },
    DATA_TABLES: {
      path: '/data-tables',
      component: Overview,
    },
    STATS: {
      path: '/stats',
      component: Overview,
    },
    EXPENSE: {
      path: '/expense',
      component: Overview,
    },
    INCOME: {
      path: '/income',
      component: Overview,
    },
    TRANSFER: {
      path: '/transfer',
      component: Overview,
    },
    DEBT: {
      path: '/debt',
      component: Overview,
    },
    PAYMENT: {
      path: '/payment',
      component: Overview,
    }
  },

  OTHER: {
    ERROR_404: {
      path: '*',
      component: Error404,
    },
  },
};

export default routes;
