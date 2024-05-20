import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <React.Fragment>
      <div className="login">
        <div className="block">
        <img className='back' src="/images/login.png" alt="login" />
        <img className='logo' src="/images/logo.png" alt="logo" />
        </div>
        <div className="loginForm">
            <div className="title">
            <h3>Hello! Welcome back</h3>
            <p>Login with your data that you entered
            during your registration</p>
            </div>
            <form>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" />
                <img src="/images/f1.svg" alt="img" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" />
                <img src="/images/f2.svg" alt="img" />
                </div>
                <div className="forget">
                    <Link to="/forget">Forget Password?</Link>
                </div>
                <button className='loginBtn' type="submit">Login</button>
                <div className="or">
                    <p><span>Or</span></p>
                </div>
                <div className="buttons">
                <button><img src="/images/wg.svg" alt="google" />Google</button>
                <button><img src="/images/wf.svg" alt="facebook" />Facebook</button>
                <button><img src="/images/wa.svg" alt="facebook" />Apple</button>
                </div>
            </form>
            <div className="register">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
