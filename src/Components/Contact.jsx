import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../shared/Footer'
import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission here, e.g., send data to an API.
        console.log(formData);
      };
  return (
    <>
       <Navbar/>
        <div className='bg-blue-500 h-[250px] w-[1240px ] px-6 rounded-lg mx-8 justify-center flex items-center my-2 '>
            <h2 className=' text-center text-5xl  text-white'>Our Contact</h2>
        </div>
        <div className=' container mx-auto mt-8 w-[860px] flex flex-col-1 md:flex-row '>
         <div className="max-w-md mx-auto my-8">
          <form onSubmit={handleSubmit} className="  rounded px-16 pt-6 pb-8 mb-4">
          <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2  w-10" htmlFor="name">
               Name
            </label>
           <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
           
          
      </form>
      </div>
      <div className=" space-y-7 p-4 rounded-lg">
           <h2 className="text-xl font-semibold">GET IN TOUCH</h2>
           <p className="text-gray-600 space-y-4">
             Call. 617-718-4639<br />
             Email. group@imexcargo.com<br />
             Address. 1R Newbury Street, Peabody, MA 01960
        </p>
     
       </div>
        </div>
        
        <Footer/>
    </>
    
  )
}

export default Contact