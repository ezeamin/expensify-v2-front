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
  };
  
  OTHER: {
    ERROR_404: RouteType;
  };
};
