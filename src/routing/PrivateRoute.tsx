import routes from 'constants/routes';
import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from './RouterTypes';

const isAuthenticated = true;

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, needsLogin, args } = props;

  if (needsLogin && !isAuthenticated) {
    return <Navigate to={routes.AUTH.LOGIN.path} />;
  }

  return <Component {...args} />;
  // return isJwtTokenStored() ? <Component /> : <Login />
};

export default PrivateRoute;
