import React from 'react'

function Navbar() {
  return (
    <div class="header">
      <div class="headerLeft">
        <h1>An inspiring design delivered to your inbox every morning</h1>
        <p class="paraL">
          Our team scouts the internet for the best designs, illustrations and
          art and delivers a truly inspiring one every day to your inbox
        </p>
        <h3>Show me how it looks</h3>
        <div class="registerblock">
          <input class="input" type="text" placeholder="Your e-mail address" />
          <button class="button">Register Now</button>
        </div>
        <span class="Freenodata">Free - No Spam - No Data Sharing</span>
      </div>
      <div class="headerRight">
        <div class="ImageContainer">
          <img class="hrphoto" src= { require('./images/Vector (2).png')} alt="---"></img>
        </div>
      </div>
    </div>
  )
}
export default Navbar;