import React from 'react';
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const SideMenu = ({ children, ...props }) => {

    const SideBarContent = (
        <div style={{height: '100vh'}}>
            <ListGroup>
                <ListGroupItem className="justify-content-between"><Link to='/'>HOME</Link></ListGroupItem>
                <ListGroupItem className="justify-content-between"><Link to='/projects'>PROJECTS</Link></ListGroupItem>
                <ListGroupItem className="justify-content-between"><Link to='/our-team'>OUR TEAM</Link></ListGroupItem>
                <ListGroupItem className="justify-content-between"><Link to='/credits'>CREDITS</Link></ListGroupItem>
            </ListGroup>
            <div>
                <img
                    width="100%"
                    alt="header-logo"
                    src={process.env.PUBLIC_URL + "/header-logo.png"}
                />

            </div>
        </div>
    )

    return (<Sidebar {...props} sidebar={
        SideBarContent
    } styles={{ sidebar: { background: "white", zIndex: 999 } }}>
        {children}
    </Sidebar>)

}

export default SideMenu;