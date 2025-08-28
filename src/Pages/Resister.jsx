
import Navbar from '../Components/Layout/Navbar'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import logonImg from '../assets/images/login/login.svg'

const Resister = () => {
  return (
        <div>
          <Navbar />
          <div className="hero bg-base-200 min-h-[calc(100vh-300px)] container mx-auto py-7">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <img src={logonImg} alt="loginimg" className='w-full' />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <div className="card-body">
                    <fieldset className="fieldset space-y-2">
                      <label className="label">Name</label>
                      <input type="text" className="input" placeholder="Name" />
                      <label className="label">Email</label>
                      <input type="email" className="input" placeholder="Email" />
                      <label className="label">Password</label>
                      <input type="password" className="input" placeholder="Password" />
                      <div><a className="link link-hover">Forgot password?</a></div>
                      <button className="btn btn-neutral mt-4">Sign In</button>
                      <hr />
                      <h2>Or Sign In with</h2>
                      <button className="btn btn-neutral mt-4"><FcGoogle className='text-3xl' /></button>
                      <button className="btn btn-neutral mt-4"><FaFacebook  className='text-3xl'/></button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Resister