import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'


const Login = () => {
    const { user, googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';
    console.log('came from', location.state?.from);
    
    const handelGoogleLogIn = () => {
        googleSignIn()
        .then(result => {
            history.push(redirect_uri);
            })//.then
    }

    return (
        <div className=' border-4 login-form '>
            <div>
                <div >
                <h1>Login</h1>
                <input type='email' placeholder='Your email'
                    id='email' /><br /><br />
                 <input type='password' placeholder='password'
                id='password'/><br/><br/>
                <input type='submit' 
                value='submit'/>
            </div>
                <div className='route-register'>
                    <h4>forgot password!<span><button className='forgot-password'> Yes</button></span> </h4>
                    <h5>New to Buruj-Alarab?
                        <Link className='link' to='/register'> Creat Account</Link></h5>
                <div>
                        <h3>---------------
                        OR------------</h3>
                </div>
                <button
                  onClick={handelGoogleLogIn} 
                    className='btn-regular'
                >Google sign in</button>
            </div>
            </div>
            
        </div>
    );
};

export default Login;