import Overview from '@components/Overview';
import { Login, Register, ResetPassword, ResetPasswordForm } from '@auth/index';
import { RoutesTypes } from './routesTypes';

const routes: RoutesTypes = {
  // auth
  AUTH: {
    LOGIN: {
      path: '/auth/login',
      component: Login,
      needsLogin: false,
    },
    REGISTER: {
      path: '/auth/register',
      component: Register,
      needsLogin: false,
    },
    RESET_PASSWORD: {
      path: '/auth/reset-password',
      component: ResetPassword,
      needsLogin: false,
    },
    RESET_PASSWORD_FORM: {
      path: '/auth/reset-password/:token',
      component: ResetPasswordForm,
      needsLogin: false,
    },
  },

  // needsLogin
  HOME: {
    path: '/',
    component: Overview,
    needsLogin: true,
  },
};

export default routes;
