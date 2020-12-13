import React, { useState, useEffect } from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Modal, ModalBody, ModalHeader, ModalFooter, Spinner, Alert } from 'reactstrap'
import NewWindow from 'react-new-window'
import PekoCardEditModal from './PekoCardEditModal'
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../../css/JoinUsModal.css'


const JoinUsModal = ({isModalOpen, toggleModal, socket, togglePekoCardModal, setLoggedInUser}) => {
    const [user, setUser] = useState()
    const [url, setURL] = useState()
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [isPopupBlocked, setIsPopupBlocked] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [t] = useTranslation("join_us")

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
            setURL(`${API_URL}auth/${api}Auth?socketId=${socket.id}`)
        }
    }

    const toggleBlockedPopup = () => setIsPopupBlocked(!isPopupBlocked)

    const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen)

    const closeAuthPopup = () => {
        setURL(null)
        setIsAuthenticating(false)
    }

    const logoutUser = () => {
        const requestOptions = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        if(user) {
            fetch(`${process.env.REACT_APP_API_URL}/auth/logoutUser`, requestOptions)
                .then(() => setUser(null))
        }
    }
    
    const generateIdCallback = (modifiedUser) => {
        delete modifiedUser.$$_4CCSST
        delete modifiedUser.$_Aces_TOEe3t
        delete modifiedUser.id

        setLoggedInUser(JSON.stringify(modifiedUser))
        setUser(null)
        toggleEditModal()
        togglePekoCardModal()
        toggleModal()
    }
    
    const generateIdOnClick = (modifiedUser) => {
        setUser(modifiedUser)
        const requestOptions = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(modifiedUser)
        }
        fetch(`${process.env.REACT_APP_API_URL}auth/logoutUser`, requestOptions)
            .then(() => generateIdCallback(modifiedUser))
    }

    useEffect(() => {
        return () => {
            // Upon unmount, logout user to revoke Access token
            logoutUser()
        }
    
    // Remove ESLint warning here
    // eslint-disable-next-line
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
        <>
        <Modal isOpen={isModalOpen} toggle={toggleModal} centered>
            <ModalHeader toggle={toggleModal}>
                <div className="ju-modal-header"><Trans t={t}>Join Us and receive your <b>PekoCard</b></Trans></div>
            </ModalHeader>

            <ModalBody>
                <Alert color="danger" isOpen={isPopupBlocked} toggle={toggleBlockedPopup}>
                    <Trans t={t}>
                        The Browser blocked the sign in popup😭. Please allow the popup to proceed with signing in
                    </Trans>
                </Alert>

                <div className="jum-description">
                    <Trans t={t}>
                        To claim your PekoCard, you need to login using Twitter, Google, or Facebook. You can click here to view our <Link to="/privacy-policy">Privacy Policy</Link>
                    </Trans>
                </div> 
            </ModalBody>

            <ModalFooter style={{justifyContent: 'space-between'}}>
                {!user ?
                    !isAuthenticating ?
                        <div className="jum-signin-buttons"> 
                            <span>{t("Sign in")}:</span>
                            <div>
                                <button onClick={() => openAuthPopup('google')} className="jum-sign-in-button"><FcGoogle /></button>
                                <button onClick={() => openAuthPopup('twitter')} className="jum-sign-in-button sign-in-twitter"><AiOutlineTwitter /></button>
                                <button onClick={() => openAuthPopup('facebook')} className="jum-sign-in-button sign-in-facebook"><AiFillFacebook /></button>
                            </div>
                        </div>
                    :
                    <div className="jum-authenticating">
                        <Spinner />
                        <i>{t("Authenticating")}...</i>
                    </div>
                :
                <div className="jum-signed-in-wrapper">
                    <div className="jum-signed-in-header">{t("Signed in as")}:</div>
                    <div className="jum-si-acc-wrapper">
                        <img src={user.photo} alt="" className="jum-sia-thumbnail"/>
                        <div className="jum-acc-tag">{user.provider === 'twitter' ? `@${user.username}` : user.name}</div> (
                        <button className="jum-sia-logout-button" onClick={() => logoutUser()}>{t("Logout")}</button>)
                    </div>
                </div>
                }

                <div className="join-modal-buttons">
                    <button disabled={!user} onClick={() => setIsEditModalOpen(true)} className="jum-preview-button">{t("Preview")}</button>
                </div>
            </ModalFooter>

            {url &&
                <NewWindow url={url} features={features} onUnload={closeAuthPopup} onBlock={() => setIsPopupBlocked(true)} />
            }
        </Modal>

        {user && isEditModalOpen &&
            <PekoCardEditModal isOpen={isEditModalOpen} toggle={toggleEditModal} userStr={JSON.stringify(user)} modifyUser={setUser} generate={generateIdOnClick} />
        }
        </>
    )
}

export default JoinUsModal