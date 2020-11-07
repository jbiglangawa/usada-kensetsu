import React from 'react'
import {FaDiscord, FaDeviantart, FaFacebook} from 'react-icons/fa'
import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {SiPixiv} from 'react-icons/si'
import '../css/Credits.css'

const Credits = props => {
    return (
        <div className="credits-wrapper">
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
                    <img src={process.env.PUBLIC_URL + "/usada-credits.jpg"} alt="usada-credits" className="usada-credits" />
                </div>

                <div className="credits-body">
                    Thank you for the following artists who have given me permission to use their art. Please do give them a visit<br />
                    <br />
                    <b>Skynetrailgun</b><br />
                    Art: <a href="https://www.deviantart.com/skynetrailgun/art/Usada-Construction-EN-856918336">https://www.deviantart.com/skynetrailgun/art/Usada-Construction-EN-856918336</a><br />
                    <a href="https://www.deviantart.com/skynetrailgun"><FaDiscord /></a><br />
                    <br />
                    <b>Okeyneto</b><br />
                    Art Logo: <a href="https://www.reddit.com/r/Hololive/comments/jfzqus/i_redesigned_usada_kensetsu_logo_and_added/">https://www.reddit.com/r/Hololive/comments/jfzqus/i_redesigned_usada_kensetsu_logo_and_added/</a><br />
                    <a href="https://www.facebook.com/OKN2Designs/"><FaFacebook /></a>
                    <a href="https://twitter.com/okeyneto1"><AiOutlineTwitter /></a><br />
                    <br />
                    <b>Faruhan</b><br />
                    Art: <a href="https://www.pixiv.net/en/artworks/85356859">https://www.pixiv.net/en/artworks/85356859</a><br />
                    <a href="https://www.pixiv.net/en/users/54259573"><SiPixiv /></a><br />
                    <br />
                    <br />
                    Thanks to InHaze for letting me add the Cubical as an iFrame to the Projects corner. Please visit cubical.xyz to display your Minecraft creations on the web<br />
                    <b>InHaze</b><br />
                    <a href="https://cubical.xyz">https://cubical.xyz</a><br />
                    <a href="https://twitter.com/inHaze"><AiOutlineTwitter /></a><br />
                    <br />
                    <br />
                    Thanks to Saaya for giving me a copy of their world to get the PekoDam copy she made by watching Pekora-sama's PekoDam stream step by step. If you haven't seen it yet, please give the PekoDam a visit!<br />
                    <b>Saaya</b><br />
                    Art: <a href="https://twitter.com/RASaaya/status/1318946785604194304">https://twitter.com/RASaaya/status/1318946785604194304</a><br />
                    <a href="https://twitter.com/RASaaya/status/1318946785604194304"><AiOutlineTwitter /></a><br />
                    <br />
                    <br />
                    Please refer to this corner for all of the assets I've acquired from the internet:<br />
                    Fonts I've used:<br />
                    <a href="https://blogfonts.com/pekora-bolditalic.font?textfont=Construct">Pekora-Bold <FiExternalLink /></a><br />
                    <a href="https://fonts.google.com/specimen/Montserrat">Montserrat <FiExternalLink /></a><br />
                    <a href="https://www.fontspace.com/autobus-bold-font-f27736">AutoBusBold <FiExternalLink /></a><br />
                    <br />
                    Images I've used:<br />
                    <a href="https://www.pexels.com/photo/architect-architecture-beach-bridge-262347/">Projects Header Image <FiExternalLink /></a><br />
                    <a href="https://fictionalcompanies.fandom.com/wiki/Majima_Construction">Our team Header Image <FiExternalLink /></a><br />
                    <a href="https://www.animecharactersdatabase.com/characters.php?id=100652">Pekora Services Header <FiExternalLink /></a><br />
                    <a href="https://static.miraheze.org/hololivewiki/4/4c/Usada_Pekora_-_3D_Model_01-2.png">Pekora OK Peace sign <FiExternalLink /></a><br />
                    <a href="https://static.wikia.nocookie.net/virtualyoutuber/images/9/94/Moona_Hoshinova_Portrait.jpg/revision/latest/scale-to-width-down/310?cb=20200411161426">Moona avatar: <FiExternalLink /></a><br />
                    <a href="https://pbs.twimg.com/profile_images/1186979284319006720/gH6xdlYB_400x400.jpg">Yagoo avatar <FiExternalLink /></a><br />
                    Diamond pickaxe: <a href="https://www.pinterest.ph/pin/760686193294170345/"><FiExternalLink /></a><br />
                    Diamond boots: <a href="https://www.pinterest.ph/pin/840836192916052392/"><FiExternalLink /></a><br />
                    Iron ingot: <a href="https://minecraft.gamepedia.com/Iron_Ingot"><FiExternalLink /></a><br />
                    Wither: <a href="https://minecraft.gamepedia.com/Wither"><FiExternalLink /></a><br />
                    <br />
                    Please note that some parts of the description in Our Team are from these wiki pages<br />
                    Usada Pekora: <a href="https://virtualyoutuber.fandom.com/wiki/Usada_Pekora"><FiExternalLink /></a><br />
                    Moona Hoshinova: <a href="https://virtualyoutuber.fandom.com/wiki/Moona_Hoshinova"><FiExternalLink /></a><br />
                    <br />
                    <br />
                    And lastly, thank you for my fellow Nousagi's in Usada Construction EN Division who helped me by giving out their ideas for the content of the website.<br /> 
                    Kurori<br />
                    Lucia Hunter<br />
                    Toasty Okonomiyaki<br />
                    T E D<br />
                    Astro<br />
                    <br />
                    If you are a fellow Nousagi as well, you can join us by clicking the discord icon below<br />
                    <a href="https://discord.com/invite/Ge9bMaM"><FaDiscord /></a><br />
                    <br />
                    <br />
                    Once again thanks for helping me and thank you for appreciating the website!

                </div>
            </div>
        </div>
    )
}

export default Credits