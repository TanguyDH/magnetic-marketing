import React, { Component } from 'react'
import './MoreSectionNetwork.css';
import {Link} from 'react-router-dom';


export default class MoreSectionNetwork extends Component {
  render() {
    return (
      <div className="MoreSectionNetwork">
        <div className="MoreSectionNetwork__box">
          <p className="MoreSectionNetwork__text">
            &rarr; Find out why using Magnetic to promote your product is
            the most effective and innovative
            solution regardless of the size of your business.
          </p>

          <Link className="MoreSectionNetwork__button" to="/solution">
            Learn more
          </Link>
        </div>
      </div>
    );
  }
}

