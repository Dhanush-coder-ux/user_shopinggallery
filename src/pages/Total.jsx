import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { motion } from 'framer-motion';
import { fadein } from '../variants';
import { assets } from '../assets';

const Total = () => {
    const {currency ,delivery_fee,getCartAmount}=useContext(ShopContext)
  return (
    <motion.div
                      variants={fadein('left', 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}
     className='w-full'>

        <motion.div className='text-2xl'
                              variants={fadein('up', 0.2)}
                              initial="hidden"
                              whileInView={"show"}
                              viewport={{ once: false, amount: 0 }}
        
        >
           <img src={assets.total} alt="total" className='w-36 sm:w-44 md:w-48 lg:w-48 mb-6' />
        </motion.div>

      <div className='flex flex-col gap-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency} {delivery_fee}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
           <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>

        </div>
      </div>
    </motion.div>
  )
}

export default Total
