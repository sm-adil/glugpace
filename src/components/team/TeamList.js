import React, { Component } from 'react'
import Member from './Member'

class TeamList extends Component {
  state = {
      members: [
          {id: '1', name: 'Sheik Mohammed Adil', username: 'elmentrix', role: 'President | Website Maintainer'},
          {id: '2', name: 'Mohammed Shakir', username: 'voidxyzvoidxyz', role: 'Vice President | Administrator'},
          {id: '3', name: 'Hasna Akbar Ali', username: 'hasna-akbarali', role: 'Content Manager'},
          {id: '4', name: 'Saleh Arafath', username: 'saleharafath', role: 'Treasuree | FSMK Coordinator'},
          {id: '5', name: 'Nikhil Amin', username: 'nikhilamin073', role: 'Member | Technical Lead'},
          {id: '6', name: 'Aditi Naik', username: 'aditinaik', role: 'Member | Marketing Lead'},
          {id: '7', name: 'Anagha Premraj', username: 'anagha428', role: 'Coordinator'},
          {id: '8', name: 'Shahana Ankalgi', username: 'shahana98', role: 'Coordinator'},
          {id: '9', name: 'Ahmed Saifullah', username: 'Ahmed Saifullah', role: 'Coordinator'}
      ]
  }
  render() {
    return (
        <div className="padding container">
            <div className="team-container">
                <Member members={this.state.members} />
            </div>
        </div>
    )
  }
}
export default TeamList;