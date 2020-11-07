import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import {Spinner} from 'reactstrap';
import {BiArrowBack} from 'react-icons/bi'
import CubicalSegment from './CubicalSegment'
import Source from './Source'
import '../css/Project.css'


const Project = props => {
    const [projectData, setProjectData] = useState()
    const [noProjectInd, setNoProjectInd] = useState(false)
    const {projectId} = useParams()

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
        <div className="project-page">
            {projectId && projectData ?
                <div className="project-page-wrapper">
                    <Link to="/projects" className="pp-back">
                        <BiArrowBack />
                        <div className="pp-back-label">Back to project</div>
                    </Link>

                    <div className="pp-title-wrapper">
                        <div className="pp-title">{projectData.name}</div>
                        <div className="pp-date">{projectData.date}</div>
                    </div>

                    {projectData.cubical_url ?
                        <div className="segment">
                            <div className="segment-title">Replica of structure:</div>
                            <CubicalSegment url={projectData.cubical_url} />
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
                <div>Project not found</div>

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