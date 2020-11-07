import React from 'react'

const ExternalLink = props => {
    const {children, href} = props

    return(
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

export default ExternalLink