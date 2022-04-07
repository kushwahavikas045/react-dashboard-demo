import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Breadcumb from '../../components/Breadcumb';
import TableError from '../../components/TableError';
import CheckboxFilter from './CheckboxFilter';
import { DynamicRowHideAndShow } from '../../utils/TableData';
import SearchFilter from './SearchFilter';
import DepartmentFilter from './DepartmentFilter';
import JoiningFilter from './JoiningFilter';

const { empnol, namel, departl, techl, joinl } = DynamicRowHideAndShow();

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

    const fetchDeveloper = async () => {
        //api function
        setLoading(true);
        try {
            const { data } = await axios.get('https://test-page-e48d7-default-rtdb.firebaseio.com/Developer.json');
            const Tablearray = [];
            for (const key in data) {
                Tablearray.push({
                    id: key,
                    name: data[key].name,
                    technology: data[key].Technology,
                    department: data[key].Department,
                    joining: data[key].Joining
                })
            }

            setDeveloper(Tablearray);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
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
        if (joining !== 'joining') filterData = developer?.filter((join) => join.joining == joining);
        if (department !== 'department') filterData = developer?.filter((depart) => depart.department == department);
        if (search !== '') filterData = developer?.filter((dev) => dev.name.toLowerCase().includes(search))
         return filterData ;
    }


       let Data = filter().map(({ id, name: names, department, joining, technology: techno }) => (
            <tr key={id}>
                {!empno && <td>{id}</td>}
                {!name && <td>{names}</td>}
                {!depart && <td>{department}</td>}
                {!technology && <td>{techno}</td>}
                {!join && <td>{joining}</td>}
            </tr>
        ))


    //test in console


    return (
        <>
            <Breadcumb title="Tables" />
            <div className='row'>
                <SearchFilter search={search} handleSearch={handleSearch} />
                <DepartmentFilter department={department} handleDepartment={handleDepartment} />
                <JoiningFilter joining={joining} handleJoining={handleJoining} />

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
                                            {!name && <th>Name</th>}
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
                join={join}
                name={name}
                empno={empno}
                depart={depart}
                technology={technology}
                setEmpno={setEmpno}
                setDepart={setDepart}
                setName={setName}
                setTechnology={setTechnology}
                setJoin={setJoin}
            />
        </>

    );
};

export default Tables;
