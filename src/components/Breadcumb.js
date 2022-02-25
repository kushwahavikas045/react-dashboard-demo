import React from 'react';
import { Link } from 'react-router-dom';
const Breadcumb = ({ title, button, buttonTitle, onClick}) => {
  return (
    <div className="row page-titles">
      <div className="col-md-5 align-self-center">
        <h3 className="text-themecolor">{title}</h3>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/Dashboard">Home</Link></li>
          <li className="breadcrumb-item active">{title}</li>
        </ol>
      </div>

      {button ? (<div class="col-md-7 align-self-center">
        <a className="btn waves-effect waves-light btn btn-info pull-right hidden-sm-down text-white"
        onClick={onClick}
        >{buttonTitle}</a>
      </div>) : ''}



    </div>
  );
};

export default Breadcumb;
