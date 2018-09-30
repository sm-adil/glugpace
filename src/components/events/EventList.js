import React, { Component } from 'react'
import eventFile from './EventFile.json'
import Event from './Event'

class EventList extends Component {
  state = {
    events: eventFile
  }
  render() {
    return (
      <div className="padding container">
        <div className="event-container">
          <Event events={this.state.events}/>
        </div>
      </div>
    )
  }
}
export default EventList;