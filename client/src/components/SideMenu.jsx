import React, { useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { ButtonToggle } from 'reactstrap';
import { Sidebar, Menu, Ref, Segment } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next'
import LanguageOptions from './LanguageOptions'
import { headerLogo } from '../helpers/images'
import '../css/SideMenu.css';

const MenuItemStyle = {
    display: 'inline-block',
    height: '100%',
    width: '100%'
}

const SideMenu = ({ children }) => {
    const segmentRef = useRef();
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const [t] = useTranslation("header")


    const isLocationActive = name => {
        return location.pathname === name;
    }

    return (
        <Sidebar.Pushable as={Segment.Group} raised>
            <div className="side-menu-header">
                <ButtonToggle className="mobile-menu-button" color='white' onClick={() => setVisible(prev => !prev)}><GiHamburgerMenu size="1.5em"></GiHamburgerMenu></ButtonToggle>
                <div className="mobile-header-logo-container">

                    <Link to='/'>
                        <img
                            alt="header-logo"
                            className="mobile-header-logo"
                            src={headerLogo}
                        />
                    </Link>
                    <div className="mobile-language-dropdown">
                        <LanguageOptions mobile={true}/>
                    </div>
                </div>
                
            </div>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                onHide={() => setVisible(false)}
                vertical
                target={segmentRef}
                visible={visible}
                width='wide'
                className="sidebar"
            >
                <Menu.Item as="div" active={isLocationActive('/')} onClick={() => setVisible(false)}>
                    <Link style={MenuItemStyle} to='/'>{t("HOME")}</Link>
                </Menu.Item>
                <Menu.Item as="div" active={isLocationActive('/projects')} onClick={() => setVisible(false)}>
                    <Link style={MenuItemStyle} to='/projects'>{t("PROJECTS")}</Link>
                </Menu.Item>
                <Menu.Item as="div" active={isLocationActive('/our-team')} onClick={() => setVisible(false)}>
                    <Link style={MenuItemStyle} to='/our-team'>{t("OUR TEAM")}</Link>
                </Menu.Item>
                <Menu.Item as="div" active={isLocationActive('/credits')} onClick={() => setVisible(false)}>
                    <Link style={MenuItemStyle} to='/credits'>{t("CREDITS")}</Link>
                </Menu.Item>

            </Sidebar>

            <Ref innerRef={segmentRef}>
                <Sidebar.Pusher dimmed={visible}>
                    <Segment>
                        {children}
                    </Segment>
                </Sidebar.Pusher>
            </Ref>

        </Sidebar.Pushable>)

}

export default SideMenu;