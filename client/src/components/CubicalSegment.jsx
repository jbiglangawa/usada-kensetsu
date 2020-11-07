import React, { useState } from 'react'
import {Spinner, UncontrolledTooltip} from 'reactstrap';
import {FiEye, FiEyeOff, FiInfo} from 'react-icons/fi'
import Iframe from 'react-iframe'
import '../css/CubicalSegment.css'

const CubicalSegment = props => {
    const {url, showByDefault} = props
    const [hiddenCubicalInd, setHiddenCubicalInd] = useState(showByDefault ? !(showByDefault === 'true') : true)
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
                    <>
                    <div className="show-cubical-wrapper" onClick={onShowCubical}>
                        <FiEye />
                        <div className="show-cubical-label">Show Cubical</div>
                    </div>

                    <FiInfo id="cubicalinfo"/>
                    <UncontrolledTooltip placement="right" target="cubicalinfo">
                        We hide this by default to prevent lag
                    </UncontrolledTooltip>
                    </>
                :
                    <div className="hide-cubical-wrapper" onClick={onHideCubical}>
                        <FiEyeOff />
                        <div className="hide-cubical-label">Hide Cubical</div>
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