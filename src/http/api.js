import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:8000'
})

//fetch project
export const project = async() =>{
    return await api.get('/project');
}

//delete project
export const deleteProject = async(id) =>{
    return await api.delete(`/project/${id}`);
}

//project get by id
export const getProjectById = async(id) =>{
    return await api.get(`/project/${id}`);
}

//update project
export const updateProjectById = async(id, formdata) =>{
    return await api.patch(`/project/${id}`, formdata);
}

//create project
export const createProject = async(formdata) =>{
    return await api.post(`/project`, formdata);
}

export default api;
