import React from 'react'

const Login = () => {
  return (
    <>
    <div className="container-wrapper-login">
    <div className="uf-form-signin">
      <div className="text-center">
        <a href="/login"><img src="/images/logo-icon.png" alt="" width="100" height="100"/></a>
      <h1 className="text-white h3">Account Login</h1>
      </div>
      <form className="mt-4">
        <div className="input-group uf-input-group input-group-lg mb-3">
          <span className="input-group-text fa fa-user"></span>
          <input type="text" className="form-control" placeholder="Username or Email address"/>
        </div>
        <div className="input-group uf-input-group input-group-lg mb-3">
          <span className="input-group-text fa fa-lock"></span>
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <div className="d-flex mb-3 justify-content-between">
          <div className="form-check">
            <input type="checkbox" className="form-check-input uf-form-check-input" id="exampleCheck1"/>
            <label className="form-check-label text-white" for="exampleCheck1">Remember Me</label>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <div className="d-grid mb-4">
          <button type="submit" className="btn uf-btn-primary btn-lg">Login</button>
        </div>
         {/* <div className="d-flex mb-3">
            <div className="dropdown-divider m-auto w-25"></div>
            <small className="text-nowrap text-white">Or login with</small>
            <div className="dropdown-divider m-auto w-25"></div>
        </div>
        <div className="uf-social-login d-flex justify-content-center">
          <a href="#" className="uf-social-ic" title="Login with Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="uf-social-ic" title="Login with Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" className="uf-social-ic" title="Login with Google"><i className="fab fa-google"></i></a>
        </div>  */}
        <div className="mt-4 text-center">
          <span className="text-white">Don't have an account?</span>
          <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  </div>

    </>
  )
}

export default Login;