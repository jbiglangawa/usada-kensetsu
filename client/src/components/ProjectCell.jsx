import React from 'react'
import {Link} from 'react-router-dom'
import '../css/ProjectCell.css'

const ProjectCell = props => {
    const {data} = props
    const dataParsed = JSON.parse(data)

    return (
        <div className="project">
            <Link to={`/project/${dataParsed.id}`}>
                <img className="project-thumbnail" src={dataParsed.thumbnail} alt=""/>

                <div className="project-title-wrapper">
                    <div className="project-name">{dataParsed.name}</div>
                    <div className="project-date">{dataParsed.date}</div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCell