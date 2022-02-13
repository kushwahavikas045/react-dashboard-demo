import React,{useEffect, useState} from 'react'
import { updateProjectById } from '../../http/api';
const UpdateProject = ({id, getProject, fetchProject}) => {
  const [months, setMonth] = useState('january');
  const [formdata, setFormData] = useState({
      name: getProject ? getProject.name : '',
      status: getProject ? getProject.status:'',
      project: getProject ?  getProject.project:'',
      rate: getProject ? getProject.rate : '',
      month: getProject ? getProject.month : '',
  })


  //handle change in formdata
  const handleFormData = (e) => {
      setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  //handle formdata submit
  const handleSubmit = async(id) => {
      formdata['month'] = months;
      try {
        const data = await updateProjectById(id, formdata);
        fetchProject();
      } catch (error) {
        console.log(error);
      }
  }

  //useEffect
  useEffect(() =>{
   setFormData(getProject);
  },[getProject])

  const { name, status, project, rate} = formdata;

  const form = () =>  {
    return (
      <>
      <div className="form-horizontal form-material mx-2">
        <hr />
        <label className="col-md-12" style={{ color: 'orangered', textAlign: 'center' }}>Update form</label>
        <hr />
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
            <input type="text" placeholder="Budget"
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
            <button className="btn btn-success" onClick={() => handleSubmit(id)}>Update project</button>
          </div>
        </div>
      </div>

    </>
    )
  }

  return (
    form()

  )
}

export default UpdateProject;