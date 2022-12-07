import {
  Overview,
  Accounts,
  Categories,
  Error404,
  Stats,
  Movement,
  Settings,
  UserSettings
} from 'views/index';

import { Login } from 'components/Auth/index';

import { RoutesTypes } from './types/routesTypes';
import { viewList } from './views/authViews';
import { movementsViews } from './movements';

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
    CATEGORIES: {
      path: '/categories',
      component: Categories,
    },
    ACCOUNTS: {
      path: '/accounts',
      component: Accounts,
    },
    STATS: {
      path: '/stats',
      component: Stats,
    },
    EXPENSE: {
      path: '/expense',
      component: Movement,
      args: {
        movement: movementsViews.EXPENSE,
      },
    },
    INCOME: {
      path: '/income',
      component: Movement,
      args: {
        movement: movementsViews.INCOME,
      },
    },
    TRANSFER: {
      path: '/transfer',
      component: Movement,
      args: {
        movement: movementsViews.TRANSFER,
      },
    },
    DEBT: {
      path: '/debt',
      component: Movement,
      args: {
        movement: movementsViews.DEBT,
      },
    },
    PAYMENT: {
      path: '/payment',
      component: Movement,
      args: {
        movement: movementsViews.PAYMENT,
      },
    },
    SETTINGS: {
      path: '/settings',
      component: Settings,
    },
    SETTINGS_USER: {
      path: '/settings/user',
      component: UserSettings,
    },
  },

  OTHER: {
    ERROR_404: {
      path: '*',
      component: Error404,
    },
  },
};

export default routes;
