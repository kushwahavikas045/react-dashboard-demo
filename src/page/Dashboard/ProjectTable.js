import React,{useState} from 'react';
import { formateName } from '../../utils/formateName';
import { projectAssigned } from '../../utils/TableData';
const ProjectTable = () => {
 const [month, setMonth] = useState('january');

 //Month
 const handleMonth = (e) =>{
     setMonth(e.target.value);
 }

 const data = projectAssigned.filter((project) => project.month === month);


  return (
    <div className="col-lg-8 d-flex align-items-stretch">
    <div className="card w-100">
        <div className="card-body">
            <div className="d-flex">
                <div>
                    <h5 className="card-title">Projects of the Month</h5>
                </div>
                <div className="ms-auto">
                    <select className="form-select b-0" value={month} onChange={handleMonth}>
                        <option value={"january"}>January</option>
                        <option value={"february"}>February</option>
                        <option value={"march"}>March</option>
                        <option value={"april"}>April</option>
                    </select>
                </div>
            </div>
            <div className="table-responsive mt-3 no-wrap">
                <table className="table vm no-th-brd pro-of-month">
                    <thead>
                        <tr>
                            <th colSpan="2">Assigned</th>
                            <th>Name</th>
                            <th>Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((project) =>(
                            <tr key={project.id}>
                            <td style={{width:"50px"}}><span className="round">{formateName(project.name)}</span></td>
                            <td>
                                <h6>{project.name}</h6><small className="text-muted">{project.status}</small>
                            </td>
                            <td>{project.project}</td>
                            <td>${project.rate}</td>
                        </tr>
                        ))}
                        {/* <tr>
                            <td style={{width:"50px"}}><span className="round">{formateName('sunil Joshi')}</span></td>
                            <td>
                                <h6>Sunil Joshi</h6><small className="text-muted">Web Designer</small>
                            </td>
                            <td>Elite Admin</td>
                            <td>$3.9K</td>
                        </tr> */}
                        <tr className="active">
                            <td><span className="round"><img src="/images/users/2.jpg"
                                        alt="user" width="50"/></span></td>
                            <td>
                                <h6>Andrew</h6><small className="text-muted">Project Manager</small>
                            </td>
                            <td>Real Homes</td>
                            <td>$23.9K</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  );
};

export default ProjectTable;
