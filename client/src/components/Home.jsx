import React from 'react'
import '../css/Home.css'

const Home = props => {
    return (
        <div className="home-wrapper">
            <img src={process.env.PUBLIC_URL + "/carrot-bg.svg"} alt="carrot-bg" className="carrot-bg"/>
            <img src={process.env.PUBLIC_URL + "/ellipsis-bg.svg"} alt="ellipsis-bg" className="ellipsis-bg"/>
            <img src={process.env.PUBLIC_URL + "/rabbit-bg.svg"} alt="rabbit-bg" className="rabbit-bg"/>
            
            <div className="front-page-wrapper">
                <img src={process.env.PUBLIC_URL + "/usada-front-page.png"} alt="usada-pekora-construction" className="front-page-usada" />
                <div className="front-page-title">
                    <div className="front-page-quote-wrapper">
                        <div className="fpq-we">"We&nbsp;<div className="fpq-build">build</div></div> 
                        <div className="fpq-tomm">tomorrow</div>
                        <div className="fpq-peko">for you peko"</div>
                    </div>
                    <div className="fp-usada">Usada Pekora</div>
                    <div className="fp-ceo">Usada Constructions CEO</div>
                    <div className="fp-idol">Idol Bunny Head Engineer</div>
                </div>
            </div>
        </div>
    )
}

export default Home