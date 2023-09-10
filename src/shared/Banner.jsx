import {motion} from "framer-motion"
import {fadeIn} from '../variants';
const Banner = ({imex,heading,subheading}) => {
  return (
    
      <div className='gradientBg  rounded-[80px] md:p-9 px-4 py-9'>
         <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10 '>
           <motion.div  
           variants={fadeIn("down",0.2)} 
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}
           >
                  <video src={imex}  className='lg:h-[400px] w-[486px]  bg-rounded-lg ' autoPlay loop muted/>
           </motion.div>
           <motion.div 
              variants={fadeIn("up",0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
           className='md:w-3/5'>
               <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
               <p className='text-white text-2xl mb-8 block'>{subheading} </p>
               
                
           </motion.div>

         </div>
      </div>
    
  )
}

export default Banner