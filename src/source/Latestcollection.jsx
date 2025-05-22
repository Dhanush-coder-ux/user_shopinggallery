import React, { useContext, useEffect, useState } from "react";

import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets";
import { motion } from 'framer-motion';
import { fadein } from '../variants';
import ProductItem from "./Productitem";

const Latestcollection = () => {
  const { products } = useContext(ShopContext);
  const [latest, setlatest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setlatest(products.slice(0,10));
      setLoading(false);
    }
  }, [products]);

  if (loading || !products) {
    return (
      <div className="flex justify-center items-center h-64">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1,
            ease: "linear"
          }}
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        ></motion.div>
      </div>
    );
  }

  return (
    <motion.div className="my-10"
      variants={fadein('left', 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}>

      <motion.div className="flex items-center justify-center mb-10"
        variants={fadein('left', 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <img src={assets.line1} className="ml-2 w-10 sm:w-25 md:w-50 lg:w-55" alt="decorative-line" />
        <img src={assets.latest} className="ml-3 w-50 sm:w-55 md:w-55 lg:w-55" alt="Bestsellers" />
        <img src={assets.line1} className="ml-2 w-10 sm:w-25 md:w-50 lg:w-55" alt="decorative-line" />
      </motion.div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latest.map((item,index) => (
          <ProductItem
            key={index}
            id={item.id} 
            img={item.images} 
            name={item.name} 
            price={item.price}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Latestcollection;