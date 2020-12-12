import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PekoCard from './PekoCard'
import { useMediaQuery } from 'react-responsive'
import { mobileBreakPoint } from './../../helpers/responsive';
import { Alert, Tooltip } from 'reactstrap'
import NewWindow from 'react-new-window'
import ImagePekocardGenerator from './ImagePekocardGenerator'
import PDFPekocardGenerator from './PDFPekocardGenerator'
import { FiDownload, FiLink, FiPrinter } from 'react-icons/fi'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import LoadingScreen from '../LoadingScreen';
import ShareButton from './ShareButton';
import '../../css/DisplayPekoCard.css'

const ACTION_NONE = null
const ACTION_PRINT = 1
const ACTION_DOWNLOAD = 2

const DisplayPekoCard = () => {
    const {pekoCardId} = useParams()
    const [user, setUser] = useState()
    const [error, setError] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const [isPopupBlocked, setIsPopupBlocked] = useState(false)

    const [action, setAction] = useState(ACTION_NONE)
    const isMobile = useMediaQuery({ maxDeviceWidth: mobileBreakPoint })
    
    const toggleBlockedPopup = () => setIsPopupBlocked(!isPopupBlocked)

    useEffect(() => {
        if(!user) {
            const requestOptions = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({pekoCardId})
            }

            fetch('/auth/getUserDetails', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(data.success) {
                        setUser(data.user)
                    }else {
                        setError(true)
                    }
                })
        }
    }, [pekoCardId, user, setUser])

    return (
        <div className="display-pekocard-wrapper">
            {user ?
            <div className="display-overall-wrapper">
                <div className="display-wrapper">
                    <PekoCard front userStr={user && JSON.stringify(user)} />
                    <PekoCard back userStr={user && JSON.stringify(user)} />
                </div>

                <div className="employee-details">
                    <h1>PekoCard</h1>
                    <h5><span>Employee Name:</span> {user.name}</h5>
                    <h5 className="mb-4"><span>Employee ID:</span> {user.employeeID}</h5>
                    <p>
                        Please print the PekoCard below before and wear before entering PekoLand office premises. Tampering with
                        the ID will not be tolerated and will be subject to PekoPunishments. You can check Employees screen to check
                        if you appear under Nousagi employees section.
                    </p>

                    <p className="mb-5">
                        This ID is for entertainment purposes only and should not be used for transactions or identification in real life.
                    </p>

                    <Alert color="danger" isOpen={isPopupBlocked} toggle={toggleBlockedPopup}>
                        The Browser blocked the sign in popup😭. Please allow the popup to proceed with signing in
                    </Alert>
                    
                    <div className="display-footer">
                        {!isMobile && 
                        <button onClick={() => setAction(ACTION_PRINT)}><FiPrinter /> Print</button>}
                        <button onClick={() => setAction(ACTION_DOWNLOAD)}><FiDownload /> Download image</button>

                        <CopyToClipboard text={`${process.env.REACT_APP_API_URL}pekoCard/${user.secret}`} onCopy={() => setIsCopied(true)}>
                            <button id="copyPekocardLink" onMouseLeave={() => setIsCopied(false)}><FiLink /> Copy PekoCard Link</button>
                        </CopyToClipboard>
                        
                        {isCopied &&
                            <Tooltip placement="top" target="copyPekocardLink" isOpen={isCopied} toggle={() => setIsCopied(!isCopied)}>Successfully copied to clipboard!</Tooltip>
                        }

                        <ShareButton secret={user.secret} />
                    </div>
                </div>
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
            </div>
            :
            <LoadingScreen />
            }
        </div>
    )
}

export default DisplayPekoCard