import React, { Component } from 'react'
import './BlogLaunchCampaign.css';
import {Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

class BlogLaunchCampaign extends Component {
  render() {
      return <Link to="/" className="BlogLaunchCampaign">
      <div  className="BlogLaunchCampaign__logo">
         <span className="BlogLaunchCampaign__cicle"></span>
         <Icon className="BlogLaunchCampaign__icon" name='assistive listening systems' />
      </div>
      <div  className="BlogLaunchCampaign__text">
            <h5 className="BlogLaunchCampaign__h5">Reveal your brand.</h5>
          <h6 className="BlogLaunchCampaign__h6">Attract the world - AI-powered.</h6>
      </div>
       <button className="BlogLaunchCampaign__button">Access to Magnetic</button>
      </Link>;
  }
}

export default BlogLaunchCampaign;