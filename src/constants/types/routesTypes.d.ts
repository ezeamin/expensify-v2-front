export interface RouteType {
  path: string;
  component: React.ComponentElement;
  args?: any;
}

export type RoutesTypes = {
  AUTH: {
    LOGIN: RouteType;
    REGISTER: RouteType;
    RESET_PASSWORD: RouteType;
    RESET_PASSWORD_FORM: RouteType;
  };

  MAIN: {
    HOME: RouteType;
    CATEGORIES: RouteType;
    ACCOUNTS: RouteType;
    STATS: RouteType;
    EXPENSE: RouteType;
    INCOME: RouteType;
    TRANSFER: RouteType;
    DEBT: RouteType;
    PAYMENT: RouteType;
    SETTINGS: RouteType;
    SETTINGS_USER: RouteType;
  };

  OTHER: {
    ERROR_404: RouteType;
  };
};
