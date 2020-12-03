import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import { Helmet } from 'react-helmet'
import ProjectCell from './ProjectCell'
import LoadingScreen from './LoadingScreen'
import '../css/Projects.css'

const Projects = props => {
    const [projectsList, setProjectsList] = useState()
    const [noProjectInd, setNoProjectInd] = useState(false)

    useEffect(() => {
        // if(!projectsList) {
        //     fetch(`/projects/getProjectsList`)
        //         .then(response => response.json())
        //         .then(data => {
        //             if(data.success) {
        //                 if(data.ProjectsList.length > 0) {
        //                     setProjectsList(data.ProjectsList)
        //                 }else {
        //                     setNoProjectInd(true)
        //                 }
        //             }
        //         })
        // }
    }, [projectsList, setProjectsList])

    let showable_projects;
    if (projectsList) {
        showable_projects = projectsList.map((data, index) => <ProjectCell data={JSON.stringify(data)} key={index} />)
    } else if (noProjectInd) {
        showable_projects = <div>No projects at the moment</div>
    }

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

            {showable_projects ?
                (
                    <div className="projects-grid">
                        {showable_projects}
                    </div>
                )
                :
                <LoadingScreen />
            }
        </div>
    )
}

export default Projects