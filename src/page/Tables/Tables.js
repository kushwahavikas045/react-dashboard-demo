import React, { useState, useEffect } from 'react';
import Breadcumb from '../../components/Breadcumb';
import axios from 'axios';
import TableError from '../../components/TableError';
const Tables = () => {
    const[search, setSearch] = useState('');
    const[loading, setLoading] = useState(false);
    const [developer, setDeveloper] = useState([]);
    const [joining, setJoining] = useState('joining');
    const [department, setDepartment] = useState('department');
    const fetchDeveloper = async () => {
        setLoading(true);
        const { data } = await axios.get('https://test-page-e48d7-default-rtdb.firebaseio.com/Developer.json');

        const developerArray = [];

        for (const key in data) {
            developerArray.push({
                id: key,
                name: data[key].name,
                technology: data[key].Technology,
                department: data[key].Department,
                joining: data[key].Joining
            })
        }

        setDeveloper(developerArray);
        setLoading(false);
    }

    useEffect(() => {
        fetchDeveloper();

    }, []);

    //handleDepartment
    const handleDepartment = (e) =>{
        setDepartment(e.target.value);
        setJoining("joining");
        setSearch('');
    }

    //handle Joining
    const handleJoining = (e) =>{
        setJoining(e.target.value);
        setDepartment("department");
        setSearch('');
    }

    //handle search
   const handleSearch = (e) =>{
       setSearch(e.target.value);
       setJoining('joining');
       setDepartment('department');
   }

    //filter by department
    const filter = () =>{
     let filterData = developer;
      if(joining === 'joining' && department === 'department' && search === ''){
          filterData = developer;
      }
      if(joining !== 'joining'){
          filterData = developer.filter((join) => join.joining == joining);

      }
      if(department !== 'department'){
          filterData = developer.filter((depart) => depart.department == department);
       }
       if(search !== ''){
           filterData = developer.filter((dev) => dev.name.toLowerCase().includes(search))
       }

      return filterData;
    }


    const Data = filter()?.map((user) => (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.department}</td>
            <td>{user.technology}</td>
            <td>{user.joining}</td>
        </tr>
    ))

    //test in console


    return (
        <>
            <Breadcumb title="Tables" />
            <div className='row'>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="mb-3">
                                <label className="form-label">Search</label>
                                <input type="text" value={search} className="form-control" placeholder="Search developer"  onChange={handleSearch}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="mb-3">
                                <label className="form-label">Department</label>
                                <select className="form-select" value={department} onChange={handleDepartment}>
                                    <option value={'department'}>Filter By Department</option>
                                    <option value={"mobile"}>Mobile</option>
                                    <option value={"web"}>Web</option>
                                    <option value={"cloud"}>Cloud</option>
                                    <option value={"graphics"}>Graphics</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="mb-3">
                                <label className="form-label">Joining Year</label>
                                <select class="form-select" aria-label="Default select example" value={joining} onChange={handleJoining}>
                                    <option value={'joining'}>Filter By Joining</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Basic Table</h4>
                            <h6 className="card-subtitle">Add className <code>.table</code></h6>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Emp no</th>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th>Technology</th>
                                            <th>Joining</th>
                                        </tr>
                                    </thead>
                                        {loading && Data.length === 0 && <TableError title='loading...'/>}
                                        {Data.length === 0 && !loading && <TableError title="No Data Found"/>}
                                        {Data.length !== 0 && !loading && <tbody>{Data}</tbody>}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Tables;
