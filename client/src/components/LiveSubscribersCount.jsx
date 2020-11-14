import React, { useEffect, useState } from 'react'
import { getSubscribersCount } from '../services/youtube.service';
import socketIOClient from "socket.io-client";
import '../css/LiveSubscribersCount.css';
import BunnyIcon from '../assets/svg/bunny-icon.svg'
import RabbitShape from '../assets/svg/rabbit-shape.svg'
import Small from '../assets/svg/small.svg';
import Large from '../assets/svg/large.svg';
import Carrot from '../assets/svg/carrot.svg';

const LiveSubscribersCount = () => {

    const [count, setCount] = useState('');
    useEffect(() => {

        //Update current count from server's memory
        (async () => {
            const currentCount = await getSubscribersCount();
            setCount(currentCount.toLocaleString());
        })();

        //Subscribe for live-ish updates
        const socket = socketIOClient(document.location.host);
        socket.on("updateSubscribersCount", data => {
            setCount(data.toLocaleString());
        });

        //Disconnect from socket when component is unmount
        return () => {
            socket.disconnect();
        }
    })

    return (
        <div className="subscribers-count-container">
            <img className="rabbit-shape rabbit-shape-small" src={Small}></img>
            <img className="rabbit-shape rabbit-shape-center" src={RabbitShape}></img>
            <img className="rabbit-shape rabbit-shape-large" src={Large}></img>
            <div className="title">Current Nousagi <span className="employee-count-text">Employee Count</span></div>
            <div className="count-container">
                <span className="count">{count}</span>
                <img className="bunny-icon" src={BunnyIcon}></img>
            </div>
            <div className="subscribe-button">
                <span className="subscribe-text">Subscribe</span>
                <img src={Carrot} className="carrot carrot-subscribe"></img>
            </div>

            {/* <img src="https://user-images.githubusercontent.com/36124096/99149933-14dace80-26cc-11eb-8dac-72db65beaf2a.png"></img> */}
        </div>
    )

}

export default LiveSubscribersCount