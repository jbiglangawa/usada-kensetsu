import React from 'react'
import { Helmet } from 'react-helmet'
import ExternalLink from './ExternalLink'
import ElementTooltip from './ElementTooltip'
import { Trans, useTranslation } from 'react-i18next'
import '../css/PrivacyPolicy.css'


const PrivacyPolicy = () => {
    const [t] = useTranslation(["privacy_policy", "header"])

    return (
        <div>
           <Helmet>
            <title>{t("PRIVACY POLICY")} - {t("header: Usada Construction")}🥕</title>
            <meta property="og:title" content={"Privacy Policy - Usada Constructions🥕"} />
            <meta property="twitter:title" content={"Privacy Policy - Usada Constructions🥕"} />
            </Helmet>
            <div className="privacy-policy-wrapper">
                <div className="privacy-policy-content-wrapper">
                    <div className="privacy-policy-thumbnail-wrapper">
                            <ElementTooltip id="PekoraUsadaPrivacyPolicy" tooltipChildren={<ExternalLink href="https://twitter.com/drweamnetwork/status/1322837056750411776">https://twitter.com/drweamnetwork/status/1322837056750411776</ExternalLink>}>
                                <img src={process.env.PUBLIC_URL + "/usada-privacy-policy.png"} alt="usada-privacy-policy" className="usada-privacy-policy" /> 
                            </ElementTooltip>
                    </div>

                    <div className="pp-message">
                        <div className="pp-message-header">{t("PRIVACY POLICY")}</div>
                        <div className="pp-message-body">
                            <Trans t={t} >
                                <div>At Usada Kensetsu, accessible from usada-kensetsu.online, 
                                one of our main priorities is the privacy of our visitors. 
                                This website <strong>DO NOT COLLECT, STORE, SELL DATA OF ANY KIND.</strong>
                                </div>
                            </Trans>
                        <br />
                            <strong>{t("Whatever happens in your computer stays in your computer!")}</strong>
                        <br />
                        <br />
                            <Trans t={t}>
                                <p>Upon clicking JOIN US, it may ask you for your Twitter, Google, or Facebook usernames, 
                                but any data you inputted will stay only on their respective services. 
                                We do not have any third party services in any way, shape or form to collect your data 
                                <strike>we also don't have money and any malicious intention to avail on any of that kind of services, 
                                this website is just for fun.</strike></p>
                            </Trans>
                        <br />
                        <strong>{t("HOW WE USE YOUR INFORMATION")}</strong>
                        <br />
                            <Trans t={t}>
                                <p>We use your Name and Photo (and Twitter Username if applicable) when generating your PekoCard. 
                                After generating your PekoCard or logging out, we immediately remove, revoke, cancel, rescind or nullify any permission you granted us to access your data. 
                                We absolutely, definitely, totally, utterly, completely, perfectly guarantee we don't fetch, store, cache, 
                                save any of your data other than your Name and Photo (and Twitter Username if applicable).</p>
                            </Trans>
                        <br />
                        <p>{t("So we're telling you, you're perfectly safe!")}</p>
                        <br />
                             <Trans  t={t}>
                                <p>If you have additional questions or require more information about 
                                our Privacy Policy, do not hesitate to contact us at <strong><u>usadaconstruction@gmail.com</u></strong></p>
                            </Trans>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
              
}

export default PrivacyPolicy