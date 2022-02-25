import React from 'react'

const ProjectNumber = ({count, loading, error}) => {
    return (
        <div className="col-lg-4 col-xlg-3 col-md-5">
            <div className="card">
                <div className="card-body">
                       {!loading && !error &&
                       <>
                        <h4 className="card-title mt-2">January ({count.january})</h4>
                        <h4 className="card-title mt-2">February ({count.february})</h4>
                        <h4 className="card-title mt-2">March ({count.march})</h4>
                        <h4 className="card-title mt-2">April ({count.april})</h4>
                       </>}
                       {loading &&
                        <h4 className="card-title mt-2" style={{textAlign:'center', marginTop:'5%'}}>Loading...</h4>
                       }
                       {!loading && error && <h6 className='mt-2'>Server error, try later...</h6>}

                </div>
            </div>
        </div>

    )
}

export default ProjectNumber