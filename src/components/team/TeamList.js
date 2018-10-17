import React, { Component } from 'react'
import Member from './Member'

class TeamList extends Component {
  state = {
      members: [
          {id: '1', name: 'Sheik Mohammed Adil', username: 'elmentrix'},
          {id: '2', name: 'Nikhil Amin', username: 'nikhilamin073'},
          {id: '3', name: 'Aditi Naik', username: 'aditinaik'},
          {id: '4', name: 'Ahmed Saifullah', username: 'Ahmed Saifullah'},
          {id: '5', name: 'Mohammed Shakir', username: 'voidxyzvoidxyz'},
          {id: '6', name: 'Hasna Akbar Ali', username: 'hasna-akbarali'},
          {id: '7', name: 'Shahana Ankalgi', username: 'shahana98'},
          {id: '8', name: 'Saleh Arafath', username: 'saleharafath'},
          {id: '9', name: 'Anagha Premraj', username: 'anagha428'}
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