import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import Youtube from 'react-youtube'
import { Spinner } from 'reactstrap'
import '../css/Source.css'

const YOUTUBE = 1, TWITTER = 2

const getSourceType = url => {
    let sourceType;

    if (url.includes("youtube")) {
        sourceType = YOUTUBE
    } else if (url.includes("twitter")) {
        sourceType = TWITTER
    }

    return sourceType
}

const getYoutubeID = url => {
    var videoId = url.split('v=')[1];
    var ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId
}

const getTwitterID = url => {
    var tweetIdSplit = url.split('/');
    var tweetId = tweetIdSplit[tweetIdSplit.length - 1]
    return tweetId
}

const Source = props => {
    const { url } = props
    const sourceType = getSourceType(url)

    return (
        <div className="source-wrapper">
            {sourceType ?
                <>
                    {sourceType === YOUTUBE ?
                        <div className="youtube-wrapper">
                            <Youtube videoId={getYoutubeID(url)}
                                className="source-player"
                                containerClassName={'source-player'} />
                        </div>
                        : sourceType === TWITTER ?
                            <div className="twitter-wrapper">
                                <TwitterTweetEmbed
                                    tweetId={getTwitterID(url)}
                                    placeholder={
                                        <div className="twitter-placeholder">
                                            <Spinner />
                                            <div className="tweet-loading-text">Loading tweet...</div>
                                        </div>
                                    }
                                    options={{
                                        align: 'center'
                                    }}
                                />
                            </div>
                            :
                            null
                    }
                </>
                :
                null
            }
        </div>
    )
}

export default Source