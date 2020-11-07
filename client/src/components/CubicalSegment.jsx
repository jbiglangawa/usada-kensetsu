import React, { useState } from 'react'
import {Spinner} from 'reactstrap';
import {FiEye, FiEyeOff} from 'react-icons/fi'
import Iframe from 'react-iframe'
import '../css/CubicalSegment.css'

const CubicalSegment = props => {
    const {url} = props
    const [hiddenCubicalInd, setHiddenCubicalInd] = useState(true)
    const [cubicalLoadingInd, setCubicalLoadingInd] = useState(false)

    const onShowCubical = () => {
        setHiddenCubicalInd(false)
        setCubicalLoadingInd(true)
    }

    const onHideCubical = () => {
        setHiddenCubicalInd(true)
        setCubicalLoadingInd(false)
    }

    return (
        <>
            <div className="header-tools-wrapper">
                {hiddenCubicalInd ?
                    <div className="show-cubical-wrapper" onClick={onShowCubical}>
                        <FiEye />
                        <div className="show-cubical-label">Show cubical</div>
                    </div>
                :
                    <div className="hide-cubical-wrapper" onClick={onHideCubical}>
                        <FiEyeOff />
                        <div className="hide-cubical-label">Hide cubical</div>
                        {cubicalLoadingInd ? 
                            <Spinner color="secondary" className="cubical-spinner"/> 
                        : 
                            null
                        }
                    </div>
                }
            </div>

            {!hiddenCubicalInd ?
                    <div className="iframe-container">
                        <Iframe url={url} className="cubical-container" onLoad={() => setCubicalLoadingInd(false)}/>
                    </div>
                :null
            }
        </>
    )
}

export default CubicalSegment