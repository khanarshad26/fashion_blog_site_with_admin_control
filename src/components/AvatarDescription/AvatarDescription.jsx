import React from 'react';
import Avatar from '../../assets/img/user.png';
import { BadgeNative } from '../../fusion-ui';

const AvatarDescription = () => {
  const style = {
    marginBottom: '0px',
    fontWeight: '100',
    fontSize: '13px',
  };
  return (
    <>
        <div style={{margin: '30px 0px 5px 0px'}} className="comments">
        <h4 className="comments-count">Instructors</h4>
        <div id="comment-1" style={{width: '25rem'}} className="comment">
          <div className="d-flex">
            <div className="comment-img">
              <img style={{width: '60px', borderRadius: '60px', marginRight: '30px'}} src={Avatar} alt="" />
            </div>
            <div>
              <h5 style={{marginBottom: '0px', marginTop: '8px'}}>
                <span style={{marginBottom: '2px'}}>Hariom Singh {" "}</span>
                <BadgeNative label="Top Instructor" color="secondary" />
              </h5>
              <p style={style}>Senior Cloud Technologist</p>
              {/* <p style={style}>Factset Systems, India</p> */}
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default AvatarDescription;