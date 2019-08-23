import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({events}) => {
  const eventList = events.length ? (
    events.map(event => {
        return (
          <div className="event-card" key={event.id}>
            <div className="event-details">
              <Link to={'/glugpace/events/' + event.title.replace(/\s+/g, '-').toLowerCase()}>
                <img className="event-image" src={require(`${event.imageURl}`)} alt="event" />
              </Link>
              <div className="event-desc">
                <h2 className="event-title">
                  <Link to={'/glugpace/events/' + event.title.replace(/\s+/g, '-').toLowerCase()}>{event.title}</Link>
                </h2>
                <p className="event-date">{event.date}</p>
              </div>
            </div>
          </div>
        )
    })
  ) : (
    <div className="center">No events yet!</div>
  )
  return (
    <React.Fragment>
        { eventList }
    </React.Fragment>
  )
}
export default Event;