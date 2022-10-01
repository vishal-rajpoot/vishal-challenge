import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoToMenu from './GoToMenu';


const Login = () => {
    const [inputEmail, setinputEmail] = useState('')
    const [inputPassword, setinputPassword] = useState('')
    const [home, setHome] = useState(true)
    const [flag, setFlag] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        let email = localStorage.getItem("Email").replace(/"/g,"")
        // let email = JSON.parse(localStorage.getItem('email'));
        let pass = localStorage.getItem("Password").replace(/"/g,"")
        // let pass = JSON.parse(localStorage.getItem('Password'));
        
        if(inputEmail !== email || inputPassword !== pass){
            setHome(true);
            toast.error('Invalid Email or Password')
        }
        else{
            setHome(false)
            setFlag(false)
            setTimeout(() => {
                toast.success(`You are now logged in as ${inputEmail}`)
                }, 500);
        }
    }

    // const handleClick = () => {
    //     setFlag(!flag)
    // }
  return (
    <>
        {home ?
            <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input className='login-input' type='email' required placeholder=' Enter Email' value={inputEmail} onChange={(event) => setinputEmail(event.target.value)}/>
                    <input className='login-input' type='password' required placeholder='Password' value={inputPassword} onChange={ (event) => setinputPassword(event.target.value)}/>
                    <br/>
                <button className='login-btn' type='submit'>Login</button>
                {/* <Link to="registeration"><p><span className='already-register' onClick={handleClick}>Don't have an account? Sign up</span></p></Link> */}
                <ToastContainer  />
                </form>
            :
        <div>
            <ToastContainer/>
            <GoToMenu/>
        </div>
        }
    </>
  )
}

export default Login