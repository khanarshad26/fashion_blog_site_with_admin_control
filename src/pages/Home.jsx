import React from 'react';
import { Blogs, Events } from '../components';

const Home = () => {
  return (
    <>
    <div style={{paddingTop: '60px'}}>
      <Blogs limit/>
      <Events limit/>
    </div>
    </>
  )
}

export default Home