import React from 'react';

const Select = () => {
  return (
    <div className='drag' style={{background:'black', padding:'5px 5px'}}>
    <select type="select" className="form-select" aria-label="Default select example" style={{cursor:'pointer'}}>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>
  );
};

export default Select;
