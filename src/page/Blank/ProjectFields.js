import React from 'react'

const ProjectFields = ({title, placeholder,name, value, onChange}) => {
  return (
    <div className="form-group">
          <label className="col-md-12">{title}</label>
          <div className="col-md-12">
            <input type="text"
              className="form-control form-control-line"
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
  )
}

export default ProjectFields;