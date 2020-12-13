import React, { useState } from 'react'
import { Alert, Modal, ModalBody, ModalHeader, Tooltip } from 'reactstrap'
import NewWindow from 'react-new-window'
import { FiPrinter, FiDownload, FiLink} from 'react-icons/fi'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PekoCard from './PekoCard'
import PDFPekocardGenerator from './PDFPekocardGenerator'
import ImagePekocardGenerator from './ImagePekocardGenerator'
import { useMediaQuery } from 'react-responsive'
import { mobileBreakPoint } from '../../helpers/responsive'
import { Trans, useTranslation } from 'react-i18next'
import ShareButton from './ShareButton'
import '../../css/GeneratePekoCardModal.css'

const ACTION_NONE = null
const ACTION_PRINT = 1
const ACTION_DOWNLOAD = 2

const GeneratePekoCardModal = ({isModalOpen, toggleModal, loggedInUser}) => {
    const user = JSON.parse(loggedInUser)
    const [action, setAction] = useState(ACTION_NONE)
    const [isCopied, setIsCopied] = useState(false)
    const [isPopupBlocked, setIsPopupBlocked] = useState(false)
    const [frontPekoCardLoaded, setFrontPekoCardLoaded] = useState(false)
    const [backPekoCardLoaded, setBackPekoCardLoaded] = useState(false)
    const [t] = useTranslation("join_us")

    const pekoCardLink = `${process.env.REACT_APP_API_URL}pekoCard/${user.secret}`
    const isMobile = useMediaQuery({ maxDeviceWidth: mobileBreakPoint })
    const isCardsLoaded = frontPekoCardLoaded && backPekoCardLoaded

    const toggleBlockedPopup = () => setIsPopupBlocked(!isPopupBlocked)

    return (
        <>
        <Modal isOpen={isModalOpen} className="generated-modal-wrapper">
            <ModalHeader toggle={toggleModal} style={{borderBottom: 'none', justifyContent: 'center', paddingBottom: '0'}}>
                <div className="generated-congratulations">{t("CONGRATULATIONS!")}</div>
                <div className="generated-header">{t("Welcome to Usada Construction")}</div>
            </ModalHeader>
            
            <ModalBody className="generated-body-wrapper">
                <div className="generated-description">
                    <Trans t={t}>
                        Please print the PekoCard below before and wear before entering PekoLand office premises. Tampering with the ID will not be tolerated and will be subject to PekoPunishments.
                    </Trans>
                </div>

                <div className="generated-wrapper">
                    <PekoCard front userStr={loggedInUser} onLoad={() => setFrontPekoCardLoaded(true)}/>
                    <PekoCard back userStr={loggedInUser} onLoad={() => setBackPekoCardLoaded(true)}/>
                </div>
                
                <div className="generated-rec-size">{t("The recommended print size is 3.38\" x 2.36\"")}</div>

                <div className="generated-note">
                    <Trans t={t}>
                        This ID is for entertainment purposes only and should not be used for transactions or identification in 
                        real life.
                    </Trans>
                </div>

                <Alert color="danger" isOpen={isPopupBlocked} toggle={toggleBlockedPopup}>
                    <Trans t={t}>
                        The Browser blocked the sign in popup😭. Please allow the popup to proceed with signing in
                    </Trans>
                </Alert>

                <div className="generated-footer-buttons">
                    {!isMobile && 
                    <button disabled={!isCardsLoaded} onClick={() => setAction(ACTION_PRINT)}><FiPrinter /> {t("PRINT")}</button>}
                    <button disabled={!isCardsLoaded} onClick={() => setAction(ACTION_DOWNLOAD)}><FiDownload /> {t("DOWNLOAD IMAGE")}</button>

                    <CopyToClipboard text={pekoCardLink} onCopy={() => setIsCopied(true)}>
                        <button disabled={!isCardsLoaded} id="copyPekocardLink" onMouseLeave={() => setIsCopied(false)}><FiLink /> {t("COPY PEKOCARD LINK")}</button>
                    </CopyToClipboard>
                    
                    {isCopied &&
                        <Tooltip placement="top" target="copyPekocardLink" isOpen={isCopied} toggle={() => setIsCopied(!isCopied)}>{t("Successfully copied to clipboard!")}</Tooltip>
                    }
                    
                    <ShareButton secret={user.secret} />
                </div>
            </ModalBody>
        </Modal>

        {action &&
            <NewWindow features={{ width: 1920, height: 1080 }} onUnload={() => setAction(ACTION_NONE)} onBlock={toggleBlockedPopup}>
                {action === ACTION_DOWNLOAD ?
                    <ImagePekocardGenerator userStr={JSON.stringify(user)} onDownloadSuccess={() => setAction(ACTION_NONE)} />
                :
                 action === ACTION_PRINT &&
                    <PDFPekocardGenerator userStr={JSON.stringify(user)} />
                }
            </NewWindow>
        }
        </>
    )
}

export default GeneratePekoCardModal