import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <React.Fragment>
      <div className="login">
        <div className="block">
        <img className='back' src="/images/login.png" alt="login" />
        <img className='logo' src="/images/logoWhite.svg" alt="logo" />
        </div>
        <div className="loginForm">
            <div className="title">
            <h3>Register your Account</h3>
            <p>Please Sign Up to your Account to Continue
            with us!</p>
            </div>
            <form>
                <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" placeholder="Full Name" />
                <img src="/images/user.svg" alt="img" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" />
                <img src="/images/f1.svg" alt="img" />
                </div>
                <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="number" name="phone" id="phone" placeholder="Phone" />
                <img src="/images/phone.svg" alt="img" />
                </div>
                <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" placeholder="My address" />
                <img src="/images/address.svg" alt="img" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" />
                <img src="/images/f2.svg" alt="img" />
                </div>
                <div className="forget">
                    <Link to="/forget">Forget Password?</Link>
                </div>
                <button className='loginBtn' type="submit">Sign Up</button>
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
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Register
