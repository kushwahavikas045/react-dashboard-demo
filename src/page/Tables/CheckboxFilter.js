import React from 'react'
const CheckboxFilter = ({
    handleEmpno,
    handlename,
    handledepartment,
    handlejoining,
    handletechnology,
    name, empno, depart, join, technology
}) => {

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <h4 className="card-title m-4">Hide or show (row)</h4>
                    <div className="card-body" style={{ display: 'flex', justityContent: 'center', flexWrap: 'wrap' }}>

                        <div className="form-check" onClick={handleEmpno}>
                            <input className="form-check-input" type="checkbox" checked={empno} />
                            <label className="form-check-label">
                                Emp no
                            </label>
                        </div>
                        <div className="form-check" onClick={handlename}>
                            <input className="form-check-input" name="name" type="checkbox" checked={name} />
                            <label className="form-check-label">
                                Name
                            </label>
                        </div>
                        <div className="form-check" onClick={handledepartment}>
                            <input className="form-check-input" name="department" type="checkbox" checked={depart} />
                            <label className="form-check-label">
                                Department
                            </label>
                        </div>
                        <div className="form-check" onClick={handletechnology}>
                            <input className="form-check-input" name="technology" type="checkbox" checked={technology} />
                            <label className="form-check-label">
                                Technology
                            </label>
                        </div>
                        <div className="form-check" onClick={handlejoining}>
                            <input className="form-check-input" name="joining" type="checkbox" checked={join} />
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