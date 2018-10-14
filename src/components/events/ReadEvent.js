import React, { Component } from 'react'
const events = require('./EventFile').events; //Always use this standard

class ReadEvent extends Component {
  state = {
    event: null
  }

  componentDidMount() {
      // Get the event id from route   
      let event_id = Number(this.props.match.params.event_id);
      let selectedEvent;
        events.forEach(event => {
            if (event.id === event_id) {
                selectedEvent = event;
            }
        });
        return (
            this.setState({
                event:selectedEvent
            })
        )
  }
  render() {
      const event = this.state.event ? (
        <div className="data-content">
            <img className="data-image" src={require(`${this.state.event.imageURl}`)} alt="event" />
            <h2 className="data-heading">{this.state.event.title} </h2>
            <p className="data-date">Date: {this.state.event.date}</p>
            <p className="data-venue">Venue: {this.state.event.venue}</p>

            {/* Used dangerouslySetInnerHTML to display html tags associated with json data */}
            <div dangerouslySetInnerHTML={{__html: this.state.event.body}} className="data-body"></div>
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