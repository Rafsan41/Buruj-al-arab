import React, { useContext } from 'react';
import './Login.css'


const Login = () => {
    return (
        <div className='login-form'>
            
            <from>
                <h1>Login</h1>
                <input type='text' placeholder='name'
                id='name'/><br/><br/>
                <input type='email' placeholder='email'
                id='email'/><br/><br/>
                <input type='submit' 
                value='submit'/>
            </from>


        </div>
    );
};

export default Login;