import { useCallback, useState, lazy, Suspense, useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import Loader from './components/Loader';
import { ToastContainer } from 'react-toastify';
import JsonForm from './components/Element/JsonForm';
import Signup from './page/Login/Signup';
import AuthContext from './store/auth';

function App() {
  //toggle state
  const [toggle, setToggle] = useState(false);
  //toggle function
  const toggleFunction = useCallback((data) => {
    if (data === "true") {
      setToggle(!toggle);
    } else {
      setToggle(toggle);
    }
  }, [toggle]);
  //lazy loading
  const Dashboard = lazy(() => import("./page/Dashboard/Dashboard"));
  const Profile = lazy(() => import("./page/Profile/Profile"));
  const Tables = lazy(() => import("./page/Tables/Tables"));
  const Icons = lazy(() => import("./page/Icons/Icons"));
  const Map = lazy(() => import("./page/Map/Map"));
  const Blank = lazy(() => import("./page/Blank/Blank"));
  const PageNotFound = lazy(() => import("./components/PageNotFound"));
  const DragAndDrop = lazy(() => import("./page/DragAndDrop/DragAndDrop"));
  const Login = lazy(() => import('./page/Login/Login'));
  const authCtx = useContext(AuthContext);
  const { isAuth } = authCtx;

  return isAuth ? (
    <Router>
      <div className={`${toggle ? "fix-header fix-sidebar card-no-border mini-sidebar" : "fix-header fix-sidebar card-no-border"}`}>
        <Suspense fallback={<Loader />}>
          <div className="main-wrapper">
            <Navbar toggle={toggleFunction} />
            <ToastContainer />
            <Sidebar />
            <div className="page-wrapper">
              <div className="container-fluid">
                <Switch>
                  <ProtectedRoute exact path="/">
                    <Redirect to="/Dashboard" />
                  </ProtectedRoute>
                  <ProtectedRoute exact path="/Dashboard">
                    <Dashboard />
                  </ProtectedRoute>
                  <ProtectedRoute exact path="/Profile">
                    <Profile />
                  </ProtectedRoute>
                  <ActivatedRoute exact path="/Tables">
                    <Tables />
                  </ActivatedRoute>
                  <ProtectedRoute exact path="/Icons">
                    <Icons />
                  </ProtectedRoute>
                  <ProtectedRoute exact path="/Map">
                    <Map />
                  </ProtectedRoute>
                  <ProtectedRoute exact path="/Blank">
                    <Blank />
                  </ProtectedRoute>
                  <ProtectedRoute exact path="/DragAndDrop">
                    <DragAndDrop />
                  </ProtectedRoute>
                  <ProtectedRoute exact path="/form">
                    <JsonForm />
                  </ProtectedRoute>
                  <ProtectedRoute exact path="*">
                    <PageNotFound />
                  </ProtectedRoute>
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </Suspense>
      </div>
    </Router>
  ) : (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Login />
        </Switch>

      </Suspense>
    </Router>
  )
}

//protected route
const ProtectedRoute = ({ children, ...rest }) => {
  const authCtx = useContext(AuthContext);
  const { isAuth } = authCtx;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
};

const ActivatedRoute = ({ children, ...rest }) => {
  const authCtx = useContext(AuthContext);
  const { isAuth } = authCtx;
  const activated = false;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : isAuth && !activated ? (
          <Redirect
            to={{
              pathname: '/Dashboard',
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>

  )

}

export default App;
