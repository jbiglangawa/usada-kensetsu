import React from 'react'
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import '../css/Employee.css'

const Employee = props => {
    const {data} = props
    const dataParsed = JSON.parse(data)

    return (
        <div className="employee-wrapper">
            <div className="thumbnail-wrapper">
                <img src={dataParsed.thumbnail} className="employee-thumbnail" alt="employee-thumbnail"/>
            </div>
            <div className="employee-details">
                <div className="e-name">{dataParsed.name}</div>
                <div className="e-role">{dataParsed.role}</div>
                <div className="e-description">{dataParsed.description}</div>
                {dataParsed.youtube ?
                    <a href={dataParsed.twitter}><AiOutlineTwitter /></a>
                : null }
                {dataParsed.youtube ?
                    <a href={dataParsed.youtube}><AiFillYoutube /></a>
                : null }
            </div>
        </div>
    )
}

export default Employee