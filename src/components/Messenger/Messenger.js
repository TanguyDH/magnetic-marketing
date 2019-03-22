import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';
import './Messenger.css';

class Messenger extends Component {
    render() {
        return <div className="messsenger">
            <a href="https://www.m.me/288398428546133" target="_blank" rel="noopener noreferrer">
              <Icon name="facebook messenger" color="blue" />
            </a>
          </div>;
    }
}


export default Messenger;