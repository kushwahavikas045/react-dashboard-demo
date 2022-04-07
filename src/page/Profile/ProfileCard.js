import React from 'react';

const ProfileCard = () => {
  return (
    <div className="col-lg-4 col-xlg-3 col-md-5">
    <div className="card">
        <div className="card-body">
            <center className="mt-4"> <img src="/images/users/5.jpg" className="img-circle"
                    width="150" />
                    
                <h4 className="card-title mt-2">Hanna Gover</h4>
                <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                <div className="row text-center justify-content-md-center">
                    <div className="col-4"><a href="" className="link"><i
                                className="fa fa-user"></i>
                            <font className="font-medium">254</font>
                        </a></div>
                    <div className="col-4"><a href="" className="link"><i
                                className="fa fa-camera"></i>
                            <font className="font-medium">54</font>
                        </a></div>
                </div>
            </center>
        </div>
    </div>
</div>
  );
};

export default ProfileCard;
