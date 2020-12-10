import React, { forwardRef, useEffect, useState } from 'react'
import emoji from 'react-easy-emoji'
import { Spinner } from 'reactstrap'
import '../../css/PekoCard.css'

const PekoCard = forwardRef(({ userStr, front, back, style, onLoad, large }, ref) => {
    const [profileImageLoaded, setProfileImageLoaded] = useState(false)
    const [qrCodeLoaded, setQRCodeLoaded] = useState(false)
    const [rabbitIconLoaded, setRabbitIconLoaded] = useState(false)
    const [qrCodeAPILink, setQRCodeAPILink] = useState()

    const currentLocation = window.location.href
    const sourceImg = front ? `${currentLocation}front-template.svg` : back && `${currentLocation}back-template.svg`
    const classNamePrefix = large ? 'large' : 'peko'
    const user = userStr && JSON.parse(userStr)
    const employeeId = front && user.employeeID


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

    useEffect(() => {
        if(back && user.secret) {
            const qrLink = `https://api.qrserver.com/v1/create-qr-code/?data=${currentLocation}pekoCard/${user.secret}&amp;size=10000x10000`
            setQRCodeAPILink(qrLink)
        }
    }, [back, currentLocation, user])


    return (
        <div ref={ref} className={`${classNamePrefix}-card-default`} style={{...style, backgroundImage: `url(${sourceImg})`}}>
            {front &&
            <>
                <div className={`${classNamePrefix}-wrapper`}>
                    <img src={user.photo} alt="" className={`${classNamePrefix}-card-photo`} onLoad={() => setProfileImageLoaded(true)}/>
                    <div className={`${classNamePrefix}-name`}>{emoji(user.name)}</div>
                    <div className={`${classNamePrefix}-role`}>Nousagi employee</div>
                    <div className={`${classNamePrefix}-id`}><span>ID: </span>{employeeId}</div>
                </div>

                <div className={`${classNamePrefix}-footer-wrapper`}>
                    <img src={`${currentLocation}rabbit-icon.svg`} alt="" className={`${classNamePrefix}-rabbit-icon`} onLoad={() => setRabbitIconLoaded(true)} />
                    <div className={`${classNamePrefix}-username`}>{user.provider === 'twitter' && `@${user.username}`}</div>
                </div>
            </>
            }

            {back && 
                <div className={`${classNamePrefix}-back-wrapper`}>
                    {qrCodeAPILink &&
                        <>
                        <img src={qrCodeAPILink} 
                            className={qrCodeLoaded && `${classNamePrefix}-qr-code`} alt="" onLoad={() => setQRCodeLoaded(true)} />
                        </>
                    }
                    {!qrCodeLoaded &&
                        <div className={`${classNamePrefix}-back-loading`}>
                            <Spinner />
                        </div>
                    }
                </div>
            }
        </div>
    )
})

export default PekoCard