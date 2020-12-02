import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Spinner } from 'reactstrap';
import { BiArrowBack } from 'react-icons/bi'
import { Helmet } from 'react-helmet'
import CubicalSegment from './CubicalSegment'
import Source from './Source'
import '../css/Project.scss'
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { mobileBreakPoint } from '../helpers/responsive'

const Project = () => {
    const {projectId, showByDefault} = useParams()
    const [projectData, setProjectData] = useState()
    const [noProjectInd, setNoProjectInd] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: mobileBreakPoint });

    useEffect(() => {
        if(projectId && !projectData) {
            fetch(`/projects/getProject/${projectId}`)
                .then(response => response.json())
                .then(data => {
                    if(data[0]) {
                        setProjectData(data[0])
                    } else {
                        setNoProjectInd(true)
                    }
                });
        }
    }, [projectId, projectData])
    
    return (
        <div className={classNames("project-page", {mobile: isMobile})}>
            {projectId && projectData ?
                <div className="project-page-wrapper">
                    <Helmet>
                        <title>{projectData.name} - Usada Constructions🥕</title>
                        <meta property="og:title" content={projectData.name + " - Usada Constructions🥕"} />
                        <meta property="og:image" content="%PUBLIC_URL%/meta.png" />
                        <meta property="twitter:title" content={projectData.name + " - Usada Constructions🥕"} />
                        <meta property="twitter:image" content={projectData.thumbnail} />
                    </Helmet>

                    <Link to="/projects" className="pp-back">
                        <BiArrowBack />
                        <div className="pp-back-label">Back to projects</div>
                    </Link>

                    <div className="pp-title-wrapper">
                        <div className="pp-title">{projectData.name}</div>
                        <div className="pp-date">{projectData.date}</div>
                    </div>

                    {projectData.cubical ?
                        <div className="segment">
                            <div className="segment-title">Replica of structure:</div>
                            <CubicalSegment data={JSON.stringify(projectData.cubical)} showByDefault={showByDefault} />
                        </div>
                        :
                        null
                    }

                    {projectData.source_url ? 
                        <div className="segment source-url">
                            <div className="segment-title">Sources:</div>
                            <div className="sources-body">
                                {projectData.source_url instanceof Array ?
                                    projectData.source_url.map(source => <Source url={source} />)
                                :
                                    <Source url={projectData.source_url} />
                                }
                            
                            </div>
                        </div>
                        :
                        null
                    }

                    {projectData.summary_url ? 
                        <div className="segment source-url">
                            <div className="segment-title">Summary Clips:</div>
                            <div className="sources-body">
                                {projectData.summary_url instanceof Array ?
                                    projectData.summary_url.map(source => <Source url={source} />)
                                :
                                    <Source url={projectData.summary_url} />
                                }
                            </div>
                        </div>
                        :
                        null
                    }

                    {projectData.reaction_url ? 
                        <div className="segment source-url">
                            <div className="segment-title">Reaction clips:</div>
                            <div className="sources-body">
                                {projectData.reaction_url instanceof Array ?
                                    projectData.reaction_url.map(source => <Source url={source} />)
                                :
                                    <Source url={projectData.reaction_url} />
                                }
                            </div>
                        </div>
                        :
                        null
                    }
                    
                </div>
            : noProjectInd ?
                <div className="project-not-found">
                    Project not found
                </div>

            :
                <div className="loading">
                    <Spinner color="secondary" />
                    <div className="loading-text">Loading...</div>
                </div>
            }
        </div>
    )
}

export default Project