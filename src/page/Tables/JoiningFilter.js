import React from 'react'

const JoiningFilter = ({joining, handleJoining}) => {
  return (
    <div className='col-4'>
    <div className='card'>
        <div className='card-body'>
            <div className="mb-3">
                <label className="form-label">Joining Year</label>
                <select className="form-select" aria-label="Default select example" value={joining} onChange={handleJoining}>
                    <option value={'joining'}>Filter By Joining</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    </div>
</div>
    )
}

export default JoiningFilter;