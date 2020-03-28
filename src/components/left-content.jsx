import React from 'react'

import Logo from './logo'
import JHLogo from './jh-logo'
import RebelLogo from './rebel-logo'
import NearformLogo from './nearform-logo'

const LeftContent = () => (
  <>
    <div className="row">
      <div className="col s4 offset-s4 m12">
        <Logo className="logo hoverable responsive-img" />
      </div>
    </div>
    <div className="row">
      <div className="col s10 offset-s1">
        <a className="black-text" href="https://goo.gl/maps/QxbEtBqgypDNAj7X9">
          <address>
            <i className="material-icons valign-middle">place</i>Trent House<br />Station Street<br />Nottingham<br />NG2 3HX
          </address>
        </a>
      </div>
    </div>

    <div className="row sponsor-images">
      <div className="col s3 offset-s2 m6 offset-m3">
        <a href="https://www.wearejh.com/" target="_blank" rel="noopener noreferrer"><JHLogo className="responsive-img" /></a>
      </div>
      <div className="col s5 m8 offset-m2">
        <a href="https://rebelrecruiters.co.uk/" target="_blank" rel="noopener noreferrer"><RebelLogo className="responsive-img" /></a>
      </div>
      <div className="col s4 offset-s4 m8 offset-m2">
        <a href="https://www.nearform.com/" target="_blank" rel="noopener noreferrer"><NearformLogo className="responsive-img" /></a>
      </div>
    </div>

    <p className="light">Would you like to sponsor us? <a className="black-text" href="mailto:contact@nottsjs.org">contact@nottsjs.org</a></p>
  </>
)

export default LeftContent
