import React from 'react'
import { Link } from 'react-router-dom'
import image from '../layout/images/students.png'

const Event = ({events}) => {
  const eventList = events.length ? (
    events.map(event => {
        console.log(event)
        return (
            <div className="event-card" key={event.id}>
                <div className="event-details">
                    <img className="event-image" src={image} alt="event" />
                    <div className="event-desc">
                        <Link to={'/events/' + event.id}>
                            <p className="event-title">{event.title}</p>
                        </Link>
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