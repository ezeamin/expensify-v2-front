import { Navegation } from 'components/index';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navegation />
      <Outlet />
    </>
  );
};

export default Layout;
