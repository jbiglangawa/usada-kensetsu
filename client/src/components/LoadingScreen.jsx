import '../css/LoadingScreen.css';

const LoadingScreen = (props) => {

    return (
        <div className="loading-grid">
            <div className="loading">
                <div className="loadingScreenBase">
                    <div className="loadingScreenWrapper">
                        <div className='rabbit'></div>
                    </div>
                </div>
                <div className="loading-text-animation-label">Loading...</div>
            </div>
        </div>

    )
}

export default LoadingScreen;