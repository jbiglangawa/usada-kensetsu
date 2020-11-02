import React, {useState} from 'react'
import {InputGroup, Input, Button} from 'reactstrap';
import '../css/Admin.css'

const Admin = props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginBtnOnClick = event => {

    }

    return (
        <div className="admin-wrapper">
            <div className="admin-login">
                <div className="admin-title">Admin Login</div>
                <br />
                <InputGroup>
                    <Input 
                        autofocus 
                        placeholder="username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)} />
                </InputGroup>
                <br />
                <InputGroup>
                    <Input 
                        placeholder="password" 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </InputGroup>
                <br />
                <Button color="secondary" onClick={loginBtnOnClick}>Login as admin</Button>
            </div>
        </div>
    )
}

export default Admin