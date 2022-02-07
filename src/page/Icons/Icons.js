import React from 'react';
import Breadcumb from '../../components/Breadcumb';
import Sectionfour from './Sectionfour';

const Icons = () => {
    return (
        <>
            <Breadcumb title="Font-awesome" />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">41 New Icons in 4.7</h4>
                            <h6 className="card-subtitle">use the icon by just put className <code>fa fa-address-book</code>
                                in i tag </h6>
                                <Sectionfour/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Icons;
