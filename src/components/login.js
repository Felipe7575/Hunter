import React, { useEffect, useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';

const Login = ({divCloseFunction, state}) =>{
    return(
    <div className='pantallaLogin'>
        <div className="containerLogin">
            <CloseButton  className='cerrarLogin' onClick={()=>divCloseFunction(false)}/>
            <div className="containerButtonLoginRegister">
                <button type="button" onClick={()=>divCloseFunction("login")} className='buttonLoginRegister'>Login</button>
                <button type="button" onClick={()=>divCloseFunction("register")} className='buttonLoginRegister'>Register</button>
            </div>
            <div className="containerOptions">
                <img width="38" height="38" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className='buttonOpcionesLogin'/>
            </div>
            {state==="login" &&
                <div className="formContainerRegister">
                    <input type="email" className="inputLoginRegister" placeholder="Your email address"></input>
                    <input type="password" className="inputLoginRegister" placeholder="Your password"></input>
                    <button type="submit" className="registerButton">Login</button>
                </div>
            }
            {state==="register" &&
                <div className="formContainerRegister">
                    <input type="text" className="inputLoginRegister" placeholder="Your username"></input>
                    <input type="email" className="inputLoginRegister" placeholder="Your email address"></input>
                    <input type="password" className="inputLoginRegister" placeholder="Your password"></input>
                    <input type="password" className="inputLoginRegister" placeholder="Repeat your password"></input>
                    
                    <input type="text" className="inputLoginRegister" placeholder="Your name"></input>
                    
                    <div className='d-flex'>
                        <input type="checkbox" className="checkBoxRegister"></input>
                        <t>I agree to sign up for MDB account notifications and newsletter</t>
                    </div>    
                    
                    <button type="submit" className="registerButton">Register</button>
                </div>
            }
            

        </div>

    </div>
    )
}
export default Login;