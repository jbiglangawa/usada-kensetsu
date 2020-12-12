import React, { useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { ButtonToggle } from 'reactstrap';
import { Sidebar, Menu, Ref, Segment } from 'semantic-ui-react';
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


    const isLocationActive = name => {
        return location.pathname === name;
    }

    return (
        <Sidebar.Pushable as={Segment.Group} raised>
            <div className="side-menu-header">
                <ButtonToggle className="mobile-menu-button" color='white' onClick={() => setVisible(prev => !prev)}><GiHamburgerMenu size="1.5em"></GiHamburgerMenu></ButtonToggle>
                <div className="mobile-header-logo-container">

                    <img
                        alt="header-logo"
                        className="mobile-header-logo"
                        src={headerLogo}
                    />
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
                    <Link style={MenuItemStyle} to='/'>HOME</Link>
                </Menu.Item>
                <Menu.Item as="div" active={isLocationActive('/projects')} onClick={() => setVisible(false)}>
                    <Link style={MenuItemStyle} to='/projects'>PROJECTS</Link>
                </Menu.Item>
                <Menu.Item as="div" active={isLocationActive('/our-team')} onClick={() => setVisible(false)}>
                    <Link style={MenuItemStyle} to='/our-team'>OUR TEAM</Link>
                </Menu.Item>
                <Menu.Item as="div" active={isLocationActive('/credits')} onClick={() => setVisible(false)}>
                    <Link style={MenuItemStyle} to='/credits'>CREDITS</Link>
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