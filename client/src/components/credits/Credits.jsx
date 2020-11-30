import React from 'react'
import { Helmet } from 'react-helmet'
import ExternalLink from '../ExternalLink'
import ElementTooltip from '../ElementTooltip'
import SectionSeparator from './components/SectionSeparator'
import ArtistSection from './sections/ArtistSection'
import DevelopersSection from './sections/DevelopersSection'
import TranslatorsSection from './sections/TranslatorsSection'
import AssetsSection from './sections/AssetsSection'

import '../../css/Credits.css'

const Credits = () => {
    return (
        <div className="credits-wrapper">
            <Helmet>
                <title>Credits - Usada Constructions🥕</title>
                <meta property="og:title" content={"Credits - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Credits - Usada Constructions🥕"} />
            </Helmet>
            <div className="credits-header">
                <div className="credits-title">CREDITS</div>
            </div>

            <div className="credits-opening-remarks">
                <div className="cor-message">
                    <div className="cor-message-header">Thank you for helping out peko~!</div>
                    <div className="cor-message-body">
                        Hi, this is SwingSpringer, the creator of this fan-made website. Thank you for the people who
                        helped me build this website. I do not own any of the art I have used in this website, but I
                        got permission from all of the artists. I listed down all of the people that helped me and the
                        sources of each image that I used. For people who visited this website, you can visit the artists
                        that I will list down below and give them a follow or a comment.
                        <br /><br />
                        In case you're looking at this Usada Pekora, please enjoy this website.
                    </div>
                </div>

                <div className="credits-thumbnail-wrapper">
                    <ElementTooltip id="PekoraUsadaCredits" tooltipChildren={<ExternalLink href="https://www.pixiv.net/en/artworks/85356859">https://www.pixiv.net/en/artworks/85356859</ExternalLink>}>
                        <img src={process.env.PUBLIC_URL + "/usada-credits.jpg"} alt="usada-credits" className="usada-credits" />
                    </ElementTooltip>
                </div>

                <SectionSeparator title="Contributors" />
                <ArtistSection />
                <DevelopersSection />
                <TranslatorsSection />
                <SectionSeparator title="References" />
                <AssetsSection />

            </div>
        </div>
    )
}

export default Credits