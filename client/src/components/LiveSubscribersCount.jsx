import React, { useEffect, useRef, useState } from 'react'
import { getSubscribersCount } from '../services/youtube.service';
import socketIOClient from "socket.io-client";
import '../css/LiveSubscribersCount.scss';
import BunnyIcon from '../assets/svg/bunny-icon.svg'
import RabbitShape from '../assets/svg/rabbit-shape.svg'
import Small from '../assets/svg/small.svg';
import Large from '../assets/svg/large.svg';
import Carrot from '../assets/svg/carrot.svg';
import { useSpring, animated } from 'react-spring'
import useScrollPosition from '@react-hook/window-scroll'

const LiveSubscribersCount = () => {


    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);

    const useSlideAnimationOnScroll = (to, from, tension) => {
        return {}
        return useSpring(shouldAnimate ? {
            transform: `translateX(${to}%)`,
            visibility: 'visible',
            from: {
                transform: `translateX(${from || 200}%)`
            },
            config: {
                tension: 200,
                friction: tension || 50
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
                <animated.div style={useSlideAnimationOnScroll(0)} className="title">
                    Current Nousagi <span className="employee-count-text">Employee Count</span>
                </animated.div>
                <div class="carrot">
                    <animated.img src={Carrot} style={useSlideAnimationOnScroll(100, 700, 150)} className="carrot-opaque carrot-small"></animated.img>
                </div>
            </div>
            <div className="row-2">
                <div className="carrot-2">
                    <animated.img src={Carrot} style={useSlideAnimationOnScroll(100, 700, 200)} className="carrot carrot-opaque carrot-small carrot-2"></animated.img>
                </div>
                <div className="carrot-3">
                    <animated.img src={Carrot} style={useSlideAnimationOnScroll(-350, 700, 50)} className="carrot carrot-opaque carrot-small carrot-3"></animated.img>
                </div>
                <div className="rabbit-shape-small">
                    <animated.img style={useSlideAnimationOnScroll(0, 0, 100)} src={Small}></animated.img>
                </div>
            </div>
            <div className="row-3">
                {/* <div className="rabbit-shape" >
                    <animated.img style={useSlideAnimationOnScroll(0, 0, 200)} src={RabbitShape}></animated.img>
                </div> */}
                <animated.div className="count-container">
                    <animated.span style={{ ...useSlideAnimationOnScroll(0, 1500, 200), ...counterAnimator }} className="count">{counterAnimator.number.interpolate(count => Math.round(count).toLocaleString())}</animated.span>
                    <animated.img style={useSlideAnimationOnScroll(0, 4000, 200)} className="bunny-icon" src={BunnyIcon}></animated.img>
                </animated.div>
            </div>

            <div className="row-4">
                <animated.div style={useSlideAnimationOnScroll(-70)} className="subscribe-button">
                    <span className="subscribe-text">Subscribe</span>
                    {/* <img src={Carrot} className="carrot"></img> */}
                </animated.div>
                <animated.div className="rabbit-shape">
                    <animated.img style={useSlideAnimationOnScroll(0, 0, 150)} src={Large}></animated.img>
                </animated.div>

            </div>

            <animated.div className="row-5">
                <div className="carrot-1">
                    <animated.img src={Carrot} style={useSlideAnimationOnScroll(100, 700, 100)} className="carrot carrot-opaque"></animated.img>
                </div>

                <div className="carrot-2">
                    <animated.img src={Carrot} style={useSlideAnimationOnScroll(300, 700, 120)} className="carrot carrot-opaque"></animated.img>
                </div>

            </animated.div>



        </div>
    )

}

export default LiveSubscribersCount