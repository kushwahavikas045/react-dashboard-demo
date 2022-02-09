import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
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
                <li> <NavLink activeClassName="waves-effect waves-dark active" to="/Icons" aria-expanded="false"><i
                            className="fa fa-smile-o"></i><span className="hide-menu">Icons</span></NavLink>
                </li>
                <li> <NavLink activeClassName="waves-effect waves-dark active" to="/Map" aria-expanded="false"><i
                            className="fa fa-globe"></i><span className="hide-menu">Map</span></NavLink>
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
            </ul>
        </nav>

    </div>

</aside>
  ) ;
};

export default Sidebar;
