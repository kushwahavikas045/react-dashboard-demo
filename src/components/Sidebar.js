import React,{useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../store/auth';
const Sidebar = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    //logout
    const logoutHandler = () =>{
        authCtx.logout();
        history.push('/');
    }

  return (
 <aside className="left-sidebar">

    <div className="scroll-sidebar">

        <nav className="sidebar-nav">
            <ul id="sidebarnav">
                <li>  <NavLink activeClassName="waves-effect waves-dark active" to="/Dashboard" aria-expanded="false"><i
                            className="fa fa-tachometer"></i><span className="hide-menu">Dashboard</span></NavLink>
                </li>
                <li> <NavLink activeClassName="waves-effect waves-dark active" to="/Profile" aria-expanded="false"><i
                            className="fa fa-user-circle-o"></i><span className="hide-menu">Profile</span></NavLink>
                </li>
                <li> <NavLink activeClassName="waves-effect waves-dark active" to="/Tables" aria-expanded="false"><i
                            className="fa fa-table"></i><span className="hide-menu">Tables</span></NavLink>
                </li>
                <li> <NavLink activeClassName="waves-effect waves-dark active" to="/FlowChart" aria-expanded="false"><i
                            className="fa fa-object-group"></i><span className="hide-menu">Flowchart</span></NavLink>
                </li>
                <li> <NavLink activeClassName="waves-effect waves-dark active" to="/Blank" aria-expanded="false"><i
                            className="fa fa-bookmark-o"></i><span className="hide-menu">Blank</span></NavLink>
                </li>
                <li> <NavLink activeClassName="waves-effect waves-dark active" to="/PageNotFound" aria-expanded="false"><i
                            className="fa fa-question-circle"></i><span className="hide-menu">404</span></NavLink>
                </li>
                <li> <NavLink activeClassName="waves-effect waves-dark active" to="/DragAndDrop" aria-expanded="false"><i
                            className="fa fa-window-restore"></i><span className="hide-menu">DragAndDrop</span></NavLink>
                </li>
                <li> <NavLink activeClassName="waves-effect waves-dark active" to="/Access" aria-expanded="false"><i
                            className="fa fa-window-restore"></i><span className="hide-menu">User Access</span></NavLink>
                </li>
            </ul>
        </nav>

        <div className="col-md-7 align-self-center">
                        <button
                         onClick={logoutHandler}
                            className="btn waves-effect waves-light btn btn-danger pull-right hidden-sm-down text-white">
                            Logout</button>
                    </div>

    </div>

</aside>
  ) ;
};

export default Sidebar;
