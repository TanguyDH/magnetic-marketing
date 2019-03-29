import React, { Component } from 'react'
import './Footer.css';
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <div className="footer__box">
          <a
            href="mailto:team@heymagnetic.com"
            className="Footer__link"
          >
            team@heymagnetic.com
          </a>
        </div>

        {/* <Link to="/cgu"  className="footer__cgu">
          CGU
        </Link> */}
      </div>
    );
  }
}


export default Footer;