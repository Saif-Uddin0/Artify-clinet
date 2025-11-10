import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Loader = () => {
  const spin = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <animated.div
        style={spin}
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
      ></animated.div>
    </div>
  );
};

export default Loader;