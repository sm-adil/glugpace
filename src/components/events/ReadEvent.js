import React, { Component } from 'react'
import eventFile from './EventFile.json'

class ReadEvent extends Component {
  state = {
    event: null
  }

  componentDidMount() {
      // Get the post id from route   
    //   let post_id = this.props.match.params.post_id;
      
    eventFile.filter(eventData => {
        // Need some functionality to filter single event and update the state
        console.log(eventData)
        return (
             this.setState({
                event: eventData
            })
        )
    })
           
    
  }
  render() {
      const event = this.state.event ? (
        <div className="data-content">
            <h4 className="data-heading">{this.state.event.title}</h4>
            <p>{this.state.event.body}</p>
        </div>
      ) : (
          <div className="center">Loading event...</div>
      )
      return (
        <div className="padding container">
            {event}
        </div>
      )
  }
}
export default ReadEvent;