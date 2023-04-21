import React from 'react'
import { Events as EventsComponent } from '../components'

const Events = () => {
  // const summary = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta laudantium dolores repellat quo? Molestias laborum est explicabo, nemo enim quaerat odio? Iure quae iusto cupiditate vero dicta nobis provident voluptatum quaerat ducimus et sapiente saepe maxime totam, laudantium asperiores corrupti ut natus minus. Expedita perferendis facere non optio repudiandae libero, illo rerum excepturi possimus blanditiis deserunt autem voluptates eum hic.'
  return (
    <>
    {/* <Breadcrum title={'Events'} summary={summary}/> */}
    <div style={{paddingTop: '60px'}}>
    <EventsComponent />
    </div>
    </>
  )
}

export default Events