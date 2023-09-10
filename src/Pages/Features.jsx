import imex7 from '../images/imex7.jpg'
import imex8 from '../images/imex8.jpg'

import {motion} from "framer-motion"
import {fadeIn} from '../variants';
const Features = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto bg-white space-y-10' id="about">
        
         <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            <motion.div 
              variants={fadeIn("up",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}className='md:w-1/2'>
                <img src ={imex7} alt='' className='w-[450px] h-[200px]'/>
            </motion.div>
            <motion.div 
              variants={fadeIn("right",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} className='md:w-2/5'>
              <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Why work with ImEx Cargo?</h2>
               <h5 className="md:text-xl text-2xl font-bold text-black my-3 leading-normal">Here is what some of our partners and clients have to say.</h5>
               <p className='text-tartiary text-lg mb-7'>“We know we can always count on ImEx to get our products to our customers on time.”</p>
               <p className='text-tartiary text-lg mb-7'>“ImEx Cargo is the only GSA that continues to deliver revenue.”</p>
               <p className='text-tartiary text-lg mb-7'>“In logistics, you find challenges around every corner. ImEx handles exceptions without missing a beat.”</p>
               <p className='text-tartiary text-lg mb-7'>“They are professional and knowledgeable, and they make my life easier.”</p>
            </motion.div>
         </div>
         <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <motion.div 
              variants={fadeIn("up",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}className='md:w-1/2'>
                <img src ={imex8} alt='' className='w-[450px] h-[200px]'/>
            </motion.div>
            <motion.div 
              variants={fadeIn("right",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}} className='md:w-2/5'>
              <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Why work with ImEx Cargo?</h2>
               <h5 className="md:text-xl text-2xl font-bold text-black my-3 leading-normal">Here is what some of our partners and clients have to say.</h5>
               <p className='text-tartiary text-lg mb-7'>“We know we can always count on ImEx to get our products to our customers on time.”</p>
               <p className='text-tartiary text-lg mb-7'>“ImEx Cargo is the only GSA that continues to deliver revenue.”</p>
               <p className='text-tartiary text-lg mb-7'>“In logistics, you find challenges around every corner. ImEx handles exceptions without missing a beat.”</p>
               <p className='text-tartiary text-lg mb-7'>“They are professional and knowledgeable, and they make my life easier.”</p>
            </motion.div>
         </div>
    </div>
  )
}

export default Features