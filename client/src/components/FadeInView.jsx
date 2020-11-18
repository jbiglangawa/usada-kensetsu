import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring } from 'react-spring';
import { animated } from 'react-spring';

const FadeInView = ({children, styles}) => {

    const [ref, inView] = useInView();

    const props = useSpring(inView ? {opacity: 1, from: {opacity: 0}} : {opacity: 0});
    return (<animated.div ref={ref} style={{...styles, ...props}}>
        {children}
    </animated.div>)
};

export default FadeInView;