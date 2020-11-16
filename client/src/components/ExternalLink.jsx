import React from 'react'
import {FiExternalLink} from 'react-icons/fi'
import '../css/ExternalLink.css'

const ExternalLink = ({children, href, excludeIcon, style}) => {
    
    return(
        <a className="external-link" href={href} target="_blank" rel="noopener noreferrer" style={style}>
            {children}
            {!excludeIcon && <FiExternalLink className="link-icon" />}
        </a>
    )
}

export default ExternalLink