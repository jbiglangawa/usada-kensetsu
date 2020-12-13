import React from 'react'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../css/ProjectCell.css'

const ProjectCell = props => {
    const [t, i18n] = useTranslation()
    const currentLanguage = i18n.language
    const {data} = props
    const dataParsed = JSON.parse(data)

    return (
        <div className="project">
            <Link to={`/project/${dataParsed.id}`}>
                <img className="project-thumbnail" src={dataParsed.thumbnail} alt=""/>

                <div className="project-title-wrapper">
                    <div className="project-name">{dataParsed.name[currentLanguage]}</div>
                    <div className="project-date">{dataParsed.date[currentLanguage]}</div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCell