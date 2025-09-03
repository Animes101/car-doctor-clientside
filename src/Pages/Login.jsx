import React, { useContext, useState } from 'react'
import NavBar from '../Components/Layout/Navbar'
import Navbar from '../Components/Layout/Navbar'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import logonImg from '../assets/images/login/login.svg'
import { AuthContext } from '../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

  const [user, setUsers]=useState({name:'', email:'', password:''});
    const [error, setError] = useState("");
    const navigate=useNavigate();
    const location=useLocation();


    const {signInUser,googleSignIn}=useContext(AuthContext);

        // আমাদের regex (A, @, কমপক্ষে 5 digit)
        const passwordRegex = /^(?=.*A)(?=.*@)(?=(?:.*\d){5,}).+$/;


          //  Login OnChange
          const handleChange=(e)=>{

            setUsers({...user, [e.target.name]:e.target.value})


          }
          //handle Login Submit 
          const handleSubmit=(e)=>{
            e.preventDefault();
 
            // Password regex check
          if (!passwordRegex.test(user.password)) {
              setError("Password must contain at least one 'A', one '@', and 5 digits!");
              return;
            }
            setError("");

            signInUser(user.email, user.password)
            .then(result=> {
              const email=result.user.email;
                  fetch('http://localhost:3000/login',{
                    method:'POST',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({email}),
                    credentials:"include",
                  })
                  .then(res=> res.json())
                  .then(data=> console.log(data))
            }
            )

          }

          //  handleGoogle Login
          const handleGoogleLogin=()=>{
            googleSignIn()
            .then(result=> console.log(result.user))
            .catch(err=> console.log(err.message))
          }

  return (
    <div>
      <div className="hero bg-base-200 min-h-[calc(100vh-300px)] container mx-auto py-7">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <img src={logonImg} alt="loginimg" className='w-full' />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset space-y-2">
                  <label className="label">Name</label>
                  <input onChange={handleChange} type="text" name='name' className="input" placeholder="Name" />
                  <label className="label">Email</label>
                  <input onChange={handleChange} type="email" name='email' className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input onChange={handleChange} type="password" name='password' className="input" placeholder="Password" />
                  <div><a className="link link-hover">Forgot password?</a></div>
                  <p className='text-red-500'>{error}</p>
                  <button className="btn btn-neutral mt-4">Sign In</button>
                  <hr />
                  <h2>Or Sign In with</h2>
                  <button onClick={handleGoogleLogin} className="btn btn-neutral mt-4"><FcGoogle className='text-3xl' /></button>
                  <button className="btn btn-neutral mt-4"><FaFacebook  className='text-3xl'/></button>
                  <Link to={'/singup'}>Go To SingUp Page</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login