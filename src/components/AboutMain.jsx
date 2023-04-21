import React from 'react';
import About1Image from '../assets/img/about1.png';

const AboutMain = () => {
  return (
    <>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <h3>Learning new tech is fun</h3>
              <img src={About1Image} className="img-fluid rounded-4 mb-4" alt="" />
              <p>If you are also passionate about technology as we are let's start learning these things</p>
              <p>It still facinates me how electricity create artificial memory and how these microcontroller so simple at its core yet able to perform the most complex functions</p>
            </div>
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <p>
                Whether you're a student looking to gain practical technical knowledge in Industry or eagerly 
                looking to network with future colleagues and collaborators, Experience industrial exposure and 
                gain practical technical knowledge through our Events & Events.
                </p>
                <p>
                We also provides business-to-business training which aim to provide you with useful skills 
                that you can use in your workplace. Our courses are specifically designed to complement your 
                industry and workplace, helping you advance your career and make the most of your potential.
                </p>
                <div className="position-relative mt-4">
                  <img src="assets/img/about.jpg" className="img-fluid rounded-4" alt="" />
                  <span className="glightbox play-btn" ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutMain