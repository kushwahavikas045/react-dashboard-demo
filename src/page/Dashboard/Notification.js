import React from 'react';

const Notification = () => {
  return (
    <div className="col-lg-6 col-md-12">
    <div className="card card-body mailbox">
        <h5 className="card-title">Notification</h5>
        <div className="message-center" style={{height: "420px !important"}}>

            <a href="#">
                <div className="btn btn-danger btn-circle"><i className="fa fa-link"></i></div>
                <div className="mail-contnet">
                    <h6 className="text-dark font-medium mb-0">Luanch Admin</h6> <span className="mail-desc">Just see the my new admin!</span>
                    <span className="time">9:30 AM</span>
                </div>
            </a>

            <a href="#">
                <div className="btn btn-success btn-circle"><i className="fa fa-calendar-check-o"></i></div>
                <div className="mail-contnet">
                    <h6 className="text-dark font-medium mb-0">Event today</h6> <span className="mail-desc">Just a reminder that you have
                        event</span> <span className="time">9:10 AM</span>
                </div>
            </a>

            <a href="#">
                <div className="btn btn-info btn-circle"><i className="fa fa-cog text-white"></i></div>
                <div className="mail-contnet">
                    <h6 className="text-dark font-medium mb-0">Settings</h6> <span className="mail-desc">You can customize this template as you
                        want</span> <span className="time">9:08 AM</span>
                </div>
            </a>

            <a href="#">
                <div className="btn btn-primary btn-circle"><i className="fa fa-user"></i></div>
                <div className="mail-contnet">
                    <h6 className="text-dark font-medium mb-0">Pavan kumar</h6> <span className="mail-desc">Just see the my admin!</span> <span
                        className="time">9:02 AM</span>
                </div>
            </a>

            <a href="#">
                <div className="btn btn-info btn-circle"><i className="fa fa-cog text-white"></i></div>
                <div className="mail-contnet">
                    <h6 className="text-dark font-medium mb-0">Customize Themes</h6> <span className="mail-desc">You can customize this template as you
                        want</span> <span className="time">9:08 AM</span>
                </div>
            </a>

            <a href="#">
                <div className="btn btn-primary btn-circle"><i className="fa fa-user"></i></div>
                <div className="mail-contnet">
                    <h6 className="text-dark font-medium mb-0">Pavan kumar</h6> <span className="mail-desc">Just see the my admin!</span> <span
                        className="time">9:02 AM</span>
                </div>
            </a>
        </div>
    </div>
</div>
  );
};

export default Notification;
