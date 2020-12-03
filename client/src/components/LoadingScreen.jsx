import React, { useEffect, useState } from 'react'
import './LoadingScreen.css';

const LoadingScreen = (props) => {

    const [animationComplete, setAnimationComplete] = useState(0);

    useEffect(() => {
        if (props.renderStatus == 1) {
            removeLoading();
        }
    })

    async function removeLoading() {
        await new Promise(resolve => setTimeout(resolve, 500));
        setAnimationComplete(1)
    }

    if (props.renderStatus == 0) {
        return (
            <div className="loadingScreenBase">
                <div className="loadingScreenWrapper">
                    <div className='rabbit'></div>
                    <div className='clouds'></div>
                </div>
            </div>
        )
    } else if (props.renderStatus == 1 && animationComplete == 0) {
        return (
            <div className="loadingScreenBase rollup">
                <div className="loadingScreenWrapper">
                    <div className='rabbit'></div>
                    <div className='clouds'></div>
                </div>
            </div>
        )
    }
    return ""
}

export default LoadingScreen;