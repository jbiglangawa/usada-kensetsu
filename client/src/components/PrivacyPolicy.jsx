import React from 'react'
import { Helmet } from 'react-helmet'
import ExternalLink from './ExternalLink'
import ElementTooltip from './ElementTooltip'
import '../css/PrivacyPolicy.css'


const PrivacyPolicy = () => {

    return (
        <div>
           <Helmet>
            <title>Privacy Policy - Usada Constructions🥕</title>
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
                        <div className="pp-message-header">PRIVACY POLICY</div>
                        <div className="pp-message-body">

                        <div>At Usada Kensetsu, accessible from usada-kensetsu.online, 
                        one of our main priorities is the privacy of our visitors. 
                        This website <strong>DO NOT COLLECT, STORE, SELL DATA OF ANY KIND.</strong>
                        </div>
                        <br />
                        <strong>Whatever happens in your computer stays in your computer!</strong>
                        <br />
                        <br />
                        <p>Upon clicking JOIN US, it may require you to your twitter, google, or facebook account 
                        but any data on you inputted will stay only on their respective services. 
                        We do not have any third party services in any way, shape or form <strike>we also don't have money and any malicious intention to avail on any of that kind of services,
                        this website is just for fun</strike> to collect your data.</p>
                        <br />
                        <strong>HOW WE USE YOUR INFORMATION</strong>
                        <br />
                        <p>We use your Name and Photo (And Twitter Username if applicable)
                        on generating your PekoCard. After logging out or generating your PekoCard, 
                        we immediately remove, revoke, cancel, rescind or nullify any of YOUR permission
                        on us to access your data. We absolutely, definitely, totally, utterly, completely,
                        perfectly guarantee we don't fetch, store, cache, save any of your data 
                        other than your Name and Photo (And Twitter Username if applicable)</p>
                        <br />
                        <p>So we're telling you, you're perfectly safe!</p>
                        <br />
                        <p>If you have additional questions or require more information about 
                        our Privacy Policy, do not hesitate to contact us at <strong><u>usadaconstruction@gmail.com</u></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
              
}

export default PrivacyPolicy