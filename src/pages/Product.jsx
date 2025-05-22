import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets";
import { motion } from 'framer-motion';
import { fadein } from '../variants';
import RelatedProducts from "../source/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addTOcart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setsize] = useState('');
  const [isAddingToCart, setIsAddingToCart] = useState(false); // Add loading state

  useEffect(() => {
    if (!products || products.length === 0) return; 

    const product = products.find((item) => item.id == productId);
    
    if (product) {
      setProductData(product);
      setImage(product.images?.[0] || ""); 
    }
  }, [productId, products]);

  const handleAddToCart = async () => {
    if (!size) {
      alert("Please select a size first");
      return;
    }
    
    setIsAddingToCart(true); // Start loading
    try {
      await addTOcart(productData.id, size);
      // If you want to show a success message:
      // alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      // Handle error if needed
    } finally {
      setIsAddingToCart(false); // Stop loading
    }
  };

  if (!productData) return <div className="opacity-0">Loading...</div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images?.map((item, index) => (
              <img
                src={item} 
                key={index}
                onClick={()=>setImage(item)}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer  hover:scale-90 transition ease-in-out"
              />
            ))}
          </div>
          <div className="w-full flex sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* product infos */}
        <div className='flex-1'>
          <motion.h1
            variants={fadein('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
           className='font-medium text-2xl text-[#83B505] mt-2'>{productData.name}</motion.h1>
          <div className="flex items-center gap-1 mt-3">
            <p></p>
          </div>
          <motion.p 
            variants={fadein('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
          className="mt-5 text-3xl  font-bold">{currency}{productData.price}</motion.p>
          <motion.p 
                    variants={fadein('left', 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
          className="mt-5 text-sm text-gray-400 md:w-4/5">{productData.description}</motion.p>
          <div className="flex flex-col gap-4 my-8">
          <p className="text-gray-400 flex">
                Select Size : <span className="text-[#83B505] flex"> {size}</span>
              </p>

            <motion.div 
                      variants={fadein('up', 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0 }}
            className="flex gap-2">
                  {productData.sizes.map((item,index)=>(
                    <button onClick={()=>{setsize(item)}} key={index} className={` rounded-full py-3 px-3 cursor-pointer  hover:scale-90 transition ease-in-out bg-gray-200 ${item === size ? 'bg-green-500 text-white' : 'bg-gray-200'}`}> {item}</button>
                  ))}
            </motion.div>
          </div>
          <button 
            onClick={handleAddToCart}
            disabled={isAddingToCart || !size} // Disable when loading or no size selected
            className={`px-6 py-3 flex rounded-lg cursor-pointer hover:scale-110 transition ease-in-out
              bg-white shadow-xl border-0 outline-0 text-[#83B505] items-center justify-center
              ${(isAddingToCart || !size) ? 'opacity-75' : ''}`}
          >
            {isAddingToCart ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#83B505]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding...
              </>
            ) : (
              <>
                <img src={assets.cart} className="flex mr-5 text-white" alt="" />
                ADD TO CART
              </>
            )}
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap2">
            <p>100% Original Product</p>
            <p>Cash On delivery Is Available On this Product .. </p>
            <p>Easy Return Exchange Policy Within In 4 Days.</p>
          </div>
        </div>
      </div>
      <RelatedProducts category={productData.category} subcategory={productData.subcategory}/>
    </div>
  );
};

export default Product;