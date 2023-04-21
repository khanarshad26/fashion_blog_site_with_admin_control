import React from 'react'

const About = ({limit}) => {
  return (
    <>
    <section id="about" className="about">
        <div className="container">
        { !limit ? <div className="section-title" style={{marginTop: '60px'}}>
        <h2>About Us</h2>
        <p>Who we are</p>
      </div> : null}
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="assets/img/landing_intro.jpg" style={{borderRadius: '1rem'}} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Learning today, Leading Tomorrow</h3>
              <p>
                We are the comapny of Three friends graduated from NIT Andhrapradesh in Mechanical Engineering, 
                Electrical Engineering and Electronics Engineering. We three share the same passion and suffered 
                the same issues that college students face while trying different techs to keep our hands on.
                Sometimes resources so sometimes guidance we lacked, was the biggest trouble for the most parts. So we always had a 
                dream to provide engineering students and aspiring technologist to guide and support as better 
                as we can. hence we formed this company to help students all over india.
              </p>
              <p>
                We are as much as fascinated with tech as you are, with a hope to use technology and hone 
                our carrer as we want. And you know what it's fun and top of that understatnding the tech is 
                dream of every students at it's core.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About