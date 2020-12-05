import '../css/LoadingScreen.css';
import { FiExternalLink } from 'react-icons/fi'

const LoadingScreen = () => {

    return (
        <div className="loading-grid">
            <div className="loading">
                <div className="loadingScreenBase">
                    <div className="loadingScreenWrapper">
                        <div className='rabbit'></div>
                        <div class='clouds'></div>
                    </div>
                </div>
                <div className="loading-text-animation-label">Loading...</div>
            </div>
            <div>
                <a href="https://codepen.io/katydecorah/pen/uIEFy" className="text-decoration-none" target="_blank" rel="noreferrer">
                    Bunny Animation Source
                    <span className="ml-2">
                        <FiExternalLink />
                    </span>
                </a>
            </div>
        </div>

    )
}

export default LoadingScreen;