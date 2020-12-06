import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { exportComponentAsJPEG } from 'react-component-export-image'
import { Spinner } from 'reactstrap'
import html2canvas from 'html2canvas'
import PekoCard from './PekoCard'
import '../../css/ImagePekocardGenerator.css'

const ImagePekocardGenerator = ({userStr, onDownloadSuccess, getImageURL}) => {
    const [frontPekoCardLoaded, setFrontPekoCardLoaded] = useState(false)
    const [backPekoCardLoaded, setBackPekoCardLoaded] = useState(false)
    const [isFrontDownloaded, setIsFrontDownloaded] = useState(false)
    const [isBackDownloaded, setIsBackDownloaded] = useState(false)

    const [frontImageURI, setFrontImageURI] = useState()
    const [backImageURI, setBackImageURI] = useState()

    const frontPekoCardRef = useRef()
    const backPekoCardRef = useRef()
    
    const user = JSON.parse(userStr)


    const generateImageURI = (node) => {
        const element = ReactDOM.findDOMNode(node.current);
        return html2canvas(element, { scrollY: -window.scrollY, useCORS: true})
    }

    useEffect(() => {
        if(frontPekoCardLoaded && backPekoCardLoaded) {
            if(getImageURL) {
                generateImageURI(frontPekoCardRef).then(canvas => canvas.toDataURL('image/png', 1.0)).then(url => setFrontImageURI(url))
                generateImageURI(backPekoCardRef).then(canvas => canvas.toDataURL('image/png', 1.0)).then(url => setBackImageURI(url))
                setIsFrontDownloaded(false)
                setIsBackDownloaded(false)
            }else {
                exportComponentAsJPEG(frontPekoCardRef, {fileName: `Front ID_${user.id}.jpg`}).then(() => setIsFrontDownloaded(true))
                exportComponentAsJPEG(backPekoCardRef, {fileName: `Back ID_${user.id}.jpg`}).then(() => setIsBackDownloaded(true))
            }
        }
    }, [frontPekoCardLoaded, backPekoCardLoaded, user.id, setIsFrontDownloaded, setIsBackDownloaded, getImageURL])

    useEffect(() => {
        if(isFrontDownloaded && isBackDownloaded) {
            if(onDownloadSuccess) onDownloadSuccess()

            setIsFrontDownloaded(false)
            setIsBackDownloaded(false)
            setBackPekoCardLoaded(false)
            setBackPekoCardLoaded(false)
        }
    }, [onDownloadSuccess, isFrontDownloaded, isBackDownloaded, setIsFrontDownloaded, setIsBackDownloaded])
    
    useEffect(() => {
        if(getImageURL && frontImageURI && backImageURI) {
            getImageURL(frontImageURI, backImageURI)
        }
    }, [getImageURL, frontImageURI, backImageURI])


    return (
        <div className="generate-download-wrapper">
            <div className="generate-mask">
                <span>Generating your PekoCard</span>
                <Spinner />
            </div>
            <PekoCard front large userStr={JSON.stringify(user)} ref={frontPekoCardRef} onLoad={() => setFrontPekoCardLoaded(true)}/>
            <PekoCard back large userStr={JSON.stringify(user)} ref={backPekoCardRef} onLoad={() => setBackPekoCardLoaded(true)}/>
        </div>
    )
}

export default ImagePekocardGenerator