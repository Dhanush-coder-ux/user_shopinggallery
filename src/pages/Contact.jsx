import React from 'react'
import { assets } from '../assets'
import { motion } from 'framer-motion';
import { fadein } from '../variants';

const Contact = () => {
  return (
    <div className='border-t'>
      <motion.div 
            variants={fadein('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
      className='mt-8'>
          <img src={assets.contactus} className="ml-3 w-30 sm:w-40 md:w-50 lg:w-55" alt="" />
      </motion.div>
      <motion.div
            variants={fadein('down', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
       className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.constactimage} className='w-full md:max-w-[480px]' alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
            <p className="text-lg font-semibold">Our Store</p>
            <p>📍 <strong>Address:</strong> [Your Business Address]</p>
            <p>📧 <strong>Email:</strong> <a href="mailto:[Your Support Email]" className="text-blue-500 hover:underline">[Your Support Email]</a></p>
            <p>📞 <strong>Phone:</strong> <a href="tel:[Your Phone Number]" className="text-blue-500 hover:underline">[Your Phone Number]</a></p>
            <p>⏰ <strong>Business Hours:</strong> [Your Business Hours]</p>
          </div>


          <div className="flex flex-col justify-center items-start gap-6">
            <p className="text-lg font-semibold">Follow Us</p>
            <p>📸 <strong>Instagram:</strong> <a href="[Your Instagram Link]" target="_blank" className="text-blue-500 hover:underline">@YourInstagramHandle</a></p>
            <p>📘 <strong>Facebook:</strong> <a href="[Your Facebook Link]" target="_blank" className="text-blue-500 hover:underline">@YourFacebookPage</a></p>
            <p>🐦 <strong>Twitter/X:</strong> <a href="[Your Twitter Link]" target="_blank" className="text-blue-500 hover:underline">@YourTwitterHandle</a></p>
            <p>📌 <strong>Pinterest:</strong> <a href="[Your Pinterest Link]" target="_blank" className="text-blue-500 hover:underline">@YourPinterestHandle</a></p>
          </div>


         
       



      </motion.div>
      
      <motion.div
            variants={fadein('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
       className="flex flex-col justify-center items-start gap-6 mb-5 py-4">
  <p className="text-lg font-semibold ">Customer Support Hours</p>
  <p>🕒 <strong>Monday – Friday:</strong> [Your Weekday Hours]</p>
  <p>🕒 <strong>Saturday – Sunday:</strong> [Your Weekend Hours or "Closed"]</p>
</motion.div>



    </div>
  )
}

export default Contact
