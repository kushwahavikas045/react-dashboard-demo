import React, { useState } from 'react';

const Container = ({ code, handleElementData }) => {
const [formData, setFormData] = useState({
  name:'',
  label:'',
  placeholder:''
});

const handleChange  = (e) =>{
  setFormData({...formData, [e.target.name] : e.target.value});
}


const {name, label, placeholder} = formData;
  return (
    <>
      <div className="col-lg-4 col-xlg-3 col-md-5">
        <div className='card'>
        <h4 style={{padding:'10px 10px', textAlign:'center'}}>Input Element Data</h4>
        <div class="mb-3">
        <input class="form-control form-control-sm" name='name' value={name} type="text" placeholder="Name" onChange={handleChange}/>
        </div>
        <div class="mb-3">
        <input class="form-control form-control-sm" name='label' value={label} type="text" placeholder="Label" onChange={handleChange}/>
        </div>
        <div class="mb-3">
        <input class="form-control form-control-sm" name='placeholder' value={placeholder} type="text" placeholder="Placeholder" onChange={handleChange}/>
        </div>
        <div class="mb-3">
        <button className='btn btn-primary' onClick={() => {handleElementData(formData, setFormData)}}>Submit</button>
        </div>
        </div>
      </div>

    </>
  );
};

export default Container;
