import React from 'react'
import { assets } from '../assets'
import { motion } from 'framer-motion';
import { fadein } from '../variants';


const About = () => {
  return (
    <div       className='border-t pt-8'>
      <motion.div 
      variants={fadein('right', 0.2)}
                                  initial="hidden"
                                  whileInView={"show"}
                                  viewport={{ once: false, amount: 0 }}
>
        <img src={assets.aboutus} alt="" className="ml-3 w-30 sm:w-40 md:w-45 lg:w-50 " />
      </motion.div>
      <motion.div 
            variants={fadein('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
      className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.aboutimage} className='w-full md:max-w-[480px] selection:bg-[#83B505] selection:text-white' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-500'>
        <p className='text-2xl selection:bg-[#83B505] selection:text-white'>About Us</p>
        <p className='selection:bg-[#83B505] selection:text-white'>Welcome to [Shopin gallery], your ultimate destination for stylish and elegant dresses! We believe that fashion is more than just clothing—it’s a statement of confidence, personality, and self-expression. Our goal is to provide you with the latest trends, timeless classics, and high-quality dresses that make you look and feel amazing.</p>
        


        <b className='
       selection:bg-[#83B505] selection:text-white text-2xl'>Who We Are</b>
        <p className='selection:bg-[#83B505] selection:text-white'>At [Shoping gallery], we are passionate about fashion and dedicated to bringing you a curated collection of stunning dresses for every occasion. Whether you're looking for a casual day dress, a chic evening gown, or the perfect outfit for a special event, we have something just for you.</p>
        </div>
      </motion.div>
      <motion.div
       variants={fadein('up', 0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0 }}
      
      >

      <div className='text-4xl py-8 selection:bg-[#83B505] selection:text-white '>
        <p>What We Offer</p>
        

      </div>
      <div className='selection:bg-[#83B505] selection:text-white flex flex-col text-sm font-medium gap-2'>
      <b>Our collection includes:</b>
        <p>👗 Casual Dresses – Comfortable and stylish for everyday wear.</p>
        <p>💃 Party & Evening Dresses – Stand out with elegance..</p>
        <p>👰 Bridal & Bridesmaid Dresses – Perfect for your big day..</p>
        <p>🎀 Work & Formal Dresses – Dress to impress at work or events..</p>
        </div>
      <div className='selection:bg-[#83B505] selection:text-white text-4xl py-8'>
        <p>Why Shop With Us?</p>
      </div>

      <div className='selection:bg-[#83B505] selection:text-white flex flex-col text-sm font-medium gap-2'>
     
        <p>✨ High-Quality Fabrics – We carefully select premium materials for comfort and durability.</p>
        <p>🚚 Fast & Reliable Shipping – Your dream dress, delivered to your doorstep.</p>
        <p>🛍️ Trendy & Affordable – The latest styles at great prices..</p>
        <p>💬 Dedicated Customer Support – We’re here to assist you with any queries..</p>
        </div>


        <div className='selection:bg-[#83B505] selection:text-white text-4xl py-8'>
        <p>Get in Touch</p>


      </div>
      <div className='selection:bg-[#83B505] selection:text-white flex flex-col text-sm font-medium gap-2'>
    
        <p>Have a question? Need style advice? We’d love to hear from you! Contact us at [shopinggallery@gmail.com] or connect with us on [instagram].</p>
        <p>Thank you for choosing @instagram-[Shoping_gallery]—where fashion meets elegance! 💖</p>

        </div>

        </motion.div>
    </div>
  )
}

export default About
