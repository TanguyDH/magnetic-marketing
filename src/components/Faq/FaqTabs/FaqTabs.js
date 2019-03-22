import React, { Component } from 'react'
import './FaqTabs.css';

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PricingFaq from './PricingFaq/PricingFaq';
import MagnetFaq from './MagnetFaq/MagnetFaq';
import RecommandationFaq from './RecommandationFaq/RecommandationFaq';
import DataAndContentsFaq from './dataAndContentsFaq/dataAndContentsFaq';

export default class FaqTabs extends Component {
  render() {
    return (
      <div className="FaqTabs">
        <Tabs>
          <TabList >
          
            <Tab>Magnet</Tab>
            <Tab>Recommandation</Tab>
            <Tab>Data and contents</Tab>
            <Tab>Pricing</Tab>
          </TabList>

        
         
                <TabPanel>
                    <MagnetFaq />
                </TabPanel>
                <TabPanel>
                    <RecommandationFaq />
                </TabPanel>
                <TabPanel>
                    <DataAndContentsFaq />
                </TabPanel>
                <TabPanel>
             <PricingFaq />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}


// <Tab menu={{ text: true }} panes={panes} />