import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { Alert, Modal, ModalBody, ModalHeader, Tooltip } from 'reactstrap'
import NewWindow from 'react-new-window'
import { FiPrinter, FiDownload, FiLink} from 'react-icons/fi'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PekoCard from './PekoCard'
import PDFPekocardGenerator from './PDFPekocardGenerator'
import ImagePekocardGenerator from './ImagePekocardGenerator'
import { useMediaQuery } from 'react-responsive'
import { mobileBreakPoint } from '../../helpers/responsive'
import '../../css/GeneratePekoCardModal.css'
import html2canvas from 'html2canvas'

const ACTION_NONE = null
const ACTION_PRINT = 1
const ACTION_DOWNLOAD = 2

const GeneratePekoCardModal = ({isModalOpen, toggleModal, loggedInUser}) => {
    const [user, setUser] = useState(JSON.parse(loggedInUser))
    const [action, setAction] = useState(ACTION_NONE)
    const [isCopied, setIsCopied] = useState(false)
    const [isPopupBlocked, setIsPopupBlocked] = useState(false)
    const [frontPekoCardLoaded, setFrontPekoCardLoaded] = useState(false)
    const [backPekoCardLoaded, setBackPekoCardLoaded] = useState(false)

    const frontPekoCardRef = useRef()
    const currentLocation = window.location.href
    const pekoCardLink = `${currentLocation}pekoCard/${user.secret}`
    const isMobile = useMediaQuery({ maxDeviceWidth: mobileBreakPoint })
    const isCardsLoaded = frontPekoCardLoaded && backPekoCardLoaded

    const onDownloadSuccess = () => setAction(ACTION_NONE)

    const toggleIsCopied = () => setIsCopied(!isCopied)

    const toggleBlockedPopup = () => setIsPopupBlocked(!isPopupBlocked)

    const generateImageURI = (node) => {
        const element = ReactDOM.findDOMNode(node.current);
        return html2canvas(element, { scrollY: -window.scrollY, useCORS: true})
    }

    useEffect(() => {
        if(user && frontPekoCardLoaded && !user.secret ) {
            generateImageURI(frontPekoCardRef)
                .then(canvas => canvas.toDataURL('image/png', 1.0))
                .then(uri => fetch(`/auth/generatePekoCard`, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({imageUri: uri, user: user})
                }))
                .then(response => response.json())
                .then(data => {
                    setUser({...user, secret: data.generatedID})
                })
        }
    }, [frontPekoCardLoaded, user])

    return (
        <>
        <Modal isOpen={isModalOpen} className="generated-modal-wrapper">
            <ModalHeader toggle={toggleModal} style={{borderBottom: 'none', justifyContent: 'center', paddingBottom: '0'}}>
                <div className="generated-congratulations">CONGRATULATIONS!</div>
                <div className="generated-header">Welcome to Usada Construction</div>
            </ModalHeader>
            
            <ModalBody className="generated-body-wrapper">
                <div className="generated-description">
                    Please print the PekoCard below before and wear before entering PekoLand office premises. Tampering with
                    the ID will not be tolerated and will be subject to PekoPunishments.
                </div>

                <div className="generated-wrapper">
                    <PekoCard front ref={frontPekoCardRef} userStr={loggedInUser} onLoad={() => setFrontPekoCardLoaded(true)}/>
                    <PekoCard back userStr={JSON.stringify(user)} onLoad={() => setBackPekoCardLoaded(true)}/>
                </div>
                
                <div className="generated-rec-size">The recommended print size is: 3.38" x 2.36"</div>

                <div className="generated-note">
                    This ID is for entertainment purposes only and should not be used for transactions or identification in 
                    real life.
                </div>

                <Alert color="danger" isOpen={isPopupBlocked} toggle={toggleBlockedPopup}>
                    The Browser blocked the sign in popup😭. Please allow the popup to proceed with signing in
                </Alert>

                <div className="generated-footer-buttons">
                    {!isMobile && 
                    <button disabled={!isCardsLoaded} onClick={() => setAction(ACTION_PRINT)}><FiPrinter /> Print</button>}
                    <button disabled={!isCardsLoaded} onClick={() => setAction(ACTION_DOWNLOAD)}><FiDownload /> Download image</button>

                    <CopyToClipboard text={pekoCardLink} onCopy={() => setIsCopied(true)}>
                        <button disabled={!isCardsLoaded} id="copyPekocardLink" onMouseLeave={() => setIsCopied(false)}><FiLink /> Copy PekoCard Link</button>
                    </CopyToClipboard>
                    
                    {isCopied &&
                        <Tooltip placement="top" target="copyPekocardLink" isOpen={isCopied} toggle={toggleIsCopied}>Successfully copied to clipboard!</Tooltip>
                    }
                </div>

            </ModalBody>
        </Modal>

        {action &&
            <NewWindow features={{ width: 1920, height: 1080 }} onUnload={() => setAction(ACTION_NONE)} onBlock={toggleBlockedPopup}>
                {action === ACTION_DOWNLOAD ?
                    <ImagePekocardGenerator userStr={JSON.stringify(user)} onDownloadSuccess={onDownloadSuccess} />
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