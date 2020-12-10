import '../css/LoadingScreen.css';
import ExternalLink from './ExternalLink';

const LoadingScreen = ({loadingMessage}) => {

    return (
        <div className="loading-grid">
            <div className="loadingScreenBase">
                <div className="loadingScreenWrapper">
                    <div className='rabbit'></div>
                    <div className='clouds'></div>
                </div>
            </div>
            <ExternalLink href="https://codepen.io/katydecorah/pen/uIEFy" style={{color: '#484848', marginTop: '10px'}}>Source</ExternalLink>
            <div className="loading-text-animation-label">{loadingMessage || 'Loading'}...</div>
        </div>

    )
}

export default LoadingScreen;