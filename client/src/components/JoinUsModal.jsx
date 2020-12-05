import React, { useState, useEffect } from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Modal, ModalBody, ModalHeader, ModalFooter, Spinner } from 'reactstrap'
import NewWindow from 'react-new-window'
import { Link } from 'react-router-dom'
import '../css/JoinUsModal.css'
import { use } from 'passport'
import { FaFacebook } from 'react-icons/fa'


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

    const openAuthPopup = api => {
        if(!isAuthenticating) {
            setIsAuthenticating(true)
            const API_URL = process.env.REACT_APP_API_URL || window.location.href
            setURL(`${API_URL}/auth/${api}Auth?socketId=${socket.id}`)
        }
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

    const logoutUser = callback => {
        fetch(`/auth/logoutUser`)
            .then(response => {
                if (response.ok) {
                    if(callback) {
                        callback()
                    }else {
                        setUser(null)
                    }
                }
            })
    }
    
    const generateIdCallback = () => {
        delete user.$$_4CCSST
        delete user.$_Aces_TOEe3t
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
            socket.on("user", user => {
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
                    To claim your PekoCard, you need to login using twitter, google, or facebook.
                    After clicking <i>Generate my ID</i>, you will revoke your authentication permission
                    to this website and we won't be able to access your details anymore
                </div> 
            </ModalBody>

            <ModalFooter style={{justifyContent: 'space-between'}}>
                {!user ?
                    !isAuthenticating ? 
                    <div>
                        Sign in:
                        <button onClick={() => openAuthPopup('google')} className="jum-sign-in-button"><FcGoogle /></button>
                        <button onClick={() => openAuthPopup('twitter')} className="jum-sign-in-button sign-in-twitter"><AiOutlineTwitter /></button>
                        <button onClick={() => openAuthPopup('facebook')} className="jum-sign-in-button sign-in-facebook"><AiFillFacebook /></button>
                    </div>
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
                        <div className="jum-acc-tag">{user.provide === 'twitter' ? `@${user.username}` : user.name}</div> (
                        <button className="jum-sia-logout-button" onClick={() => logoutUser()}>Logout</button>)
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