import React, { useState } from 'react';
import { createProject } from '../../http/api';
import { toast } from 'react-toastify';

const ProjectForm = ({fetchProject}) => {
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
    const handleSubmit = async() => {
        setLoading(true);
        formdata['month'] = months;
        try {
             await createProject(formdata);
             fetchProject();
             toast.success('project is created!');
        } catch (error) {
            toast.error('something went wrong');
        }
        finally{
            setLoading(false);
            setFormData("");
        }
    }

    const { name, status, project, rate} = formdata;

    return (
        <div className="col-lg-8 col-xlg-9 col-md-7">
            <div className="card">

                <div className="card-body">
                    <div className="form-horizontal form-material mx-2">
                    <div className="form-group">
          <label className="col-md-12">Developer Name</label>
          <div className="col-md-12">
            <input type="text" placeholder="Johnathan Doe"
              className="form-control form-control-line" name="name" value={name} onChange={handleFormData} />
          </div>
        </div>
        <div className="form-group">
          <label for="example-email" className="col-md-12">Technology</label>
          <div className="col-md-12">
            <input type="text" placeholder="eg: Reactjs, Nodejs, UI/UX designer"
              className="form-control form-control-line" name="status"
              value={status} onChange={handleFormData}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-12">Project Name</label>
          <div className="col-md-12">
            <input type="text"
              className="form-control form-control-line"
              placeholder='eg: Admin Dashboard'
              name="project"
              value={project} onChange={handleFormData}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-12">Budget</label>
          <div className="col-md-12">
            <input type="number" placeholder="Budget"
              className="form-control form-control-line"
              name="rate"
              value={rate}
              onChange={handleFormData}
            />
          </div>
        </div>
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