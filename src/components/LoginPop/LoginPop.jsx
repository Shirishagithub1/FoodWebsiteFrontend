import React, { useContext, useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const LoginPop = ({setShowLogin}) => {
  const {url ,setToken} =useContext(StoreContext)
  const [currentState, setCurrentState] =useState("Login")
  const [data,setData] =useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler =(event)=>{
  const name = event.target.name
  const value=event.target.value;
  setData(data=>({...data,[name]:value}))
  }
  const onLogin =async (event) => {
   event.preventDefault()
   console.log(url)
   let newUrl =url;
   if(currentState==="Login"){
    newUrl +="/api/user/login"
   }
   else{
           newUrl += "/api/user/register"
   }
  const response =await  axios.post(newUrl, data);
 if(response.data.success){
  setToken(response.data.token);
  localStorage.setItem("token", response.data.token)
  setShowLogin(false)
 }
 else{
  alert(response.data.message)
 }
  }
  
  return (
    <div className='login-popup'>
            <form onSubmit={onLogin} className="loginPop-container">
            <div className='login-popup-title'>
            <h2> {currentState}</h2>
            <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className='login-poup-inputs'>
            {currentState==="Login"?<></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter Your Name Here' />}
           
<input name='email' onChange={onChangeHandler} value={data.email} type="email"placeholder='Enter your email' />
<input name='password' onChange={onChangeHandler} value={data.password} type="text" placeholder='password' required />
          </div>
          <button type='submit'>{currentState==="Sign Up"?"create account":"Login"}</button>
          <div className='login-popup-condition'>
           <input type="checkbox" required />
           <p>By continueing i agree to the term of use & privacy policy.</p>
          </div>
          {currentState==="Login"
          ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}> Click Here</span></p>
          :<p>Already Have an account <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
               }
          
          
          </form>
    </div>

    
  )
}

export default LoginPop