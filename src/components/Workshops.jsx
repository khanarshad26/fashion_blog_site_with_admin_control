import React from 'react';
import { events } from '../pages/BlogPage';
import EventCard from './Events';

const Events = ({limit}) => {
    const eventsToShow = limit ? events.slice(0,3) : events;
    
  return (
    <>
    <section id="popular-courses" className="courses">
        <div className="container">
          <div className="section-title">
            <h2>Events</h2>
            <p>Popular Events</p>
          </div>
          <div className="row">
            {eventsToShow.map((event, i) => <EventCard key={'workshop_'+i} event={event} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Events;