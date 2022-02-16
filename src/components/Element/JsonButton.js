import React,{useContext} from 'react';
import { FormContext } from '../Formcontext';

const JsonButton = ({id, type,}) => {

  const {handleSubmit}  = useContext(FormContext);
  return (
    <button type={type} id={id} className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
  )
}

export default JsonButton