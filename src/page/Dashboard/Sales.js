import React from 'react';
import ChartSales from './ChartSales';


const Sales = () => {
  return (
    <div className="col-lg-8">
        <div className="card">
            <div className="card-body">
                <div className="d-flex no-block">
                    <div>
                        <h5 className="card-title mb-0">Sales Chart</h5>
                    </div>
                    <div className="ms-auto">
                        <ul className="list-inline text-center font-12">
                            <li><i className="fa fa-circle text-success"></i> SITE A</li>
                            <li><i className="fa fa-circle text-info"></i> SITE B</li>
                            <li><i className="fa fa-circle text-primary"></i> SITE C</li>
                        </ul>
                    </div>
                </div>
                <div className="" style={{height: "355px"}}>
                  <ChartSales/>
                </div>
            </div>
        </div>
    </div>


  );
};

export default Sales;
