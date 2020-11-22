import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import { Helmet } from 'react-helmet'
import ProjectCell from './ProjectCell'
import '../css/Projects.css'

const Projects = props => {
    const [projectsList, setProjectsList] = useState()
    const [noProjectInd, setNoProjectInd] = useState(false)

    useEffect(() => {
        if(!projectsList) {
            fetch(`/projects/getProjectsList`)
                .then(response => response.json())
                .then(data => {
                    if(data.success) {
                        if(data.ProjectsList.length > 0) {
                            setProjectsList(data.ProjectsList)
                        }else {
                            setNoProjectInd(true)
                        }
                    }
                })
        }
    }, [projectsList, setProjectsList])

    return (
        <div className="projects-wrapper">
            <Helmet>
                <title>Projects - Usada Constructions🥕</title>
                <meta property="og:title" content={"Projects - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Projects - Usada Constructions🥕"} />
            </Helmet>
            <div className="projects-header">
                <div className="ph-title">PROJECTS</div>
            </div>

            <div className="projects-grid">
                {projectsList ? 
                    projectsList.map((data, index) => <ProjectCell data={JSON.stringify(data)} key={index} />) 
                : 
                noProjectInd ?
                    <div>No projects at the moment</div>
                :
                    <div className="loading">
                        <Spinner color="secondary" />
                        <div className="loading-text">Loading...</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Projects