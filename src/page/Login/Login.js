import { useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth';
import { authLogin } from '../../utils/authLogin';

//login url
const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6sCdPzP3fTWeTOOLmgK-P3h7bgBEGVFI';
const Login = () => {
  //state
  const [loading, setLoading] = useState(false);
  const [fieldError, setFieldError] = useState(null);
  //ref
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  //context api
  const authCtx = useContext(AuthContext);
  //signup
  const handleSubmit = async(event) => {
    setLoading(true);
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (password === '' || email === '') {
      setLoading(false);
      setFieldError('All fields are required');
      return
    }
     await authLogin(loginUrl, email, password, authCtx, history, setLoading, setFieldError);

  }
  return (
    <>
      <div className="container-wrapper-login">
        <div className="uf-form-signin">
          <div className="text-center">
            <a href="/login"><img src="/images/logo-icon.png" alt="" width="100" height="100" /></a>
            <h1 className="text-white h3">Account Login</h1>
          </div>
          {fieldError && <div className="alert alert-danger" role="alert" data-mdb-color="danger"><i className="fa fa-times-circle me-3"></i>
            {fieldError}
          </div>}
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="input-group uf-input-group input-group-lg mb-3">
              <span className="input-group-text fa fa-user"></span>
              <input type="text" className="form-control" placeholder="Username or Email address" ref={emailInputRef}/>
            </div>
            <div className="input-group uf-input-group input-group-lg mb-3">
              <span className="input-group-text fa fa-lock"></span>
              <input type="password" className="form-control" placeholder="Password" ref={passwordInputRef}/>
            </div>
            <div className="d-flex mb-3 justify-content-between">
              <div className="form-check">
                <input type="checkbox" className="form-check-input uf-form-check-input" id="exampleCheck1" />
                <label className="form-check-label text-white" for="exampleCheck1">Remember Me</label>
              </div>
              <a href="#">Forgot password?</a>
            </div>
            <div className="d-grid mb-4">
              <button type="submit" className="btn uf-btn-primary btn-lg">{loading ? 'Loading...' : 'Login'}</button>
            </div>
            <div className="d-flex mb-3">
            <div className="dropdown-divider m-auto w-25"></div>
            <small className="text-nowrap text-white">Or login with</small>
            <div className="dropdown-divider m-auto w-25"></div>
        </div>
        <div className="uf-social-login d-flex justify-content-center">
          <a href="#" className="uf-social-ic" title="Login with Facebook"><i className="fa fa-facebook-f"></i></a>
          <a href="#" className="uf-social-ic" title="Login with Twitter"><i className="fa fa-twitter"></i></a>
          <a href="#" className="uf-social-ic" title="Login with Google"><i className="fa fa-google"></i></a>
        </div>
            <div className="mt-4 text-center">
              <span className="text-white">Don't have an account?</span>
              <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login;