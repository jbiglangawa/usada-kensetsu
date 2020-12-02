import React from 'react'
import Youtube from 'react-youtube'
import { AiFillYoutube, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../css/Home.scss'
import classNames from 'classnames';
import { mobileBreakPoint } from '../helpers/responsive'
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet'
import LiveSubscribersCount from './LiveSubscribersCount'
import ElementTooltip from './ElementTooltip'
import ExternalLink from './ExternalLink'

const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: mobileBreakPoint });
    return (
        <div className={classNames("home-wrapper", { mobile: isMobile })}>
            <Helmet>
                <title>Home - Usada Constructions🥕</title>
                <meta property="og:title" content={"Home - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Home - Usada Constructions🥕"} />
            </Helmet>
            <img src={process.env.PUBLIC_URL + "/carrot-bg.svg"} alt="carrot-bg" className="carrot-bg" />
            <img src={process.env.PUBLIC_URL + "/ellipsis-bg.svg"} alt="ellipsis-bg" className="ellipsis-bg" />
            <img src={process.env.PUBLIC_URL + "/rabbit-bg.svg"} alt="rabbit-bg" className="rabbit-bg" />

            <div className="front-page-wrapper">
                <ElementTooltip id="PekoraFrontPage" style={{ zIndex: 2 }} tooltipChildren={<ExternalLink href="https://www.deviantart.com/skynetrailgun/art/Usada-Construction-EN-856918336">https://www.deviantart.com/skynetrailgun/art/Usada-Construction-EN-856918336</ExternalLink>}>
                    <img src={process.env.PUBLIC_URL + "/usada-front-page.png"} alt="usada-pekora-construction" className="front-page-usada" />
                </ElementTooltip>

                <div className="front-page-title">
                    <div className="front-page-quote-wrapper">
                        <div className="fpq-we">"We&nbsp;<div className="fpq-build">build</div></div>
                        <div className="fpq-tomm">tomorrow</div>
                        <div className="fpq-peko">for you peko"</div>
                    </div>
                    <div className="fp-usada">Usada Pekora</div>
                    <div className="fp-ceo">Usada Constructions CEO</div>
                    <div className="fp-idol">Idol Bunny Head Engineer</div>

                    <button className="fp-join-us-button">JOIN US</button>
                </div>
            </div>


            <div className="services-wrapper">
                <div className="services-header">
                    <img src={process.env.PUBLIC_URL + "/services-header.svg"} alt="services-header" className="services-header-svg" />

                    <div className="services-header-pekora">
                        <div className="usada-front">
                            <img src={process.env.PUBLIC_URL + "/usada-front.png"} alt="usada-front" />
                        </div>

                        <div className="services-title">SERVICES</div>
                    </div>
                </div>

                <div className="services-body">
                    <div className="service">
                        <div className="service-icon">
                            <img src={process.env.PUBLIC_URL + "/mc-dia-pickaxe.png"} alt="mc-dia-pickaxe" className="service-icon-img" />
                        </div>
                        <div className="service-desc-body">
                            <div className="service-title">QUALITY DESIGNS</div>
                            <div className="service-desc">
                                With CEO Pekora, all designs are carefully researched
                                for reliable, durable and efficient builds
                            </div>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-icon">
                            <img src={process.env.PUBLIC_URL + "/mc-dia-boots.png"} alt="mc-dia-boots" className="service-icon-img" />
                        </div>
                        <div className="service-desc-body">
                            <div className="service-title">HEYBRID REWARDS</div>
                            <div className="service-desc">
                                Low risk but highly rewarding, CEO Pekora will bestow you
                                legendary Heybrid rewards handmade.
                            </div>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-icon">
                            <img src={process.env.PUBLIC_URL + "/mc-wither.png"} alt="mc-wither" className="service-icon-img" />
                        </div>
                        <div className="service-desc-body">
                            <div className="service-title">PEST CONTROL</div>
                            <div className="service-desc">
                                CEO Pekora can exterminate monsters lurking to prevent
                                damages and injuries to everyone near the site
                            </div>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-icon">
                            <img src={process.env.PUBLIC_URL + "/mc-iron-ingot.png"} alt="mc-iron-ingot" className="service-icon-img" />
                        </div>
                        <div className="service-desc-body">
                            <div className="service-title">UNLIMITED RESOURCES</div>
                            <div className="service-desc">
                                Low risk but highly rewarding, CEO Pekora will bestow you
                                legendary Heybrid rewards handmade
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured">
                <div className="featured-wrapper">
                    <div className="featured-header-text">
                        WITNESS THE<br />
                    PEKODAM<br />
                    IN ACTION
                </div><br /><br />
                    <Link to="/project/3/showByDefault/true" className="featured-header-link">
                        Visit the PekoDam<AiOutlineRight />
                    </Link>
                </div>
            </div>

            <div className="history">
                <div className="left">
                    <div className="history-title">OUR HISTORY</div>
                    <div className="history-subtitle">USADA CONSTRUCTION WAS FOUNDED THIS 2019...</div>
                    <div className="history-desc">
                        which is very recent but ever since Usada Cannon T3 MK II we have been getting
                        non-stop requests from our clients as time passes. We were able to annihilate a
                        whole base of pillagers and managed to be known as the the first Construction
                        company in Hololive. Please take a look at the first ever creation of Usada Construction
                    </div>
                </div>

                <div className="right">
                    <Youtube videoId={'DETMkvZ0G_Q'} containerClassName='history-player' className="history-video"/>
                </div>
            </div>

            <div className="news"></div>

            <LiveSubscribersCount />

            <div className="thanks">
                <div className="usada-3d-wrapper">
                    <img src={process.env.PUBLIC_URL + "/usada-3d.png"} alt="usada-3d" className="usada-3d" />
                </div>
                <div className="thanks-message">
                    <div className="tm-title">Thank you for visiting peko~!</div>
                    <div className="tm-desc">
                        This is a non-profit fan made website for Usada Pekora. I hope you like it! <br />
                        Special thanks to Usada Pekora Discord Fan Server and the artists who gave
                        permission for using their art. Please refer to credits for a complete list
                        of people who helped me build this website.<br /><br />
                        Don't forget to subscribe to Pekora-chan!
                    </div>

                    <div className="visit-channel">
                        <a href="https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ">
                            <AiFillYoutube className="youtube-icon" />
                            Click here to visit her channel
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home