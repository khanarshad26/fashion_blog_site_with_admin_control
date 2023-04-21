import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <section id="hero" style={{marginTop: '60px'}} className="d-flex justify-content-center align-items-center">  
        <div className="container position-relative">
          <h1>Learning Today,<br />Leading Tomorrow</h1>
          <h2>Experience industrial exposure and gain practical technical knowledge through our Events & Events</h2>
          <Link to='/Events' style={{textDecoration: 'none'}} className="btn-get-started">Get Started</Link>
        </div>
      </section>
    </>
  )
}

export default Hero