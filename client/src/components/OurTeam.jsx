import React, { useEffect, useState } from 'react'
import {Spinner} from 'reactstrap';
import Employee from './Employee'
import '../css/OurTeam.css'

const OurTeam = props => {
    const [teamList, setTeamList] = useState()

    useEffect(() => {
        if(!teamList) {
            fetch(`/employees/getEmployeesList`)
                .then(response => response.json())
                .then(data => {
                    setTeamList(data.EmployeesList)
                })
        }
    }, [teamList, setTeamList])

    return (
        <div className="ourteam-wrapper">
            <div className="ourteam-header">
                <div className="ot-title">OUR TEAM</div>
            </div>

            <div className="ourteam-body">
                {teamList ? 
                    teamList.map(employee => <Employee data={JSON.stringify(employee)} />)
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

export default OurTeam