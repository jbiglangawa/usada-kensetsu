import React, { useState } from 'react'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import { FaShare } from 'react-icons/fa'
import {
    FacebookShareButton,
    LineShareButton,
    RedditShareButton,
    TwitterShareButton,

    FacebookIcon,
    FacebookMessengerIcon,
    LineIcon,
    RedditIcon,
    TwitterIcon,
    FacebookMessengerShareButton
  } from "react-share"
import '../../css/ShareButton.css'

const ShareButton = ({secret}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const pekocardLink = `${process.env.REACT_APP_API_URL}pekoCard/${secret}`

    const toggle = () => setDropdownOpen(!dropdownOpen)

    return (
        <button>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}><FaShare /> Share</DropdownToggle>
                <DropdownMenu className="share-dropdown-menu-wrapper">
                    <div className="share-dropdown-menu">
                        <FacebookShareButton url={pekocardLink} hashtag='#usadaKensetsuPekoCard'><FacebookIcon size={28} round /> Facebook</FacebookShareButton>
                        <LineShareButton url={pekocardLink}><LineIcon size={28} round/> Line</LineShareButton>
                        <TwitterShareButton url={pekocardLink} hashtags={['usadaKensetsuPekoCard']}><TwitterIcon size={28} round /> Twitter</TwitterShareButton>
                        <FacebookMessengerShareButton url={pekocardLink} appId={process.env.REACT_APP_MESSENGER_ID}><FacebookMessengerIcon size={28} round /> Messenger</FacebookMessengerShareButton>
                        <RedditShareButton url={pekocardLink}><RedditIcon size={28} round /> Reddit</RedditShareButton>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </button>
    )
}

export default ShareButton