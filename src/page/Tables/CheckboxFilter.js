import React from 'react';
import { handleEmpno, handledepartment, handlejoining, handlename, handletechnology } from '../../utils/TableData';
const CheckboxFilter = ({
    setEmpno,
    setDepart,
    setName,
    setTechnology,
    setJoin,
    name, empno, depart, join, technology
}) => {

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <h4 className="card-title m-4">Hide or show (row)</h4>
                    <div className="card-body" style={{ display: 'flex', justityContent: 'center', flexWrap: 'wrap' }}>

                        <div className="form-check" onClick={() =>handleEmpno(setEmpno, empno)}>
                            <input className="form-check-input" type="checkbox" checked={empno} onChange={handleEmpno}/>
                            <label className="form-check-label">
                                Emp no
                            </label>
                        </div>
                        <div className="form-check" onClick={() => handlename(setName, name)}>
                            <input className="form-check-input" name="name" type="checkbox" checked={name} onChange={handlename}/>
                            <label className="form-check-label">
                                Name
                            </label>
                        </div>
                        <div className="form-check" onClick={() => handledepartment(setDepart, depart)}>
                            <input className="form-check-input" name="department" type="checkbox" checked={depart}  onChange={handledepartment}/>
                            <label className="form-check-label">
                                Department
                            </label>
                        </div>
                        <div className="form-check" onClick={() =>handletechnology(setTechnology, technology)}>
                            <input className="form-check-input" name="technology" type="checkbox" checked={technology} onChange={handletechnology}/>
                            <label className="form-check-label">
                                Technology
                            </label>
                        </div>
                        <div className="form-check" onClick={() => handlejoining(setJoin, join)}>
                            <input className="form-check-input" name="joining" type="checkbox" checked={join} onChange={handlejoining}/>
                            <label className="form-check-label">
                                Joining
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckboxFilter