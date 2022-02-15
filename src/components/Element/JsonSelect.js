import React, {useContext} from 'react'
import { FormContext } from '../Formcontext'
const JsonSelect = ({label, id, className, option}) => {
  const {handleChange} = useContext(FormContext);
    return (
    <div class="form-group">
    <>
            <label className="form-label">{label ? label : 'select'}</label>
            <select className="form-select" aria-label="Default select example"
                onChange={event => handleChange(id, event)}
            >
                <option >Open this select menu</option>
                {option.length > 0 && option.map((option, i) =>
                    <option value={option.props.value ? option.props.value : option.props.children} key={i}>{option.props.children}</option>

                )}
            </select>
        </>
  </div>
  )
}

export default JsonSelect;