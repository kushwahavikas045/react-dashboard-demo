import React,{useState, useEffect, useCallback} from 'react';
import Breadcumb from '../../components/Breadcumb';
import BussinessCard from './BussinessCard';
import ProjectTable from './ProjectTable';
import Sales from './Sales';
import Visitor from './Visitor';
import Notification from './Notification';
import Feeds from './Feeds';
import {project, getProjectById} from '../../http/api';
const Dashboard = () => {
  const [getProject, setGetProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [singleProject, setSingleProject] = useState(null);
 //fetch asssigned project
const fetchProject = async() =>{
  setLoading(true);
  try {
      const {data} = await project();
      setGetProject(data);
      setLoading(false);
  } catch (err) {
      setError(true);
      setLoading(false);
  }

}

useEffect(() =>{
fetchProject();
},[])

//handle update project
const handleUpdateProject = useCallback(async(id) =>{

  try {

    const {data} = await getProjectById(id);
    setSingleProject(data);

  } catch (error) {
    console.log(error);
  }
},[]);

  return (
    <>
      <Breadcumb title="Dashboard"/>
      <div className='row'>
        <Sales/>
        <Visitor/>
      </div>
      <div className='row'>
        <ProjectTable update={handleUpdateProject}  error = {error} loading = {loading} project = {getProject} fetchProject={fetchProject}/>
        <BussinessCard getProject = {singleProject} projectFn= {project} fetchProject = {fetchProject}/>
      </div>
      <div className='row'>
        <Notification/>
        <Feeds/>
      </div>
    </>
  );
};

export default Dashboard;
