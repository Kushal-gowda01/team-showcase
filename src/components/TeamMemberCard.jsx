import React from 'react'

const TeamMemberCard = ({members}) => {
    return (
        <div className="team-member-card">
            <h2> Name: {members.name}</h2>
            <h3>Role: {members.role}</h3>
            <br></br>
        </div>
    )
}

export default TeamMemberCard;