import React, { useEffect, useState } from 'react'
import Project from './Project'
import ProjectsListJSON from '../assets/projectslist.json'
import '../css/Projects.css'

const Projects = props => {
    const [projectsList, setProjectsList] = useState()

    useEffect(() => {
        if(!projectsList) {
            console.log(ProjectsListJSON)
            setProjectsList(ProjectsListJSON.ProjectsList)
        }
    })

    return (
        <div className="projects-wrapper">
            <div className="projects-header">
                <div className="ph-title">PROJECTS</div>
            </div>

            <div className="projects-grid">
                {projectsList ? 
                    projectsList.map((data, index) => <Project data={JSON.stringify(data)} key={index} />) 
                    : 
                    <div>No projects at the moment</div>
                }
            </div>
        </div>
    )
}

export default Projects