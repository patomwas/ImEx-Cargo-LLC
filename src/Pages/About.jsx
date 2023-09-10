import React from 'react'
import imex5 from '../images/imex5.jpg'
import imex6  from '../images/imex6.jpg'
import {motion} from "framer-motion"
import {fadeIn} from '../variants';
const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto bg-primary space-y-10' id="about">
         <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <motion.div 
              variants={fadeIn("right",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} className='md:w-1/2'>
                <img src ={imex5} alt='' className='w-[450px] h-[200px]'/>
            </motion.div>
            <motion.div 
              variants={fadeIn("left",0.3)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} className='md:w-2/5'>
              <h2 className='md:text-5xl text-3xl font-bold text-white mb-5 leading-normal'>3PL/4PL SERVICE</h2>
               <p className='text-tartiary text-lg mb-7'>You require custom 3PL and 4PL services that are safe and consistently dependable. Customers repeatedly choose ImEx Cargo time and again to ship products and materials locally, nationally and internationally to almost anywhere in the world. As an integrated logistics service provider, ImEx Cargo manages end-to-end transportation of materials. We are an approved government contractor for both prime and subprime contracts with multiple supplier diversity certifications.</p>
            </motion.div>
         </div>
         <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            <motion.div 
              variants={fadeIn("up",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}className='md:w-1/2'>
                <img src ={imex6} alt='' className='w-[450px] h-[200px]'/>
            </motion.div>
            <motion.div 
              variants={fadeIn("right",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} className='md:w-2/5'>
              <h2 className='md:text-5xl text-3xl font-bold text-white mb-5 leading-normal'>GOVERNMENT CONTRACTOR</h2>
               <p className='text-tartiary text-lg mb-7'>Achieve supplier diversity goals with an approved government contractor for both prime and subprime contracts with multiple certifications.</p>

            </motion.div>
         </div>
    </div>
  )
}

export default About