import React, { useState, useEffect } from 'react'
import Breadcumb from '../../components/Breadcumb';
const AccessUser = () => {
    //method steps
    //1 get data from localstorage
    const getData = localStorage.getItem('access');
    let parseData = JSON.parse(getData) || [];
    const [user, setUser] = useState([]);
    console.log(parseData);
    //fetch email and put in table
    useEffect(() => {
        setUser(parseData)
    }, [])
   //write or get
 const handleRead = (email) =>{
    const funData = JSON.parse(getData);
    for (var i = 0; i < funData.length; i++) {
      if(email === funData[i].email){  //look for match with name
          funData[i].options = {
              create: !user[i].options.create,
              post: user[i].options.post,
              update: user[i].options.update,
              delate: user[i].options.delate
          } ;  //add two
          break;  //exit loop since you found the person
      }
   }
   setUser(funData);
   localStorage.setItem("access", JSON.stringify(funData));
}
//post
 const handleWrite = (email) =>{
    const funData = JSON.parse(getData);
    for (var i = 0; i < funData.length; i++) {
      if(email === funData[i].email){  //look for match with name
          funData[i].options = {
            create: user[i].options.create,
            post: !user[i].options.post,
            update: user[i].options.update,
            delate: user[i].options.delate
          } ;  //add two
          break;  //exit loop since you found the person
      }
   }
   setUser(funData);
   localStorage.setItem("access", JSON.stringify(funData));
}
//update
const handleUpdate = (email) =>{
    const funData = JSON.parse(getData);
    for (var i = 0; i < funData.length; i++) {
      if(email === funData[i].email){  //look for match with name
          funData[i].options = {
            create: user[i].options.create,
            post: user[i].options.post,
            update: !user[i].options.update,
            delate: user[i].options.delate
          } ;  //add two
          break;  //exit loop since you found the person
      }
   }
   setUser(funData);
   localStorage.setItem("access", JSON.stringify(funData));
}
//delete
 const handleDelete = (email) =>{
    const funData = JSON.parse(getData);
    for (var i = 0; i < funData.length; i++) {
      if(email === funData[i].email){  //look for match with name
          funData[i].options = {
            create: user[i].options.create,
            post: user[i].options.post,
            update: user[i].options.update,
            delate: !user[i].options.delate
          } ;  //add two
          break;  //exit loop since you found the person
      }
   }
   setUser(funData);
   localStorage.setItem("access", JSON.stringify(funData));
}
//activeted
const handleActiveted = (email) =>{
    const funData = JSON.parse(getData);
    for (var i = 0; i < funData.length; i++) {
      if(email === funData[i].email){  //look for match with name
          funData[i].activeted = !user[i].activeted;  //add two
          break;  //exit loop since you found the person
      }
   }
   setUser(funData);
   localStorage.setItem("access", JSON.stringify(funData));
}


    //set table data
    const Data = user.length > 0 ? user?.map((user) => (
        <tr key={user.email}>
            <td>{user.email}</td>
            <td>
                <div style={{ display: 'flex' }}>
                    <div className="form-check" onClick={() => handleRead(user.email, setUser, user)}>
                        <input className="form-check-input" type="checkbox" checked={user.options.create} onChange={handleRead}/>
                        <label className="form-check-label">
                            Read
                        </label>
                    </div>
                    <div className="form-check" onClick={() => handleWrite(user.email, setUser, user)}>
                        <input className="form-check-input" type="checkbox" checked={user.options.post} onChange={handleWrite}/>
                        <label className="form-check-label">
                            Write
                        </label>
                    </div>
                    <div className="form-check" onClick = {() =>handleUpdate(user.email, setUser, user)}>
                        <input className="form-check-input" type="checkbox" checked={user.options.update} onChange={handleUpdate}/>
                        <label className="form-check-label">
                            Update
                        </label>
                    </div>
                    <div className="form-check" onClick={() => handleDelete(user.email, setUser, user)}>
                        <input className="form-check-input" type="checkbox" checked={user.options.delate} onChange={handleDelete}/>
                        <label className="form-check-label">
                            Delete
                        </label>
                    </div>
                    <div className="form-check" onClick={() => handleActiveted(user.email, setUser, user)}>
                        <input className="form-check-input" type="checkbox" checked={user.activeted} onChange={handleActiveted}/>
                        <label className="form-check-label">
                            Activeted
                        </label>
                    </div>
                </div>
            </td>
        </tr>
    )) : <tr><td>No data Found</td></tr>
    //2 create table with email and checkbox
    const Table = (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Access User</h4>
                        <h6 className="card-subtitle">
                            <code>.table</code></h6>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {Data ? Data : 'No User Found'}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    //oncheckbox we update localstorage



    return (
        <>
            <Breadcumb title="CURD Access" />
            {Table}
        </>
    )
}

export default AccessUser;

// [{email: "ravikas007@gmail.com", options: {create: false, post: false, put: false, delete: false}}]









