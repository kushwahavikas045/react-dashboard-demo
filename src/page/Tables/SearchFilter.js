import React from 'react';

const SearchFilter = ({search, handleSearch}) => {
    return (
        <div className='col-4'>
            <div className='card'>
                <div className='card-body'>
                    <div className="mb-3" >
                        <label className="form-label">Search</label>
                        <input type="text"
                        value={search} className="form-control"
                        placeholder="Search developer"
                        onChange={handleSearch} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFilter