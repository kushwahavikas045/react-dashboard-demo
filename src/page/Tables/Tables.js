import React, { useState, useEffect } from 'react';
import Breadcumb from '../../components/Breadcumb';
import axios from 'axios';
import TableError from '../../components/TableError';
import CheckboxFilter from './CheckboxFilter';
var empnol = JSON.parse(localStorage.getItem('empnol'));
var namel = JSON.parse(localStorage.getItem('namel'));
var departl = JSON.parse(localStorage.getItem('departl'));
var techl = JSON.parse(localStorage.getItem('techl'));
var joinl = JSON.parse(localStorage.getItem('joinl'));
const Tables = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [developer, setDeveloper] = useState([]);
    const [joining, setJoining] = useState('joining');
    const [department, setDepartment] = useState('department');
    const [empno, setEmpno] = useState(empnol.empno);
    const [name, setName] = useState(namel.name);
    const [depart, setDepart] = useState(departl.depart);
    const [technology, setTechnology] = useState(techl.tech);
    const [join, setJoin] = useState(joinl.join);

    //dynamic row in table
     //handle checkbox
     const handleEmpno = () => {
        setEmpno(!empno);
        const empnol = {
            empno: !empno
        }
        localStorage.setItem('empnol', JSON.stringify(empnol));
    }
    const handlename = () => {
        setName(!name);
        const namel = {
            name: !name
        }
        localStorage.setItem('namel', JSON.stringify(namel));

    }
    const handledepartment = () => {
        setDepart(!depart);
        const departl = {
            depart: !depart
        }
        localStorage.setItem('departl', JSON.stringify(departl));

    }
    const handletechnology = () => {
        setTechnology(!technology);
        const techl = {
            tech: !technology
        }
        localStorage.setItem('techl', JSON.stringify(techl));

    }
    const handlejoining = () => {
        setJoin(!join);
        const joinl = {
            join: !join
        }
        localStorage.setItem('joinl', JSON.stringify(joinl));

    }



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
    const handleDepartment = (e) => {
        setDepartment(e.target.value);
        setJoining("joining");
        setSearch('');
    }

    //handle Joining
    const handleJoining = (e) => {
        setJoining(e.target.value);
        setDepartment("department");
        setSearch('');
    }

    //handle search
    const handleSearch = (e) => {
        setSearch(e.target.value);
        setJoining('joining');
        setDepartment('department');
    }

    //filter options
    const filter = () => {
        let filterData = developer;
        if (joining === 'joining' && department === 'department' && search === '') {
            filterData = developer;
        }
        if (joining !== 'joining') {
            filterData = developer.filter((join) => join.joining == joining);

        }
        if (department !== 'department') {
            filterData = developer.filter((depart) => depart.department == department);
        }
        if (search !== '') {
            filterData = developer.filter((dev) => dev.name.toLowerCase().includes(search))
        }

        return filterData;
    }

    const Data = filter()?.map((user) => (
        <tr key={user.id}>
           {!empno && <td>{user.id}</td>}
            {!name && <td>{user.name}</td>}
            {!depart && <td>{user.department}</td>}
             {!technology && <td>{user.technology}</td>}
            {!join && <td>{user.joining}</td>}
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

                            <div className="mb-3" >
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
                            <h6 className="card-subtitle">
                            <code>.table</code></h6>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            {!empno && <th>Empno</th>}
                                            {!name &&<th>Name</th>}
                                            {!depart && <th>Department</th>}
                                            {!technology && <th>Technology</th>}
                                            {!join && <th>Joining</th>}
                                        </tr>
                                    </thead>
                                    {loading && Data.length === 0 && <TableError title='loading...' />}
                                    {Data.length === 0 && !loading && <TableError title="No Data Found" />}
                                    {Data.length !== 0 && !loading && <tbody>{Data}</tbody>}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CheckboxFilter
            join = {join} name = {name} empno = {empno} depart = {depart} technology = {technology}
            handleEmpno={handleEmpno} handlename={handlename} handledepartment={handledepartment} handlejoining={handlejoining} handletechnology = {handletechnology}/>
        </>

    );
};

export default Tables;
