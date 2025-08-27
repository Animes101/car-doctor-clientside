import logo from "../../assets/logo.svg"
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="bg-[#151515]">
      <div className="footer sm:footer-horizontal text-base-content p-10 text-white  container mx-auto">
            <aside>
          <img src={logo} alt="" />
          <p className="font-inter">
           Edwin Diaz is a software and web technologies engineer,
            <br />
             a life coach trainer who is also a serial .
          </p>
          <div className="flex gap-5 text-[18px] font-bold">
            <FaGoogle className="cursor-pointer hover:text-[#FF3811]" />
            <FaFacebook className="cursor-pointer hover:text-[#FF3811]" />
            <FaTwitter className="cursor-pointer hover:text-[#FF3811]" />
            <FaLinkedin className="cursor-pointer hover:text-[#FF3811]" />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">About</h6>
          <ul className="">
            <li className="text-[12px] font-inter"><NavLink to="/" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-white"}>Home</NavLink></li>
            <li className="text-[12px] font-inter"><NavLink to="/about" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-white"}>About</NavLink></li>
            <li className="text-[12px] font-inter"><NavLink to="/services" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-white"}>Services</NavLink></li>
            <li className="text-[12px] font-inter"><NavLink to="/blog" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-white"}>Blog</NavLink></li>
            <li className="text-[12px] font-inter"><NavLink to="/contact" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-white"}>Contact</NavLink></li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Why Car Doctor About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesbility</a>
        </nav>
      </div>
    </footer>
  

  )
}

export default Footer