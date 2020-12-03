import React, { useState } from 'react'
import {Spinner, UncontrolledTooltip} from 'reactstrap';
import {FiEye, FiEyeOff, FiInfo} from 'react-icons/fi'
import Iframe from 'react-iframe'
import  { useTranslation } from 'react-i18next'
import ExternalLink from './ExternalLink'
import '../css/CubicalSegment.css'

const CubicalSegment = ({data, showByDefault}) => {
    const [t] = useTranslation("projects")
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
                        <div className="show-cubical-label">{t("Show Cubical")}</div>
                    </div>

                    <FiInfo id="cubicalinfo"/>
                    <UncontrolledTooltip placement="right" target="cubicalinfo">
                        {t("We hide this by default to prevent lag")}
                    </UncontrolledTooltip>
                    </>
                :
                    <div className="hide-cubical-wrapper" onClick={onHideCubical}>
                        <FiEyeOff />
                        <div className="hide-cubical-label">{t("Hide Cubical")}</div>
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
                <div><i>{t("Model imitated by")} <ExternalLink href={dataParsed.creator_source} style={{color: '#787878'}}>Saaya</ExternalLink></i></div>
                </>
            }
        </>
    )
}

export default CubicalSegment