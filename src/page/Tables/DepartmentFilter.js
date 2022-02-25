import React from 'react';

const DepartmentFilter = ({department, handleDepartment}) => {

    const options = [
        {text:'Filter By Department', value:'department'},
        {text:'Mobile', value:'mobile'},
        {text:'Web', value:'web'},
        {text:'Cloud', value:'cloud'},
        {text:'Graphics', value:'graphics'}
    ]
  return (
    <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="mb-3">
                                <label className="form-label">Department</label>
                                <select className="form-select" value={department} onChange={handleDepartment}>
                                    {options.map((opt) =>(
                                        <option value={opt.value} key={opt.value}>{opt.text}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default DepartmentFilter;