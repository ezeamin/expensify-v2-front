import React from 'react';

export interface RouteType {
  path: string;
  component: React.ComponentElement;
  needsLogin: boolean;
}

export type RoutesTypes = {
  AUTH: {
    LOGIN: RouteType;
    REGISTER: RouteType;
    RESET_PASSWORD: RouteType;
    RESET_PASSWORD_FORM: RouteType;
  };

  HOME: RouteType;
}
