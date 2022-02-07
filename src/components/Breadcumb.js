import React from 'react';
import { Link } from 'react-router-dom';
const Breadcumb = ({title}) => {
  return (
  <div className="row page-titles">
  <div className="col-md-5 align-self-center">
      <h3 className="text-themecolor">{title}</h3>
      <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/Dashboard">Home</Link></li>
          <li className="breadcrumb-item active">{title}</li>
      </ol>
  </div>
</div>
  );
};

export default Breadcumb;
