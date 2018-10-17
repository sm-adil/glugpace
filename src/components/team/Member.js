import React from 'react'
// import memberpic from '../layout/images/logo.png'

const Member = ({members}) => {
  const memberList = members.map(member => {
    return (
        <div className="member-card" key={member.id}>
            <div className="member-details">
                <img className="member-image" src={`https://avatars1.githubusercontent.com/${member.username}?size=100`} alt="member" />
                <div className="member-data">
                    <p className="member-name">{member.name}</p>
                    <p className="member-role">{member.role}</p>
                </div>
            </div>
        </div>
      )
  })
  return (
      <React.Fragment>
          { memberList }
      </React.Fragment>
  )
}
export default Member;