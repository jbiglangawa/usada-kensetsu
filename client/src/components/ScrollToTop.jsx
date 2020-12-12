import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring } from 'react-spring';

const ScrollToTop = () => {
  const prevLocation = useRef();
  const location = useLocation();
  const [, setY] = useSpring(() => ({ y: 0 }))

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      setY({
        y: 0,
        reset: true,
        from: { y: window.scrollY },
        onFrame: props => window.scroll(0, props.y)
      });
      prevLocation.current = location.pathname;
    }
  }, [location, setY]);

  return null;
};


export default ScrollToTop;