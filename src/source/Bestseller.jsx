import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets';
import Product from '../pages/Product';

import { motion } from 'framer-motion';
import { fadein } from '../variants';
import ProductItem from './Productitem';

const Bestseller = () => {
    const { products } = useContext(ShopContext); 
    const [bestseller, setBestseller] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (products) {
            const bestproduct = products.filter((item) => item.bestseller === true); 
            setBestseller(bestproduct.slice(0, 5));
            setLoading(false);
        }
    }, [products]);
    
    useEffect(() => {
        console.log("Bestseller Products:", bestseller);
    }, [bestseller]);
    
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
        <motion.div 
            variants={fadein('left', 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            className="my-10"
        >
            <motion.div 
                className="flex items-center justify-center mb-10"
                variants={fadein('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
            >
                <img src={assets.line1} className="ml-2 w-10 sm:w-25 md:w-50 lg:w-55" alt="decorative-line" />
                <img src={assets.bestseller} className="ml-3 w-30 sm:w-35 md:w-40 lg:w-40" alt="Bestsellers" />
                <img src={assets.line1} className="ml-2 w-10 sm:w-25 md:w-50 lg:w-55" alt="decorative-line" />
            </motion.div>
            
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestseller.map((item,index) => (
                    <ProductItem
                        key={index} 
                        id={item.id} 
                        name={item.name} 
                        img={item.images} 
                        price={item.price} 
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default Bestseller;