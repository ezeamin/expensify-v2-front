import Overview from "../components/Overview";

const routes = {
    // auth
    LOGIN: {
        path: '/auth/login',
        component: null,
        needsLogin: false,
    },
    REGISTER: {
        path: '/auth/register',
        component: null,
        needsLogin: false,
    },
    RESET_PASSWORD: {
        path: '/auth/reset-password',
        component: null,
        needsLogin: false,
    },
    RESET_PASSWORD_FORM: {
        path: '/auth/reset-password/:token',
        component: null,
        needsLogin: false,
    },


    // needsLogin
    HOME: {
        path: '/',
        component: Overview,
        needsLogin: true,
    },


};

export default routes;
