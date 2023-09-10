import{useState} from "react"
import {MdClose,MdMenu} from"react-icons/md"
import { Link } from "react-router-dom";
import  Logo from "../assets/Imex_Logo.png"
const Navbar = () => {
    const[nav ,setNav] = useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center bg-white  shadow-2xl h-24 px-8 sticky top-0 z-999 max-w-[1240px] mx-auto  text-black '>
        <img src={Logo} alt="" className=" w-[120px] h-[60px]"/>
        <ul className='  hidden md:flex'>
        <Link to="/" className="link">
           <li className='p-4'>Home</li>  
        </Link>
        <Link to="tracker" className="link">
        <li className='p-4'>Tracker</li>      
        </Link>
        <Link to="service" className="link">
        <li className='p-4'>Services</li>
        </Link>
        <Link to="contact" className="link">
          <li className='p-4'>Contact</li>
        </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav?<MdClose size={20}/>: <MdMenu size={20}/>}
              
         </div>
          <div className={nav ?'fixed left-0 top-0 w-[60%] h-[1/2] border-r border-r-gray-900 bg-primary ease-in-out duration-500': "fixed left-[-100%] rounded rounded-r-[80px] rounded-t-[60px]"}>
          <img src={Logo} alt="" className=" w-[120px] h-[60px]"/>
             <ul className=' uppercase p-4'>
             <Link to="/" className="link">
               <li className='p-4'>Home</li>  
             </Link>
             <Link to="tracker" className="link">
              <li className='p-4'>Tracker</li>      
             </Link>
              <Link to="service" className="link">
               <li className='p-4'>Services</li>
              </Link>
              <Link to="contact" className="link">
              <li className='p-4'>Contact</li>
             </Link> 
             </ul>
          </div>
    </div>
  );
};

export default Navbar