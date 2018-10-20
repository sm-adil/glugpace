import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({events}) => {
  const eventList = events.length ? (
    events.map(event => {
        return (
            <div className="event-card" key={event.id}>
                <Link to={'/glugpace/events/' + event.title.replace(/\s+/g, '-').toLowerCase()}>                
                    <div className="event-details">
                        <img className="event-image" src={require(`${event.imageURl}`)} alt="event" />
                        <div className="event-desc">
                           <p className="event-title">{event.title}</p>
                           <p className="event-date">{event.date}</p>
                        </div>
                    </div>
                </Link>
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