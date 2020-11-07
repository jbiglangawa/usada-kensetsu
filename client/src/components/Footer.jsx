import React, { useState } from 'react'
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import ReactContactForm from 'react-mail-form'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import '../css/Footer.css'

const Footer = props => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    
    return (
        <div className="footer-wrapper">
            <div className="contact-us">
                <div className="contact-us-message">We'd love to hear from you regarding potential projects, collaborations, <br /> or to join our team</div>
                <button className="contact-us-button" onClick={() => setModal(true)}>CONTACT US</button>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <img
                        alt="footer-logo" 
                        src={process.env.PUBLIC_URL + "/header-logo.png"} 
                        className="footer-logo" />
                        <div className="footer-text">
                            Usada Construction provides quality content and will give you ultimate
                            satisfaction. We accept challenging tasks and finish them accordingly. We 
                            focus on projects that gives unlimited supply of materials peko.
                        </div>
                </div>

                <div className="footer-right">
                    <div className="footer-text">
                        This is a non-profit fan made website. This website is not affiliated with 
                        hololive or Usada Pekora. Please subscribe to Usada Pekora on youtube for more 
                        Minecraft chaos.
                    </div>
                    <a href="https://twitter.com/usadapekora"><AiOutlineTwitter /></a>
                    <a href="https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ"><AiFillYoutube /></a>
                </div>
            </div>
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Contact Us:</ModalHeader>
                <ModalBody>
                    <div className="contact-us-header">Send me an email with your local mail client app. If you have none of that installed, please email me instead at <u>usadaconstruction@gmail.com</u></div>
                    <ReactContactForm to="UsadaConstruction@gmail.com" className="contact-form"/>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Footer