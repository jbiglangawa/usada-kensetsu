import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import ProjectCell from './ProjectCell'
import '../css/Projects.css'

const Projects = props => {
    const [t] = useTranslation(["header", "commons"])
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
                <title>{t("PROJECTS")} - {t("Usada Constructions")}🥕</title>
                <meta property="og:title" content={"Projects - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Projects - Usada Constructions🥕"} />
            </Helmet>
            <div className="projects-header">
                <div className="ph-title">{t("PROJECTS")}</div>
            </div>

            <div className="projects-grid">
                {projectsList ? 
                    projectsList.map((data, index) => <ProjectCell data={JSON.stringify(data)} key={index} />) 
                : 
                noProjectInd ?
                    <div>{t("No projects at the moment")}</div>
                :
                    <div className="loading">
                        <Spinner color="secondary" />
                        <div className="loading-text">{t("commons:Loading")}</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Projects