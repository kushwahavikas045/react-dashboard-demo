import React from 'react'

const ProjectNumber = ({count, loading}) => {
    return (
        <div className="col-lg-4 col-xlg-3 col-md-5">
            <div className="card">
                <div className="card-body">
                       {!loading &&
                       <>
                        <h4 className="card-title mt-2">January ({count.january})</h4>
                        <h4 className="card-title mt-2">February ({count.february})</h4>
                        <h4 className="card-title mt-2">March ({count.march})</h4>
                        <h4 className="card-title mt-2">April ({count.april})</h4>
                       </>}
                       {loading &&
                        <h4 className="card-title mt-2" style={{textAlign:'center', marginTop:'5%'}}>Loading...</h4>
                       }

                </div>
            </div>
        </div>

    )
}

export default ProjectNumber