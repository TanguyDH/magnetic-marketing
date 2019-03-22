import React, { Component } from 'react';
import DashboardCreate from '../../components/DashboardCreate/DashboardCreate';
import './DashboardCreatePage.css';
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class DashboardCreatePage extends Component {
    render() {
        return (
            <div className="DashboardCreatePage">
            <Link to='/dashboard' className='DashboardCreatePage__draft'>
                    <Icon name='arrow left' />
            Save As a Draft
            </Link>
                  <DashboardCreate />

            </div>
        );
    }
}
