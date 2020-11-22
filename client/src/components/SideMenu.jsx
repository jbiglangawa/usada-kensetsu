import React, { useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { ButtonToggle } from 'reactstrap';
import { Sidebar, Menu, Ref, Segment } from 'semantic-ui-react';
import '../css/SideMenu.css';

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
            <img
                alt="header-logo"
                className="mobile-header-logo"
                src={process.env.PUBLIC_URL + "/header-logo.png"}
            />
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
                <Menu.Item active={isLocationActive('/')} onClick={() => setVisible(false)}>
                    <Link to='/'>HOME</Link>
                </Menu.Item>
                <Menu.Item active={isLocationActive('/projects')}  onClick={() => setVisible(false)}>
                    <Link to='/projects'>PROJECTS</Link>
                </Menu.Item>
                <Menu.Item active={isLocationActive('/our-team')} onClick={() => setVisible(false)}>
                    <Link to='/our-team'>OUR TEAM</Link>
                </Menu.Item>
                <Menu.Item active={isLocationActive('/credits')} onClick={() => setVisible(false)}>
                    <Link to='/credits'>CREDITS</Link>
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