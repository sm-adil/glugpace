import React, { Component } from 'react'
const events = require('./EventFile').events; //Always use this standard

class ReadEvent extends Component {
  state = {
    event: null
  }

    componentDidMount() {
        // Get the event id/title from route   
        let event_title = this.props.match.params.event_id;
        let selectedEvent;
        events.forEach(event => {
            if (event.title.replace(/\s+/g, '-').toLowerCase() === event_title) {
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
            <div className="data-desc">
              <h2 className="data-heading">{this.state.event.title} </h2>
              <p className="data-date">Date: {this.state.event.date}</p>
              <p className="data-venue">Venue: {this.state.event.venue}</p>
              <hr />

              {/* Used dangerouslySetInnerHTML to display html tags associated with json data */}
              <div dangerouslySetInnerHTML={{__html: this.state.event.body}} className="data-body"></div>
            </div>
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