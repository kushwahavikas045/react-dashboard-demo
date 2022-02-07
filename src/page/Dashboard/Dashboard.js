import React from 'react';
import Breadcumb from '../../components/Breadcumb';
import BussinessCard from './BussinessCard';
import ProjectTable from './ProjectTable';
import Sales from './Sales';
import Visitor from './Visitor';
import Notification from './Notification';
import Feeds from './Feeds';
const Dashboard = () => {
  return (
    <>
      <Breadcumb title="Dashboard"/>
      <div className='row'>
        <Sales/>
        <Visitor/>
      </div>
      <div className='row'>
        <ProjectTable/>
        <BussinessCard/>
      </div>
      <div className='row'>
        <Notification/>
        <Feeds/>
      </div>
    </>
  );
};

export default Dashboard;
