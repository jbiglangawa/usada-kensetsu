import React from 'react'
import { Helmet } from 'react-helmet'
import { Trans, useTranslation } from 'react-i18next'
import ExternalLink from '../ExternalLink'
import ElementTooltip from '../ElementTooltip'
import SectionSeparator from './components/SectionSeparator'
import ArtistSection from './sections/ArtistSection'
import DevelopersSection from './sections/DevelopersSection'
import TranslatorsSection from './sections/TranslatorsSection'
import AssetsSection from './sections/AssetsSection'

import '../../css/Credits.css'

const Credits = () => {
    const [t] = useTranslation("credits", "header")
    return (
        <div className="credits-wrapper">
            <Helmet>
                <title>{t("header:CREDITS")} - {t("header:Usada Constructions")}🥕</title>
                <meta property="og:title" content={"Credits - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Credits - Usada Constructions🥕"} />
            </Helmet>
            <div className="credits-header">
                <div className="credits-title">{t("header:CREDITS")}</div>
            </div>

            <div className="credits-opening-remarks">
                <div className="cor-message">
                    <div className="cor-message-header">{t("Thank you for helping out peko~!")}</div>
                    <div className="cor-message-body">
                        <Trans t={t}>
                            Hi, everyone, welcome to the website! I hope you had fun visiting!
                            Thanks to the people who joined the team after the launch of 
                            the first version of the website. 
                        </Trans>
                        <br /><br />
                        <Trans t={t}>
                            Thank you for the people who 
                            helped build this website. We listed down all of the 
                            contributors and references below.
                        </Trans>
                    </div>
                </div>

                <div className="credits-thumbnail-wrapper">
                    <ElementTooltip id="PekoraUsadaCredits" tooltipChildren={<ExternalLink href="https://www.pixiv.net/en/artworks/85356859">https://www.pixiv.net/en/artworks/85356859</ExternalLink>}>
                        <img src={process.env.PUBLIC_URL + "/usada-credits.jpg"} alt="usada-credits" className="usada-credits" />
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