export interface RouteType {
  path: string;
  component: React.ComponentElement;
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
  };
};
