import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <from>
                <h1>please register</h1>
                <input type='text' placeholder='name'
                id='name'/><br/><br/>
                <input type='email' placeholder='email'
                id='email'/><br/><br/>
                <input type='password' placeholder='password'
                id='password'/><br/><br/>
                <input type='password' placeholder='re-enter password'
                id='password'/><br/><br/>
                <input type='submit' 
                value='submit'/>
            </from>
            <div className='route-register'>
                    <h5>Already Registered?<Link className='link' to='/login'> Login</Link></h5>
                    <div>
                        <h3>---------------
                        OR------------</h3>
                </div>
                <button
                    
                    className='btn-regular'
                >Google sign in</button>

                
            </div>
            

             </div>
            
        </div>
    );
};

export default Register;