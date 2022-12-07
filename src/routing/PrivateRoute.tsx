import { Navigate } from 'react-router-dom';

import routes from 'constants/routes';

import { AnimatePresence, motion } from 'framer-motion';

import { PrivateRouteProps } from './RouterTypes';

const isAuthenticated = true;

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, needsLogin, args, path } = props;

  if (needsLogin && !isAuthenticated) {
    return <Navigate to={routes.AUTH.LOGIN.path} />;
  }

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        animate='visible'
        exit={{
                opacity: 0,
                translate: '0 5%',
                transition: {
                  duration: 0.75,
                  ease: 'easeInOut',
                },
              }
        }
        key={path}
      >
        <Component {...args} />
      </motion.div>
    </AnimatePresence>
  );
  // return isJwtTokenStored() ? <Component /> : <Login />
};

export default PrivateRoute;
