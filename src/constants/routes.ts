import Overview from 'components/Overview';
import { Login, Register, ResetPassword, ResetPasswordForm } from 'components/Auth/index';
import { RoutesTypes } from './routesTypes';

const routes: RoutesTypes = {
  // auth
  AUTH: {
    LOGIN: {
      path: '/auth/login',
      component: Login,
    },
    REGISTER: {
      path: '/auth/register',
      component: Register,
    },
    RESET_PASSWORD: {
      path: '/auth/reset-password',
      component: ResetPassword,
    },
    RESET_PASSWORD_FORM: {
      path: '/auth/reset-password/:token',
      component: ResetPasswordForm,
    },
  },

  // needsLogin
  MAIN:{
    HOME: {
      path: '/',
      component: Overview,
    },
  }
};

export default routes;
