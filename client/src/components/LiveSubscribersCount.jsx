import React, { useEffect, useRef, useState } from 'react'
import { getSubscribersCount } from '../services/youtube.service';
import socketIOClient from "socket.io-client";
import '../css/LiveSubscribersCount.scss';
import BunnyIcon from '../assets/svg/bunny-icon.svg'
import Small from '../assets/svg/small.svg';
import Large from '../assets/svg/large.svg';
import Carrot from '../assets/svg/carrot.svg';
import { useSpring, animated } from 'react-spring'
import useScrollPosition from '@react-hook/window-scroll'
import { Trans, useTranslation } from 'react-i18next'
import { Spring } from 'react-spring/renderprops';


const LiveSubscribersCount = () => {

    const [t] = useTranslation("home")
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);

    const useSlideAnimationOnScroll = (friction) => {
        return useSpring(shouldAnimate ? {
            transform: `translateX(0%)`,
            visibility: 'visible',
            from: {
                transform: `translateX(200%)`
            },
            config: {
                tension: 200,
                friction: friction || 50
            }
        } : { visibility: 'hidden' });
    }

    const counterAnimator = useSpring({ config: { friction: 35, tension: 200 }, number: count || 0, from: { number: prevCount } })
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
            const { count } = await getSubscribersCount();
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
            <div className="row-1">
                <animated.div style={useSlideAnimationOnScroll(150)} className="title">
                    <Trans t={t}>Current Nousagi <span className="employee-count-text">Employee Count</span></Trans>
                </animated.div>
                <animated.div style={useSlideAnimationOnScroll(0)} className="carrot">
                    <img src={Carrot} className="carrot-opaque carrot-small"></img>
                </animated.div>
            </div>
            <animated.div style={useSlideAnimationOnScroll(0)} className="row-2">
                <div className="carrot-2">
                    <img src={Carrot} className="carrot carrot-opaque carrot-small carrot-2"></img>
                </div>
                <div className="carrot-3">
                    <img src={Carrot}  className="carrot carrot-opaque carrot-small carrot-3"></img>
                </div>
                <div className="rabbit-shape-small">
                    <img  src={Small}></img>
                </div>
            </animated.div>
            <animated.div  style={useSlideAnimationOnScroll(200)} className="row-3">
                <div className="count-container">
                    <animated.span style={counterAnimator} className="count">{counterAnimator.number.interpolate(count => Math.round(count).toLocaleString())}</animated.span>
                    <img className="bunny-icon" src={BunnyIcon}></img>
                </div>
            </animated.div>

            <animated.div style={useSlideAnimationOnScroll(0)} className="row-4">
                <div  className="subscribe-button">
                    <span className="subscribe-text">{t(Subscribe)}</span>
                    {/* <img src={Carrot} className="carrot"></img> */}
                </div>
                <div className="rabbit-shape">
                    <img src={Large}></img>
                </div>

            </animated.div>

            <animated.div  style={useSlideAnimationOnScroll(0)} className="row-5">
                <div className="carrot-1">
                    <img src={Carrot} className="carrot carrot-opaque"></img>
                </div>

                <div className="carrot-2">
                    <img src={Carrot} className="carrot carrot-opaque"></img>
                </div>

            </animated.div>



        </div>
    )

}

export default LiveSubscribersCount