import React from 'react'
import { Helmet } from 'react-helmet'
import ExternalLink from '../ExternalLink'
import ElementTooltip from '../ElementTooltip'
import SectionSeparator from './components/SectionSeparator'
import ArtistSection from './sections/ArtistSection'
import DevelopersSection from './sections/DevelopersSection'
import TranslatorsSection from './sections/TranslatorsSection'
import AssetsSection from './sections/AssetsSection'
import { getBackground, creditsHeader, usadaCredits } from '../../helpers/images'
import '../../css/Credits.css'

const Credits = () => {
    return (
        <div className="credits-wrapper">
            <Helmet>
                <title>Credits - Usada Constructions🥕</title>
                <meta property="og:title" content={"Credits - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Credits - Usada Constructions🥕"} />
            </Helmet>
            <div className="credits-header" style={getBackground(creditsHeader)}>
                <div className="credits-title">CREDITS</div>
            </div>

            <div className="credits-opening-remarks">
                <div className="cor-message">
                    <div className="cor-message-header">Thank you for helping out peko~!</div>
                    <div className="cor-message-body">
                        Hi, everyone, welcome to the website! I hope you had fun visiting!
                        Thanks to the people who joined the team after the launch of 
                        the first version of the website. 
                        <br /><br />
                        Thank you for the people who 
                        helped build this website. We listed down all of the 
                        contributors and references below.
                    </div>
                </div>

                <div className="credits-thumbnail-wrapper">
                    <ElementTooltip id="PekoraUsadaCredits" tooltipChildren={<ExternalLink href="https://www.pixiv.net/en/artworks/85356859">https://www.pixiv.net/en/artworks/85356859</ExternalLink>}>
                        <img src={usadaCredits} alt="usada-credits" className="usada-credits" />
                    </ElementTooltip>
                </div>

                <SectionSeparator title="Contributors" />
                <DevelopersSection />
                <ArtistSection />
                <TranslatorsSection />
                <SectionSeparator title="References" />
                <AssetsSection />

            </div>
        </div>
    )
}

export default Credits