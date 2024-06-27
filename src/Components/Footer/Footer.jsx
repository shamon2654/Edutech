import React from "react"
import "./Footer.css"
import footer from "../../assets/img/footer.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>EduTech</h2>
            </div>
            <p>
              Transforming education with hands-on and technology based learning
              solutions in educational campuses and organizations across the
              Middle East.
            </p>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <a href="">Our Programs</a>
              </li>
              <li>
                <a href="">Our Plan</a>
              </li>
              <li>
                <a href="">Become a Member</a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Support Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
