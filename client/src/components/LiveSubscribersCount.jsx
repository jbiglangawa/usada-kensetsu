import React, { useEffect, useRef, useState } from 'react'
import { getSubscribersCount } from '../services/youtube.service';
import socketIOClient from "socket.io-client";
import '../css/LiveSubscribersCount.css';
import BunnyIcon from '../assets/svg/bunny-icon.svg'
import RabbitShape from '../assets/svg/rabbit-shape.svg'
import Small from '../assets/svg/small.svg';
import Large from '../assets/svg/large.svg';
import Carrot from '../assets/svg/carrot.svg';
import { useSpring, animated, config } from 'react-spring'
import useScrollPosition from '@react-hook/window-scroll'
import { Trans, useTranslation } from 'react-i18next'
import { Spring } from 'react-spring/renderprops';


const LiveSubscribersCount = () => {

    const [t] = useTranslation("home")
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);

    const useSlideAnimationOnScroll = (to, from, tension) => {
        return useSpring(shouldAnimate  ? {
            transform: `translateX(${to}%)`,
            visibility: 'visible',
            from: {
                transform: `translateX(${from || 200}%)`
            },
            config: {
                tension:  200,
                friction: tension || 50
            }
        } : {visibility: 'hidden'});
    }

    const counterAnimator = useSpring({ config: {friction: 35, tension: 200}, number: count || 0, from: { number: prevCount } })
    const scrollYPosition = useScrollPosition(60);
    const elementRef = useRef(null);

    useEffect(() => {
        const scrollTop = elementRef.current.getBoundingClientRect().top;
        if (scrollTop < 500) {
            setShouldAnimate(true);
        }

    }, [scrollYPosition])

    useEffect(() => {

        //Update current count from server's memory
        (async () => {
            const {count} = await getSubscribersCount();
            setCount(count);
        })();

        //Subscribe for live-ish updates
        const socket = socketIOClient(process.env.PUBLIC_URL);

        socket.on("updateSubscribersCount", data => {
            setCount(prev => {
                setPrevCount(prev)
                return data;
            }
            );
        });

        //Disconnect from socket when component is unmount
        return () => {
            socket.disconnect();
        }
    }, [])
    

    return (
        <div ref={elementRef} className="subscribers-count-container">
            <animated.img src={Carrot} style={useSlideAnimationOnScroll(100, 700, 150)} className="carrot carrot-opaque carrot-small carrot-1"></animated.img>
            <animated.img src={Carrot} style={useSlideAnimationOnScroll(100, 700, 200)} className="carrot carrot-opaque carrot-small carrot-2"></animated.img>
            <animated.img src={Carrot} style={useSlideAnimationOnScroll(-350, 700, 50)} className="carrot carrot-opaque carrot-small carrot-3"></animated.img>
            <animated.img src={Carrot} style={useSlideAnimationOnScroll(100, 700, 100)} className="carrot carrot-opaque carrot-small carrot-4"></animated.img>
            <animated.img src={Carrot} style={useSlideAnimationOnScroll(300, 700, 120)} className="carrot carrot-opaque carrot-small carrot-5"></animated.img>

            <animated.img style={useSlideAnimationOnScroll(0, 0, 100)} className="rabbit-shape rabbit-shape-small" src={Small}></animated.img>
            <animated.img style={useSlideAnimationOnScroll(0, 0, 200)} className="rabbit-shape rabbit-shape-center" src={RabbitShape}></animated.img>
            <animated.img style={useSlideAnimationOnScroll(0, 0, 150)} className="rabbit-shape rabbit-shape-large" src={Large}></animated.img>
            <animated.div style={useSlideAnimationOnScroll(0)} className="title"><Trans t={t}>Current Nousagi <span className="employee-count-text">Employee Count</span></Trans></animated.div>
            <animated.div className="count-container">
                <animated.span style={{...useSlideAnimationOnScroll(0, 1500, 200), ...counterAnimator}} className="count">{counterAnimator.number.interpolate(count => Math.round(count).toLocaleString())}</animated.span>
                <animated.img style={useSlideAnimationOnScroll(0, 4000, 200)} className="bunny-icon" src={BunnyIcon}></animated.img>
            </animated.div>
            <animated.div style={useSlideAnimationOnScroll(-70)} className="subscribe-button">
                <span className="subscribe-text">{t("Subscribe")}</span>
                <img src={Carrot} className="carrot carrot-subscribe"></img>
            </animated.div>
        </div>
    )

}

export default LiveSubscribersCount