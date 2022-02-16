import React,{useContext} from 'react'
import { FormContext } from '../Formcontext';

const JsonInput = ({id, label, className, value, name, placeholder}) => {
  const {handleChange} = useContext(FormContext);
    return (
    <div class="form-group">
    <label for="exampleInputEmail1">{label}</label>
    <input type="text" id={id} className={className} placeholder={placeholder} value={value} name={name}
    onChange = {event => handleChange(name, event)}
    />
  </div>
  )
}

export default JsonInput;