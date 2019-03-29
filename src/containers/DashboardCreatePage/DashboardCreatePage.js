import React, { Component } from 'react';
import DashboardCreate from '../../components/DashboardCreate/DashboardCreate';
import './DashboardCreatePage.css';
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import DashboardNavigation from '../../components/DashboardNavigation/DashboardNavigation';

export default class DashboardCreatePage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
       }
    render() {
        return (
            <div className="DashboardCreatePage">
             <DashboardNavigation />
             
                <DashboardCreate />

            </div>
        );
    }
}
