import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <section id="wrapper" className="error-page">
    <div className="error-box">
        <div className="error-body text-center">
            <h1>404</h1>
            <h3 className="text-uppercase">Page Not Found !</h3>
            <p className="text-muted mt-4 mb-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
            <Link to="/Dashboard" className="btn btn-info btn-rounded waves-effect waves-light mb-5 text-white">Back to home</Link>
        </div>
    </div>
</section>
  );
};

export default PageNotFound;
