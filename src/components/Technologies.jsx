import React from 'react';
import { ArduinoTechLogo, EmbeddedSystemsLogo, IOTTechLogo, RoboticsTechLogo, RPiTechLogo, SimulationLogo } from '../assets/img/logos';

const Technologies = () => {
    const techs = [ArduinoTechLogo, RPiTechLogo, IOTTechLogo, RoboticsTechLogo, EmbeddedSystemsLogo, SimulationLogo];
  return (
    <>
    <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="row">
            {techs.map((tech, i) => <Tech key={'tech_'+i} tech={tech} />)}
          </div>
        </div>
      </section>
    </>
  )
}

const Tech = ({tech}) => {
    return (
        <>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={tech} className="img-fluid" alt="" />
        </div>
        </>
    )
}

export default Technologies