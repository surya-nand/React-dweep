import React from 'react'

export default function Footer() {
  return (
    <div>     
    <div class="footer">
        <div class="footerLeft">
            <p>Prompt Generator</p>
            <p>Dweep Daily</p>
            <p>All Contributors</p>
            <p>Your data on Dweep.io</p>
            <p>Contribute to Dweep</p>
        </div>
    <div class="footerRight">
        <p>Dweep.io</p>
        <p>Made with love in India</p>
        <div class="Logo">
            <img class="instalogo" src= {require ('./images/InstagramLogo.png')} alt="---"></img>
            <img class="Linkedinlogo" src= {require('./images/LinkedinLogo.png')} alt="---"></img>
        </div>
        <br></br>
        <p class="hello">hello@dweep.io</p>
        </div>
    </div>
  </div>
  )
}
