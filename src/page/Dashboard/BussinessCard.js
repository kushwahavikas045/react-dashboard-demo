import React from 'react';

const BussinessCard = () => {
  return (
    <div className="col-lg-4 d-flex align-items-stretch">
    <div className="card w-100">
        <div className="up-img" style={{backgroundImage:"url(/images/big/img1.jpg)"}}></div>
        <div className="card-body">
            <h5 className=" card-title">Business development of rules</h5>
            <span className="label label-info label-rounded">Technology</span>
            <p className="mb-0 mt-3">Titudin venenatis ipsum aciat. Vestibu ullamer quam. nenatis
                ipsum ac feugiat. Ibulum ullamcorper.</p>
            <div className="d-flex mt-3">
                <a className="link" href="">Read more</a>
                <div className="ms-auto align-self-center">
                    <a href="" className="link me-2"><i
                            className="fa fa-heart-o"></i></a>
                    <a href="" className="link me-2"><i
                            className="fa fa-share-alt"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default BussinessCard;
