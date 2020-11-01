import React from 'react'
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import '../css/Footer.css'

const Footer = props => {
    
    return (
        <div className="footer-wrapper">
            <div className="contact-us">
                <div className="contact-us-message">We'd love to hear from you regarding potential projects, collaborations, <br /> or to join our team</div>
                <button className="contact-us-button">CONTACT US</button>
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
        </div>
    )
}

export default Footer