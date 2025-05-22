import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets';
import { motion } from 'framer-motion';
import { fadein } from '../variants';
import axios from 'axios';
import Productnotfound from '../product.json';
import Lottie from 'lottie-react'

const Order = () => {
  const { products, currency, token, backend_url } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadOrderData = async () => {
    try {
      if (!token) return null;
      setLoading(true);
      const response = await axios.post(
        `${backend_url}/orders/userorders`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        let allOrderItem = [];
        response.data.OrderItems.forEach((Orders) => {
          Orders.products.forEach((item) => {
            item["status"] = Orders.status;
            item["payment"] = Orders.payment;
            item["paymentmethod"] = Orders.paymentmethod;
            item["date"] = Orders.date;
            allOrderItem.push(item);
          });
        });
        setOrderData(allOrderItem.reverse());
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
    // eslint-disable-next-line
  }, [token]);

  return (
    <div className='border-t pt-16'>
      <motion.div
        variants={fadein('right', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className='mb-10'
      >
        <img src={assets.myorders} alt="" className='w-40 sm:w-45 md:50 ' />
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className='flex flex-col items-center py-10'>
          {/* Simple Spinner */}
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mb-4"></div>
          <div className='text-gray-600 font-medium'>Loading your orders...</div>
        </div>
      )}

      {/* No Orders State */}
      {!loading && orderData.length === 0 && (
        <div className='flex flex-col items-center py-10'>
          <Lottie animationData={Productnotfound}/>
          <div className='text-gray-500 text-lg font-medium'>No products in your cart.</div>
        </div>
      )}

      {/* Orders List */}
      {!loading && orderData.length > 0 && (
        <div>
          {orderData.map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row md:items-center justify-between gap-4'>
              <div className='flex items-start text-sm'>
                <img src={item.images[0]} alt="" className='w-16 sm-20' />
                <div className='ml-4'>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-4 mt-2 text-gray-400'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-2'>Date: <span>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-2'>Payment: <span>{item.paymentmethod}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-3'>
                  <p className='min-w-2 h-2 rounded-full bg-green-300'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button
                  onClick={loadOrderData}
                  className='border px-4 py-2 text-sm font-medium cursor-pointer rounded-sm'
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Order
