import  Logo from "../assets/Imex_Logo.png"
import fbImg from "../assets/facebook.jpg"
import Twitter from "../assets/twitter.jpg"
import LinkedIn from "../assets/linkedin.jpg"
const Footer = () => {
  return (
    <div className="bg-[#a4c920] rounded-2xl md:mx-6 mb-4 rounded-tr-[80px] rounded-bl-[80px] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
               < a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary' >
               <img src={Logo} alt="" className=" w-[120px] h-[60px]"/>
                </a>   

                <p className="block hover:text-gray-300">Call. 617-718-4639</p>
                <p className="block hover:text-gray-300">Email. group@imexcargo.com</p>
                <p className="block hover:text-gray-300">Address. 1R Newbury Street</p>
                <p className="block hover:text-gray-300">Peabody, MA 01960</p>
                 <div>
                     <input type="email" name="email" id="email" placeholder='Your email' className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"/>
                     <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"/>
                 </div>
         </div>
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start "> 
          <div className="space-y-4 mt-5">
              <h4 className="text-3xl text-black">USEFUL LINKS</h4>
              <ul className="space-y"></ul>
                <a href="/" className="block hover:text-gray-300">Home</a>
                <a href="/" className="block hover:text-gray-300">Tracker</a>
                <a href="/" className="block hover:text-gray-300">Services</a>
                <a href="/" className="block hover:text-gray-300">Contact</a>
           </div>
           <div className="space-y-4 mt-5">
              
              <p className="block hover:text-black lg:text-3xl  ">
                  <span className="text-primary">We Ship Your</span><br/>
                   Shipments with<br/>
                  Honesty<br/>
                  Integrity<br/>
                  Transparency
              </p>
           </div>   
            
        </div>
         
      </div>
      <hr/>
       <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
          <p>© 2023 ImEx Cargo. All rights reserved</p>
          <div className="flex items-center space-x-5">
              <img src={fbImg} alt="" className="w-8  h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
              <img src={Twitter} alt=""  className="w-8  h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
              <img src={LinkedIn} alt=""  className="w-8  h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
          </div>
       </div>
    </div>
  )
}

export default Footer