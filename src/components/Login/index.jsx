// import { useRef, useState, useEffect } from 'react';
import React from "react";
import "./index.css";
// import background from '../../assets/background_img_capstone.jpg';

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

// const Login = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])

//     const handleSubmit = async (e) => {
//         e.preventDafault();
//         console.log(user, pwd);
//         setUser('');
//         setPwd('');
//         setSuccess(true);
//     }

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>You are logged in!</h1>
//                     <br />
//                     <p>
//                         <a href="#">Go to Home</a>
//                     </p>
//                 </section>
//             ) : (
//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <h1>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(e) => setUser(e.target.value)}
//                     value={user}
//                     required
//                 />

//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     onChange={(e) => setPwd(e.target.value)}
//                     value={pwd}
//                     required
//                 />
//                 <button>Sign In</button>
//             </form>
//             <p>
//                 Need an Account?<br />
//                 <span className='line'>
//                     {/*put router link here*/}
//                     <a href="#">Sign Up</a>
//                 </span>
//             </p>
//         </section>
//             )}
//             </>
//   )
// }

// export default Login

// import styled from 'styled-components';
// // import { } from 'react-icons/fa';

// const Login = () => {
//     return (
//         <div className='main-container'>
//             <h2>Welcome</h2>
//             <input type="text" placeholder="Email" />
//             <img src={background} alt='background_img' className='background_img' />
//         </div>
//     )
// }

// export default Login;

import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import img from "./assets/background_img_capstone.jpg";
// import Cube from './Cube/index';

function App() {
  return (
    <MainContainer>
      {/* <Website>Trade Tracker></Website> */}
      <WelcomeText>Sign In</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Log on" />
      </ButtonContainer>
      <LoginWith>Sign up</LoginWith>
      <HorizontalRule />
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-image: url(${img});
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

// const Website = styled.h2`
//   margin: 3rem 0 2 rem 0;
// `;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default App;
