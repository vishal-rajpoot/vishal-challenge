import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Header from './Header';
import Login from './Login';

const Registeration = () => {
    const [login, setLogin] = useState(true)
    const [inputName, setinputName] = useState('')
    const [inputEmail, setinputEmail] = useState('')
    const [inputPassword, setinputPassword] = useState('')
    console.log(inputName);


    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputEmail && inputName && inputPassword){
            if(inputPassword.length > 5 ){
                if(inputName.length > 3){
                    setLogin(!login)
                    localStorage.setItem("Name", JSON.stringify(inputName));
                    localStorage.setItem("Email", JSON.stringify(inputEmail));
                    localStorage.setItem("Password", JSON.stringify(inputPassword));

                    setTimeout(() => {
                    toast.success(`You are now Registered`);
                    }, 1000);
                }else{
                toast.warning('Name should be more than 3 characters ')
                }
            }
            else{
                toast.warning('Password should be more than 5 characters ')
            }
        }        
        else {
            toast.error('Please Fill all the details')
        }

    }

    const handleClick = () => {
        setLogin(!login)
    }
  return (
    <>
        <div className='login-cover'>
            { login ? 
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <input className='login-input' type='text' placeholder='Full Name' value={inputName} onChange={(event) => setinputName(event.target.value)}/>
                    <input className='login-input' type='email' required placeholder=' Enter Email' value={inputEmail} onChange={(event) => setinputEmail(event.target.value)}/>
                    <input className='login-input' type='password' required placeholder='Password' value={inputPassword} onChange={ (event) => setinputPassword(event.target.value)}/>
                    <br/>
                <button className='login-btn' type='submit'>Register</button> 
                <p><span className='already-register' onClick={handleClick}>Already Register ? login in</span></p>
                <ToastContainer  />
                </form>
                :
                <Login/>
            }
        </div>
    </>
  )
}

export default Registeration