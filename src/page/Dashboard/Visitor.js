import React from 'react';
import VisitorChart from './VisitorChart';

const Visitor = () => {
  return (
    <div className="col-lg-4">
    <div className="card">
        <div className="card-body">
            <div className="d-flex mb-4 no-block">
                <h5 className="card-title mb-0 align-self-center">Our Visitors</h5>
                <div className="ms-auto">
                    <select className="form-select b-0">
                        <option selected="">Today</option>
                        <option value="1">Tomorrow</option>
                    </select>
                </div>
            </div>
            <div id="visitor" style={{height:"260px",width: "100%"}}>
                <VisitorChart/>
            </div>
            <ul className="list-inline mt-4 text-center font-12">
                <li><i className="fa fa-circle text-purple"></i> Tablet</li>
                <li><i className="fa fa-circle text-success"></i> Desktops</li>
                <li><i className="fa fa-circle text-info"></i> Mobile</li>
            </ul>
        </div>
    </div>
</div>
  );
};

export default Visitor;
