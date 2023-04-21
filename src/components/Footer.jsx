import React from 'react'

const Footer = () => {
  return (
    <>
    <footer id="footer">
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright <strong><span>ElectrogenLabs</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ */}
              Designed by <span href="https://fimblr.com/" target="_blank">Fimblr.com</span>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <span className="facebook"><i className="bx bxl-facebook" /></span>
            <span className="instagram"><i className="bx bxl-instagram" /></span>
            <span className="linkedin"><i className="bx bxl-linkedin" /></span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer