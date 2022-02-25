import React, { useState } from 'react';
import { createProject } from '../../http/api';
import { toast } from 'react-toastify';
import ProjectFields from './ProjectFields';

const ProjectForm = ({ fetchProject }) => {
  const [months, setMonth] = useState('january');
  const [formdata, setFormData] = useState({
    name: '',
    status: '',
    project: '',
    rate: '',
  });
  const [loading, setLoading] = useState(false);

  //handle change in formdata
  const handleFormData = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  //handle formdata submit
  const handleSubmit = async () => {
    setLoading(true);
    formdata['month'] = months;
    try {
      await createProject(formdata);
      fetchProject();
      toast.success('project is created!');
    } catch (error) {
      toast.error('something went wrong');
    }
    finally {
      setLoading(false);
      setFormData("");
    }
  }

  const { name, status, project, rate } = formdata;

  return (
    <div className="col-lg-8 col-xlg-9 col-md-7">
      <div className="card">

        <div className="card-body">
          <div className="form-horizontal form-material mx-2">
            <ProjectFields title="Developer" placeholder="Johnathan Doe" name="name" value={name} onChange={handleFormData} />
            <ProjectFields title="Technology" placeholder="eg: Reactjs, Nodejs, UI/UX designer" name="status" value={status} onChange={handleFormData} />
            <ProjectFields title="Project Name"  placeholder='eg: Admin Dashboard' name="project" value={project} onChange={handleFormData}/>
            <ProjectFields title="Budget" placeholder="Budget" name="rate" value={rate} onChange={handleFormData}/>
            <div className="form-group">
              <label className="col-sm-12">Select Month</label>
              <div className="col-sm-12">
                <select name="month" value={months} className="form-control form-control-line" onChange={(e) => setMonth(e.target.value)}>
                  <option value={"january"}>January</option>
                  <option value={"february"}>February</option>
                  <option value={"march"}>March</option>
                  <option value={"april"}>April</option>

                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button className="btn btn-success" onClick={handleSubmit}>{loading ? 'Creating...' : 'Create Project'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectForm