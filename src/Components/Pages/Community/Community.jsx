import React from "react"
import tc from "../../../assets/img/tc.png"
import "./Community.css"

const Community = () => {
    const handleClick = () => {
        window.open('https://chat.whatsapp.com/H1qQxz2ivy0x5XE4Og0b',"_blank")
    }
  return (
    <div className="container">
      <div className="community-wrapper">
        <div className="community-img">
          <img src={tc} alt="" />
        </div>
        <div className="community-content">
          <h2 className="community-title">Join Our Free Tech Community</h2>
          <p>
            Unlock the power of knowledge and innovation by joining our vibrant
            and free WhatsApp tech community
          </p>
          <button className="register-btn" onClick={handleClick}>Join Now</button>
        </div>
      </div>
    </div>
  )
}

export default Community
