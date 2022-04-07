import React, { useState, useContext } from 'react';
import TableError from '../../components/TableError';
import { Avatar, formateName } from '../../utils/formateName';
import { deleteProject } from '../../http/api';
import { toast } from 'react-toastify'
import AuthContext from '../../store/auth';
import { deleteAccessPermission } from '../../utils/access';
const ProjectTable = ({ error, loading, project, fetchProject, update, permission }) => {
    const [month, setMonth] = useState('january');

    //getMonth
    const handleMonth = (e) => {
        setMonth(e.target.value);
    }

    //filter month
    const data = project.filter((project) => project.month === month);

    //get email from context api
    const authCtx = useContext(AuthContext);
    const {email} = authCtx;
    const localStorageData = JSON.parse(localStorage.getItem('access'));
    let deletePermission = false;
    const Access = deleteAccessPermission(deletePermission, email, localStorageData);
    //delete project
    const handleDeleteProject = async (id) => {
        const result = window.confirm("Sure you went to Delete?");
        if (result && !Access) {
           await deleteProject(id);
           toast.success('sucessfully delete your project');
            fetchProject();
        }else{
            toast.error('Permission denied');
        }
    }
    const AccessData = () =>{
        if(permission){
            return <TableError title='No Read permission'/>
        }else{
            return data.map((project) => (
                <tr key={project.id} style={{cursor:'pointer'}}>
                    <td style={{ width: "50px" }}><span className={`${Avatar(project.name)}`}>{formateName(project.name)}</span></td>
                    <td>
                        <h6>{project.name}</h6><small className="text-muted">{project.status}</small>
                    </td>
                    <td>{project.project}</td>
                    <td>${project.rate}
                        <div>
                            <div className="btn-group btn-group-sm" role="group" aria-label="...">
                                <button type="button" className="btn btn-danger" onClick={() => handleDeleteProject(project.id)}><i className="fa fa-trash"></i></button>
                                <button type="button" className="btn btn-warning" onClick={() => update(project.id)}><i className="fa fa-file"></i></button>
                            </div>
                        </div>
                    </td>
                </tr>
            ))
        }
    }

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
                            {error && !loading && <TableError title="Server Error, try later" />}
                            {loading && <TableError title="loading please wait..." />}
                            {data.length === 0 && !loading && !error && <TableError title={`No, Data Found In ${month}`} />}
                            {data.length !== 0 && !loading &&
                                <tbody>
                                 {AccessData()}
                                </tbody>
                            }

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProjectTable);
