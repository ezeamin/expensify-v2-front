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
    DATA_MENU: RouteType;
    DATA_TABLES: RouteType;
    STATS: RouteType;
    EXPENSE: RouteType;
    INCOME: RouteType;
    TRANSFER: RouteType;
    DEBT: RouteType;
  };

  OTHER: {
    ERROR_404: RouteType;
  };
};
