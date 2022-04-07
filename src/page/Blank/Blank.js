import React, { useState, useEffect, useContext } from 'react';
import Breadcumb from '../../components/Breadcumb';
import ProjectForm from './ProjectForm';
import ProjectNumber from './ProjectNumber';
import { project } from '../../http/api';
import AuthContext from '../../store/auth';
import { WriteAccessPermission } from '../../utils/access';
const Blank = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //connect with state
    const authCtx = useContext(AuthContext);
    const{email} = authCtx;
    const localStorageData = JSON.parse(localStorage.getItem('access')) || [];
    let permission = false;
    const Access = WriteAccessPermission(permission, email, localStorageData);
    //fetch project function
    const fetchProject = async () => {
        setLoading(true);
        try {
            const { data } = await project();
            setList(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }

    }
    useEffect(() => {
        let isApi = true;
        if (isApi) {
            fetchProject();
        }
        return () => {
            //cancel subscrption
            isApi = false;
        }

    }, [])


    //count
    const monthCount = {
        january: list.filter((project) => project.month === 'january').length,
        february: list.filter((project) => project.month === 'february').length,
        march: list.filter((project) => project.month === 'march').length,
        april: list.filter((project) => project.month === 'april').length
    }

    return (
        <>
            <Breadcumb title="Create Project" />
            <div className="row">
                <ProjectNumber count={monthCount} loading={loading} error={error} />
                <ProjectForm fetchProject={fetchProject} Access = {Access}/>
            </div>
        </>
    );
};

export default Blank;
