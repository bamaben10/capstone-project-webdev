import { useRef, useState, useEffect } from 'react';
import React from 'react';
import './index.css';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LockOpenIcon from '@mui/icons-material/LockOpen';

// const Login = () => {
//     return (
//         <div className='login'>
//             <div className='sub-login'>
//                 <div>
//                     <div className='imgs'>
//                         <div className='container-image'>
//                             <AccountCircleIcon sx={{fontSize:125}}/>
//                         </div>


//                     </div>
//                     <div>
//                         <h1>Login Page</h1>
//                         <div className='mail-icon'>
//                             <input type='text' placeholder='username or email'/>
//                             <MailOutlineIcon sx={{fontSize:50}} />
//                         </div>
//                         <div className='password-icon'>
//                             <input type='password' placeholder='password' />
//                             <LockOpenIcon sx={{fontSize:50}}/>
//                         </div>
//                         <div className='login-btn'>
//                         <button>Login</button>
//                         </div>
//                         <div>
//                             <p className='link'>
//                                 <a href='#'>Forgot password ?</a> Or <a href='#'>Sign Up</a>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login;




const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDafault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label> 
                <input 
                    type="text" 
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label> 
                <input 
                    type="password" 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className='line'>
                    {/*put router link here*/}
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
            )}
            </>
  )
}

export default Login