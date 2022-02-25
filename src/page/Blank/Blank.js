import React, { useState, useEffect } from 'react';
import Breadcumb from '../../components/Breadcumb';
import ProjectForm from './ProjectForm';
import ProjectNumber from './ProjectNumber';
import { project } from '../../http/api';
const Blank = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
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
                <ProjectForm fetchProject={fetchProject} />
            </div>
        </>
    );
};

export default Blank;
