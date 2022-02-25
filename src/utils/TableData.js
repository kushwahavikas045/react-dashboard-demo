import axios from "axios";
export const DynamicRowHideAndShow = () =>{
// get object from localstorage
var empnol = JSON.parse(localStorage.getItem('empnol'));
var namel = JSON.parse(localStorage.getItem('namel')) ;
var departl = JSON.parse(localStorage.getItem('departl'));
var techl = JSON.parse(localStorage.getItem('techl'));
var joinl = JSON.parse(localStorage.getItem('joinl'));

if(empnol == null){
    empnol = {
        empno: false
    }
}
if(namel == null){
    namel = {
        name: false
    }
}

if(departl == null){
    departl = {
        depart : false
    }

}

if(techl == null){
    techl = {
       tech : false
    }
}

if(joinl == null){
    joinl = {
        join: false
    }
}

 return {empnol, namel, departl, techl, joinl};
}

//dynamic row function
export const handleEmpno = (setEmpno, empno) =>{
     setEmpno(!empno);
     const empnol = {
         empno: !empno
     }
     localStorage.setItem('empnol', JSON.stringify(empnol));
}

export const handlename = (setName, name) => {
    setName(!name);
    const namel = {
        name: !name
    }
    localStorage.setItem('namel', JSON.stringify(namel));
}

export const handledepartment = (setDepart, depart) => {
    setDepart(!depart);
    const departl = {
        depart: !depart
    }
    localStorage.setItem('departl', JSON.stringify(departl));
}

export const handletechnology = (setTechnology, technology) => {
    setTechnology(!technology);
    const techl = {
        tech: !technology
    }
    localStorage.setItem('techl', JSON.stringify(techl));
}

export const handlejoining = (setJoin, join) => {
    setJoin(!join);
    const joinl = {
        join: !join
    }
    localStorage.setItem('joinl', JSON.stringify(joinl));
}

//api call in table
export const fetchTableData = async(setLoading, setDeveloper) =>{
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
    setLoading(false)
    return setDeveloper(developerArray)
}

//multiple filter option

export const multipleFilter = (developer, joining, department, search) =>{
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