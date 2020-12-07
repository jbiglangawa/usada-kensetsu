import React, { useState } from 'react'
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import ReactContactForm from 'react-mail-form'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import { Trans, useTranslation } from 'react-i18next'
import '../css/Footer.css'
import ExternalLink from './ExternalLink'

const Footer = props => {
    const [t] = useTranslation("footer")
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    
    return (
        <div className="footer-wrapper">
            <div className="contact-us">
                <div className="contact-us-message">
                    <Trans t={t}>
                        We'd love to hear from you regarding potential projects, collaborations, <br />
                        or to join our team
                    </Trans></div>
                <button className="contact-us-button" onClick={() => setModal(true)}>{t("CONTACT US")}</button>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <img
                        alt="footer-logo" 
                        src={process.env.PUBLIC_URL + "/header-logo.png"} 
                        className="footer-logo" />
                    <div className="footer-text">
                        <Trans t={t}>
                            Usada Construction provides quality content and will give you ultimate
                            satisfaction. We accept challenging tasks and finish them accordingly. We 
                            focus on projects that gives unlimited supply of materials peko.
                        </Trans>
                    </div>
                    <div className="footer-text">
                        <Trans t={t}>
                            This is a non-profit fan made website. This website is not affiliated with 
                            hololive or Usada Pekora. Please subscribe to Usada Pekora on youtube for more 
                            Minecraft chaos.
                        </Trans>
                    </div>
                    <ExternalLink href="https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ" excludeIcon><AiFillYoutube />Pekora Ch. 兎田ぺこら</ExternalLink>
                    <br />
                    <ExternalLink href="https://twitter.com/usadapekora" excludeIcon><AiOutlineTwitter />@usadapekora</ExternalLink>
                </div>

                <div className="footer-right">
                    <div className="footer-text">
                        {t("Messages from CEO")}
                    </div>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="usadapekora"
                        options={{
                            align: 'center',
                            height: '400px'
                        }}
                    />
                </div>
            </div>
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{t("CONTACT US")}:</ModalHeader>
                <ModalBody>
                    <div className="contact-us-header">
                        <Trans t={t}>
                            Send me an email with your local mail client app. 
                            If you have none of that installed, please email me instead at 
                            <u>usadaconstruction@gmail.com</u>
                        </Trans>
                    </div>
                    <ReactContactForm 
                        to="UsadaConstruction@gmail.com" 
                        className="contact-form" 
                        titlePlaceholder={t("Title")} 
                        contentsPlaceholder={t("Contents")}
                        buttonText={t("Send")}
                        />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Footer