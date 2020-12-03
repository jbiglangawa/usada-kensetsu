import './LoadingScreen.css';

const LoadingScreen = (props) => {

    return props.renderStatus == 0 ? (
        <div className="loadingScreenBase">
            <div className="loadingScreenWrapper">
                <div className='rabbit'></div>
                <div className='clouds'></div>
            </div>
        </div>
    ) : (
            <div className="loadingScreenBase rollup">
                <div className="loadingScreenWrapper">
                    <div className='rabbit'></div>
                    <div className='clouds'></div>
                </div>
            </div>
        )
}

export default LoadingScreen;