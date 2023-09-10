import React from 'react'
import imex from "../assets/IMEX.mp4"
import Banner from '../shared/Banner'
const Hero = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 ' id='home'> 
       <Banner imex={imex} heading="Welcome To ImEx Cargo" subheading="You need a proffesional representation  and support to gain traction efficiently in the northeastern. You dont have time for mediocre service.ImEx Cargo professionals customize GSA operations to your logistics and communication needs." />
      
    </div>
  )
}

export default Hero