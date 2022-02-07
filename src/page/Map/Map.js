import React from 'react';
import Breadcumb from '../../components/Breadcumb';

const Map = () => {
    return (
        <>
            <Breadcumb title="Map" />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Simple Basic Map</h4>
                            <div id="gmaps-simple" className="gmaps"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Map;
