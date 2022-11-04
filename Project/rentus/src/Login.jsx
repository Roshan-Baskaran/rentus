import React from 'react';
import {useState} from "react";
import { useNavigate} from "react-router-dom";
import App from "./App"
import { logo } from "./assets";
import Axios from "axios";



const Login =() => { 
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate();
    const [login,setLogin]=useState(false);
  
  //Aunthentication
    const handleClick=  (e) => {
        e.preventDefault();
        console.log(username,email,password,login);
        if(login){
        Axios.post("http://localhost:3001/login",{username:username,password:password}).then((response)=>
        {
            console.log(response);
            if(response.data=="Valid User"){
            alert("User Logged In");
            navigate("/Home");
            }
            else{
            alert(response.data);
            }
    
    }
    ).catch((err)=>{console.log(err,"Error has occured")})
    }
        
    
    else{
        Axios.post("http://localhost:3001/register",{username:username,email:email,password:password})
        .then((response)=>
        {
            console.log(response);
            if(response.data=="User Already exists"){
            alert("Username already exists ...")
            }
            else{
            alert("User Registered Successfully. LOGIN NOW");
        }
        
        
        }).catch((err)=>{console.log(err,"Error has occured")});
    
    }
    setUsername("");setEmail("");setPassword("");   


        // navigate("/Home");
    }

    //   @ # $ % ^ & *
    return (
    <div className ="relative h-96 w-full bg-green-300 grid grid-cols-2  justify-center min-h-screen overflow-hidden">
    <div className='relative left-52'>
        <img src={logo} alt="logo" className=' absolute top-60 left-56 w-72'/>
        <h1 className='absolute top-[25rem] left-60 text-4xl from-neutral-600 font-bold '>Happy <span className='text-white'>RENT</span>ing :)</h1>
    </div>
    <div className="w-full p-6 h-[25rem] m-auto bg-white rounded-md shadow-2xl lg:max-w-lg">
       <div className='grid grid-cols-3 '><h1 className="text-3xl col-span-2 ml-4 font-semibold text-center text-purple-700 underline">
            {login?"Login":"Register"}        
    </h1>
    <button onClick={()=>{setLogin(!login)}} className='text-purple-700 font-bold hover:scale-y-110 hover:scale-x-110 hover:border-2    hover:bg-violet-700 hover:text-white'>{!login?"Login":"Register"}
    </button>
    
    </div> 
        <form className="mt-6">
        <div className="mb-2 " >
                <label
                    for="userName"
                    className="block text-sm font-semibold  text-gray-800"
                >
                    Username 
                </label>
                <input
                value={username}
                    type="text"
                    name="username"
                    onChange={(e)=>{setUsername(e.target.value)}}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className={"mb-2 "+(!login?"block":"hidden")} >
                <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                value={email}
                    type="email"
                    name="email"   onChange={(e)=>{setEmail(e.target.value)}}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    value={password}
                    type="password"
                    name="password" onChange={(e)=>{setPassword(e.target.value)}}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            
            <div className="mt-6">
                {/* <Link to="/app"> */}
                    <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={handleClick} >
                    {login?"Login":"Register"}
                    </button>
                {/* </Link> */}
            </div>
        </form>

    </div>
</div>

)

}
export default Login;