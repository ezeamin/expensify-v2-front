import { useLayoutEffect, useRef } from 'react';

import { AnimatedUnmountProps } from './types';

const AnimatedUnmount = ({ children }: AnimatedUnmountProps) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ref = mainRef.current;
    ref?.classList.remove('animate-out-bottom')

    return () => {
      console.log('unmount');

      ref?.classList.add('animate-out-bottom');
    };
  }, []);

  return <div ref={mainRef}>{children}</div>;
};

export default AnimatedUnmount;
