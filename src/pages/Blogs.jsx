import React from 'react'
import { Blogs as BlogComponent } from '../components'

const Blogs = () => {
    // const summary = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta laudantium dolores repellat quo? Molestias laborum est explicabo, nemo enim quaerat odio? Iure quae iusto cupiditate vero dicta nobis provident voluptatum quaerat ducimus et sapiente saepe maxime totam, laudantium asperiores corrupti ut natus minus. Expedita perferendis facere non optio repudiandae libero, illo rerum excepturi possimus blanditiis deserunt autem voluptates eum hic.'
    return (
      <>
      {/* <Breadcrum title={'Blogs'} summary={summary}/> */}
      <div style={{marginTop: '60px'}}>
      <BlogComponent />
      </div>
      </>
    )
}

export default Blogs