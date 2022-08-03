import React from 'react';
import './index.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Login = () => {
    return (
        <div className='login'>
            <div className='sub-login'>
                <div>
                    <div className='imgs'>
                        <div className='container-image'>
                            <AccountCircleIcon sx={{fontSize:125}}/>
                        </div>


                    </div>
                    <div>
                        <h1>Login Page</h1>
                        <div className='mail-icon'>
                            <input type='text' placeholder='username or email'/>
                            <MailOutlineIcon sx={{fontSize:50}} />
                        </div>
                        <div className='password-icon'>
                            <input type='password' placeholder='password' />
                            <LockOpenIcon sx={{fontSize:50}}/>
                        </div>
                        <div className='login-btn'>
                        <button>Login</button>
                        </div>
                        <div>
                            <p className='link'>
                                <a href='#'>Forgot password ?</a> Or <a href='#'>Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
