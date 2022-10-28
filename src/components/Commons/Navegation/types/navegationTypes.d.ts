export interface viewType {
  id: string;
  name: string;
  icon: string;
  path: string;
}

export interface NavItemPropsType {
  id: string;
  name: string;
  icon: string;
  path: string;
  active: boolean;
}

export interface speedDialListType {
  name: string;
  path: string;
  icon: JSX.Element;
  color: 'green' | 'yellow' | 'red' | 'secondary' | 'primary';
}
