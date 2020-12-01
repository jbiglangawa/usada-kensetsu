import React, { useState, useEffect } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Modal, ModalBody, ModalHeader, ModalFooter, Spinner } from 'reactstrap'
import NewWindow from 'react-new-window'
import { Link } from 'react-router-dom'
import '../css/JoinUsModal.css'


const JoinUsModal = ({isModalOpen, toggleModal, socket, togglePekoCardModal, setLoggedInUser}) => {
    const [user, setUser] = useState()
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [url, setURL] = useState()

    // Twitter window popup features
    const features = {
        toolbar: 'no',
        location: 'no',
        directories: 'no',
        status: 'no',
        menubar: 'no',
        scrollbars: 'no',
        resizable: 'no',
        copyhistory: 'no',
        width: 600,
        height: 600,
        top: (window.innerHeight / 2) - (600 / 2),
        left: (window.innerWidth / 2) - (600 / 2)
    }

    const openAuthPopup = () => {
        setIsAuthenticating(true)
        const API_URL = 'https://127.0.0.1:5000'
        setURL(`${API_URL}/twitter/twitterAuth?socketId=${socket.id}`)
    }

    const onUnloadAuthPopup = () => {
        closeAuthPopup()
    }

    const onBlockAuthPopup = () => {
        closeAuthPopup()
    }

    const closeAuthPopup = () => {
        setURL(null)
        setIsAuthenticating(false)
    }

    const authenticateTwitter = () => {
        if(!isAuthenticating) {
            openAuthPopup()
        }
    }
    
    const logoutUser = callback => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        fetch(`/twitter/logoutUser`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(callback) {
                    callback()
                }
                
                setUser(null)
            })
    }
    
    const generateIdCallback = () => {
        setLoggedInUser(JSON.stringify(user))
        togglePekoCardModal()
        toggleModal()
    }
    
    const generateIdOnClick = () => {
        logoutUser(generateIdCallback)
    }

    useEffect(() => {
        return () => {
            // Upon unmount, logout user to revoke Access token
            logoutUser()
        }
    }, [])

    useEffect(() => {
        if(isModalOpen) {
            socket.on("twitterUser", user => {
                closeAuthPopup()
                setUser(user)
            });
        }
    }, [isModalOpen, socket])

    return (
        <Modal isOpen={isModalOpen} toggle={toggleModal} centered>
            <ModalHeader toggle={toggleModal}>
                <div className="ju-modal-header">Join Us and receive your <b>PekoCard</b></div>
            </ModalHeader>

            <ModalBody>
                <div className="jum-description">
                    To claim your PekoCard, you are need to login using twitter. You 
                    will be given the PekoCard according to your Twitter account. Following the 
                    Usada Construction Bot is not required, but if you do you will be displayed 
                    in <Link to="/our-team">Our Team</Link>. 
                </div>
                <div className="jum-footer-note">
                    Disclaimer: We will be fetching only the following data from your twitter: 
                    Twitter ID, Name, Username, and Thumbnail. The said data will be used to ONLY
                    generate your PekoCard. Logging out will revoke the permission you gave to this
                    website.
                </div>

                <div className="jum-account-wrapper">
                    <img className="jum-account-thumbnail" src={"https://pbs.twimg.com/profile_images/1327633358940114947/4_h2FqUG_400x400.jpg"} alt=""/>
                    <div className="jum-account-name-wrapper">
                        <div className="jum-account-name">Usada Construction Bot</div>
                        <div className="jum-account-username">@UsadaKensetsu</div>
                        <button className="jum-apply-button"><AiOutlineTwitter /> Follow</button>
                    </div>
                </div>
            </ModalBody>

            <ModalFooter style={{justifyContent: 'space-between'}}>
                {!user ?
                    !isAuthenticating ? 
                    <button onClick={authenticateTwitter} className="jum-sign-in-button">
                        <img src={process.env.PUBLIC_URL + '/sign-in-with-twitter-link.png.img.fullhd.medium.png'} alt="twitter-login" />
                    </button>
                    :
                    <div className="jum-authenticating">
                        <Spinner />
                        <i>Authenticating...</i>
                    </div>
                :
                <div className="jum-signed-in-wrapper">
                    <div className="jum-signed-in-header">Signed in as:</div>
                    <div className="jum-si-acc-wrapper">
                        <img src={user.photo} alt="" className="jum-sia-thumbnail"/>
                        <div className="jum-acc-tag">@{user.username}</div>
                        (<button className="jum-sia-logout-button" onClick={logoutUser}>
                            Logout
                        </button>)
                    </div>
                </div>
                }
                <button disabled={!user} onClick={generateIdOnClick} className="jum-generate-button">Generate my ID</button>
            </ModalFooter>

            {url &&
                <NewWindow url={url} features={features} onUnload={onUnloadAuthPopup} onBlock={onBlockAuthPopup} />
            }
        </Modal>
        
    )
}

export default JoinUsModal