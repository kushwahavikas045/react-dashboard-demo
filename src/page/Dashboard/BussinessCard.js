import React, { useState } from 'react';
import { Avatar, formateName } from '../../utils/formateName';
import UpdateProject from '../project/UpdateProject';
const BussinessCard = ({ getProject, fetchProject}) => {

    const [update, setUpdate] = useState(false);

    //avatar style
    const avatar = {
        position: 'relative',
        top:'10px',
        left:'10px'
    }

    //update project


    const UpdateForm = (
        <>
            <span className={`${Avatar(getProject?.name)}`} style={avatar}>{formateName(getProject?.name)}</span>
            <div className="card-body">
                <h5 className=" card-title">{getProject?.name}</h5>
                <span className="label label-info label-rounded">{getProject?.status}</span>

                <div className="d-flex mt-3">
                    <p className="mb-0 mt-3">Project Name: <br /><b style={{ color: 'red' }}>{getProject?.project}</b></p>
                    <div className="ms-auto align-self-center">

                        <p className="mb-0 mt-3">Budget: <br /><b style={{ color: 'red' }}>${getProject?.rate}</b></p>
                    </div>
                </div>
                {!update && <button className='btn btn-warning btn-sm mx-2 my-2' onClick={() => setUpdate(true)}>Update Project</button>}
                {update && <UpdateProject id = {getProject.id} getProject = {getProject} fetchProject={fetchProject}/>}
            </div>
        </>
    )

    const Card = (
        <>
        <img src="https://www.shbfinancialservices.com/images/nodatafound.png" class="card-img-top" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text text-center">Click On Project Assigned For Details Description</p>
  </div>
  </>
    )

    const handleData = (project) => {
      if(!project) return Card;
      return UpdateForm;
    }
    return (
        <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card w-100">
                {handleData(getProject)}
            </div>
        </div>
    );
};

export default React.memo(BussinessCard);
