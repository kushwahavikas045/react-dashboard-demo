import React from 'react';
import Breadcumb from '../../components/Breadcumb';

const Blank = () => {
    return (
        <>
            <Breadcumb title="Blank" />
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            This is some text within a card block.
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Blank;
