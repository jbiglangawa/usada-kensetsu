import React, { forwardRef, useEffect, useState } from 'react'
import emoji from 'react-easy-emoji'
import '../css/PekoCard.css'

const PekoCard = forwardRef(({ userStr, front, back, style, onLoad, large }, ref) => {
    const [profileImageLoaded, setProfileImageLoaded] = useState(false)
    const [qrCodeLoaded, setQRCodeLoaded] = useState(false)
    const [rabbitIconLoaded, setRabbitIconLoaded] = useState(false)

    const currentLocation = window.location.href
    const sourceImg = front ? `${currentLocation}front-template.svg` : back && `${currentLocation}back-template.svg`
    const classNamePrefix = large ? 'large' : 'peko'
    const user = userStr && JSON.parse(userStr)
    const longNameInd = user.name.length > 25
    const qrCodeAPILink = `https://api.qrserver.com/v1/create-qr-code/?data=${currentLocation}pekoCard/${user.id}&amp;size=10000x10000`
    
    useEffect(() => {
        // Add newline to name if the name is more than 25 characters
        user.name = longNameInd ? user.name.substring(0, 25) + "\n" + user.name.substring(26, user.name.length - 1) : user.name
    }, [])

    useEffect(() => {
        if(onLoad && front && profileImageLoaded && rabbitIconLoaded) {
            onLoad()
        }
    }, [front, profileImageLoaded, rabbitIconLoaded, onLoad])

    useEffect(() => {
        if (onLoad && back && qrCodeLoaded) {
            onLoad()
       }
    }, [back, qrCodeLoaded, onLoad])

    return (
        <div ref={ref} className={`${classNamePrefix}-card-default`} style={{...style, backgroundImage: `url(${sourceImg})`}}>
            {front &&
            <>
                <div className={`${classNamePrefix}-wrapper`}>
                    <img src={user.photo} alt="" className={`${classNamePrefix}-card-photo`} onLoad={() => setProfileImageLoaded(true)}/>
                    <div className={`${classNamePrefix}-name`} style={{fontSize: longNameInd && large ? '70px' : '20px'}}>{emoji(user.name)}</div>
                    <div className={`${classNamePrefix}-role`}>Nousagi employee</div>
                    <div className={`${classNamePrefix}-id`}><span>ID: </span>{user.id}</div>
                </div>

                <div className={`${classNamePrefix}-footer-wrapper`}>
                    <img src={`${currentLocation}rabbit-icon.svg`} alt="" className={`${classNamePrefix}-rabbit-icon`} onLoad={() => setRabbitIconLoaded(true)} />
                    <div className={`${classNamePrefix}-username`}>@{user.username}</div>
                </div>
            </>
            }

            {back && 
                <div className={`${classNamePrefix}-back-wrapper`}>
                    <img src={qrCodeAPILink} 
                        className={`${classNamePrefix}-qr-code`} alt="" onLoad={() => setQRCodeLoaded(true)} />
                </div>
            }
        </div>
    )
})

export default PekoCard