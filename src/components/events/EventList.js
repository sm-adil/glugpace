import React, { Component } from 'react'
import Event from './Event'

const events = require('./EventFile').events.reverse();

class EventList extends Component {
  state = {
    events: events
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