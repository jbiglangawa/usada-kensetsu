import React from 'react'
import {Link, useParams} from 'react-router-dom'
import '../css/Project.css'


const Project = props => {
    const {projectId} = useParams();
    const {data} = props
    const dataParsed = JSON.parse(data ? data : null)
    
    return (
        <div>
            {data ? 
                <Link className="project" to={`/project/${dataParsed.id}`}>
                    <div className="project-thumbnail" style={{backgroundImage: `url(${dataParsed.thumbnail})`}} />
                    <div className="project-title-wrapper">
                        <div className="project-name">{dataParsed.name}</div>
                        <div className="project-date">{dataParsed.date}</div>
                    </div>
                </Link>
            :
                <div></div>
            }
        </div>
    )
}

export default Project