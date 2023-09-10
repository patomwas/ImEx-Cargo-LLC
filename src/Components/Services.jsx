import React from 'react'
import Navbar from '../Pages/Navbar'
import  Imex2 from '../images/Imex2.jpg'
import  imex4 from '../images/imex4.jpg'
import  imex3 from '../images/imex3.jpg'
import {motion} from "framer-motion"
import {fadeIn} from '../variants';
import Footer from '../shared/Footer';
const Services = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='bg-blue-500 h-[250px] w-[1240px ] px-6 rounded-lg mx-8 justify-center flex items-center my-2 '>
            <h2 className=' text-center text-5xl  text-white'>Our Services</h2>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center my-8 md:mx-8 gap-8'>
            <motion.div 
              variants={fadeIn("up",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}className='md:w-1/2 '>
                <img src ={Imex2} alt='' className='w-[3/4] h-[200px]'/>
            </motion.div>
            <motion.div 
              variants={fadeIn("right",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} className='md:w-2/5'>
              <h2 className='md:text-3xl text-2xl font-bold text-primary mb-5 leading-normal'>GENERAL SALES AGENT</h2>
              <p>ImEx Cargo provides a comprehensive GSSA services for our airline partners.</p>
              <p>As Airline GSA ImEx Cargo effectively markets and sells the cargo capacity on all 
                scheduled and non-scheduled freighter flights offered by its airline partners.</p>
              <p>We provide the competitive information concerning local market rates and conditions you need for greater bargaining leverage and smarter 
                operational decisions used to increase market share and tonnages in a market not directly covered by an airline.</p>
              
               <p className='text-tartiary text-lg mb-7'></p>
               
            </motion.div>
         </div>

         <div className='flex flex-col md:flex-row-reverse justify-around items-center gap-8 '>
            <motion.div   
              variants={fadeIn("up",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}className='md:w-1/2 ml-8'>
                <img src ={imex3} alt='' className='w-[450px] h-[200px] '/>
            </motion.div>
            <motion.div 
              variants={fadeIn("right",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} className='md:w-2/5'>
              <h2 className='md:text-3xl text-2xl font-bold text-primary mb-5 leading-normal'>3PL/4PL SERVICE</h2>
              <p>Our professional team can help our customers to get a fully integrated supply chain solution system whether you need refrigeration upon arrival,
                 pick and pack operations, door delivery solutions we can accommodate most any commodity.<br/>

                      Distribution/ Warehousing/ Logistics is what We Do!</p>
              
               <p className='text-tartiary text-lg mb-7'></p>
               
            </motion.div>
         </div>
         <div className='flex flex-col md:flex-row my-8 justify-between items-center md:mx-8 gap-8'>
            <motion.div 
              variants={fadeIn("up",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}className='md:w-3/4'>
                <img src ={imex4} alt='' className='w-[450px] h-[200px]'/>
            </motion.div>
            <motion.div 
              variants={fadeIn("right",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} className='md:w-2/5'>
              <h2 className='md:text-3xl text-2xl font-bold text-primary mb-5 leading-normal'>Airline GSA and GSSA</h2>
              <p>As an airline GSA and GSSA service provider, we maximize your success in the New England, New York,
                 New Jersey and/or Philadelphia markets without investing excessive time or adding human resources expenses.</p>
              
               <p className='text-tartiary text-lg mb-7'>You need professional representation and support to efficiently gain traction in the northeastern US markets. You don’t have time for mediocre service. 
                   ImEx Cargo professionals customize GSA operations to your logistics and communication needs.</p>
               <p>Your professionally designed logistics solution will include all or a mix of the following services:</p>
            </motion.div>
         </div>
         <Footer/>
    </div>
  )
}

export default Services