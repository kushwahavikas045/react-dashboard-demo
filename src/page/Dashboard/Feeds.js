import React from 'react';

const Feeds = () => {
  return (
    <div className="col-lg-6">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Feeds</h5>
            <ul className="feeds">
                <li>
                    <div className="bg-light-info"><i className="fa fa-bell-o"></i></div> You have 4 pending
                    tasks. <span className="text-muted">Just Now</span>
                </li>
                <li>
                    <div className="bg-light-success"><i className="fa fa-server"></i></div> Server #1
                    overloaded.<span className="text-muted">2 Hours ago</span>
                </li>
                <li>
                    <div className="bg-light-warning"><i className="fa fa-shopping-cart"></i></div> New
                    order received.<span className="text-muted">31 May</span>
                </li>
                <li>
                    <div className="bg-light-danger"><i className="fa fa-user"></i></div> New user
                    registered.<span className="text-muted">30 May</span>
                </li>
                <li>
                    <div className="bg-light-inverse"><i className="fa fa-bell-o"></i></div> New Version
                    just arrived. <span className="text-muted">27 May</span>
                </li>
                <li>
                    <div className="bg-light-info"><i className="fa fa-bell-o"></i></div> You have 4 pending
                    tasks. <span className="text-muted">Just Now</span>
                </li>
                <li>
                    <div className="bg-light-danger"><i className="fa fa-user"></i></div> New user
                    registered.<span className="text-muted">30 May</span>
                </li>
            </ul>
        </div>
    </div>
</div>
  );
};

export default Feeds;
