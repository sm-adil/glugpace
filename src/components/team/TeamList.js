import React, { Component } from 'react'
import Member from './Member'

class TeamList extends Component {
  state = {
      members: [
          {id: '1', name: 'Ahmed Saifullah'},
          {id: '2', name: 'Joythi Prakash'},
          {id: '3', name: 'Nikhil Amin'},
          {id: '4', name: 'Aditi Naik'},
          {id: '5', name: 'Sheik Mohammed Adil'},
          {id: '6', name: 'Suhail Afzal'},
          {id: '7', name: 'Meem Sikandar Khan'},
          {id: '8', name: 'Mohammed Salman Mohideen'},
          {id: '9', name: 'Mohammed Shakir'},
          {id: '10', name: 'Hasna Akbar ali'},
          {id: '11', name: 'Shahana Ankalgi'},
          {id: '12', name: 'Saleh Arafath'},
          {id: '13', name: 'Anagha Premraj'},
          {id: '14', name: ''}
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