import React,{useContext} from 'react'
import { FormContext } from '../Formcontext';

const JsonInput = ({id, label, className, value}) => {
  const {handleChange} = useContext(FormContext);
    return (
    <div class="form-group">
    <label for="exampleInputEmail1">{label}</label>
    <input type="text" className={className} placeholder={label ? label: ''} value={value}
    onChange = {event => handleChange(id, event)}
    />
  </div>
  )
}

export default JsonInput;