import { useCallback, useState, lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import Loader from './components/Loader';
import { ToastContainer } from 'react-toastify';
import JsonForm from './components/Element/JsonForm';


function App() {
//toggle state
 const[toggle, setToggle] = useState(false);

 //toggle function
 const toggleFunction = useCallback((data) =>{
   if(data === "true"){
     setToggle(!toggle);
   }else{
     setToggle(toggle);
   }
 },[toggle]);

//lazy loading
const Dashboard = lazy(() => import("./page/Dashboard/Dashboard"));
const Profile = lazy(() => import("./page/Profile/Profile"));
const Tables = lazy(() => import("./page/Tables/Tables"));
const Icons = lazy(() => import("./page/Icons/Icons"));
const Map = lazy(() => import("./page/Map/Map"));
const Blank = lazy(() => import("./page/Blank/Blank"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const DragAndDrop = lazy(() => import("./page/DragAndDrop/DragAndDrop"));

  return (
    <Router>
      <div className={`${toggle ? "fix-header fix-sidebar card-no-border mini-sidebar" : "fix-header fix-sidebar card-no-border"}`}>
       <Suspense fallback={<Loader/>}>
        <div className="main-wrapper">
          <Navbar toggle = {toggleFunction} />
          <ToastContainer/>
          <Sidebar />
          <div class="page-wrapper">
            <div class="container-fluid">

              <Switch>
                <Route exact path="/">
                  <Redirect to="/Dashboard"/>
                </Route>
                <Route exact path="/Dashboard">
                 <Dashboard/>
                </Route>
                <Route exact path="/Profile">
                 <Profile/>
                </Route>
                <Route exact path="/Tables">
                 <Tables/>
                </Route>
                <Route exact path="/Icons">
                 <Icons/>
                </Route>
                <Route exact path="/Map">
                 <Map/>
                </Route>
                <Route exact path="/Blank">
                 <Blank/>
                </Route>
                <Route exact path="/DragAndDrop">
                 <DragAndDrop/>
                </Route>
                <Route exact path="/form">
                 <JsonForm/>
                </Route>
                <Route exact path="*">
                 <PageNotFound/>
                </Route>
              </Switch>
            </div>
            <Footer/>
          </div>

        </div>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
