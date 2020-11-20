import React, { useState } from 'react'
import {Spinner, UncontrolledTooltip} from 'reactstrap';
import {FiEye, FiEyeOff, FiInfo} from 'react-icons/fi'
import Iframe from 'react-iframe'
import ExternalLink from './ExternalLink'
import '../css/CubicalSegment.css'

const CubicalSegment = ({data, showByDefault}) => {
    const [hiddenCubicalInd, setHiddenCubicalInd] = useState(showByDefault ? !(showByDefault === 'true') : true)
    const [cubicalLoadingInd, setCubicalLoadingInd] = useState(false)
    const dataParsed = JSON.parse(data)
    
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

            {!hiddenCubicalInd &&
                <>
                <div className="iframe-container">
                    <Iframe url={dataParsed.link} className="cubical-container" onLoad={() => setCubicalLoadingInd(false)}/>
                </div>
                <div><i>Model imitated by <ExternalLink href={dataParsed.creator_source} style={{color: '#787878'}}>Saaya</ExternalLink></i></div>
                </>
            }
        </>
    )
}

export default CubicalSegment