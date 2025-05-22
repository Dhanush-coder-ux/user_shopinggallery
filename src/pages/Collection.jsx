import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets";
import Productitem from "../source/Productitem";
import { motion } from 'framer-motion';
import { fadein } from '../variants';
import loadinganimation from '../loading.json'
import Lottie from 'lottie-react'

const Collection = () => {
  const { products ,search,showsearch} = useContext(ShopContext);
  const [showfilter, setShowFilter] = useState(false);
  const [filterproduct, setFilterProduct] = useState([]);
  const [category, setCatagorie] = useState([]);
  const [subcatagorie, setSubCatagorie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  setLoading(true);
  const timeout = setTimeout(() => {
    setFilterProduct(products);
    setLoading(false);
  }, 1000);

  return () => clearTimeout(timeout);
}, [products]);



  
  // Category filter
  const toggle = (e) => {
    const value = e.target.value;
    setCatagorie((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Subcategory filter
  const subtoggle = (e) => {
    const value = e.target.value;
    setSubCatagorie((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

 

  // Apply filtering
  useEffect(() => {
    setLoading(true)
    let productcopy = [...products];

    if (search && showsearch){
      productcopy = productcopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    // Filter by category
    if (category.length > 0) {
      productcopy = productcopy.filter((item) => category.includes(item.category)); 
    }

    // Filter by subcategory
    if (subcatagorie.length > 0) {
      productcopy = productcopy.filter((item) => subcatagorie.includes(item.subcategory));
    }

    setFilterProduct(productcopy);
  }, [category, subcatagorie, products,search,showsearch,products]); 


 
 



  // Initial products load
  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Sidebar Filters */}
      <div className="min-w-60">
        <div
          className="flex items-center gap-2 cursor-pointer my-2 text-xl"
          onClick={() => setShowFilter(!showfilter)}
        >
          <p>FILTERS</p>
          <img
            src={assets.right}
            className={`h-3 sm:hidden transition-all duration-300 ease-in-out ${
              showfilter ? "rotate-90" : ""
            }`}
            alt=""
          />
        </div>

        {/* Categories Filter */}
        <motion.div 
                  variants={fadein('left', 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
        className={`border border-gray-400 pl-5 py-4 mt-5 ${showfilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col text-sm font-light gap-3 text-gray-400">
            <p className="flex gap-3">
              <input type="checkbox" className="accent-[#83B505] w-3" value="Men" onChange={toggle} /> Men
            </p>
            <p className="flex gap-3">
              <input type="checkbox" className="accent-[#83B505] w-3" value="Women" onChange={toggle} /> Women
            </p>
            <p className="flex gap-3">
              <input type="checkbox" className="accent-[#83B505] w-3" value="Kids" onChange={toggle} /> Kids
            </p>
          </div>
        </motion.div>

        {/* Subcategories Filter */}
        <motion.div 
                  variants={fadein('left', 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
        className={`border border-gray-400 pl-5 py-4 my-5 ${showfilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col text-sm font-light gap-3 text-gray-400">
            <p className="flex gap-3">
              <input type="checkbox" className="
             accent-[#83B505] w-3" value="Topwear" onChange={subtoggle} /> Topwear
            </p>
            <p className="flex gap-3">
              <input type="checkbox" className="accent-[#83B505] w-3" value="Bottomwear" onChange={subtoggle} /> Bottomwear
            </p>
            <p className="flex gap-3">
              <input type="checkbox" className="accent-[#83B505] w-3" value="Winterwear" onChange={subtoggle} /> Winterwear
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side (Products Display) */}
      <motion.div
                variants={fadein('up', 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
      
      className="flex-1">
        <motion.div 
                  variants={fadein('left', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
        className="flex justify-between">
          <img
            src={assets.allcollection}
            alt=""
            className="w-40 mt-2 h-4 sm:w-55 md:w-60 lg:w-60"
          />

         
        </motion.div>

        {/* Products List */}
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-4">
  {loading ? (
    <div className="col-span-full flex justify-center items-center h-40">
      <Lottie

        animationData={loadinganimation}
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  ) : filterproduct.length > 0 ? (
    filterproduct.map((item, index) => (
      <Productitem
        key={index}
        id={item.id}
        name={item.name}
        price={item.price}
        img={item.images}
      />
    ))
  ) : (
    <p className="col-span-full text-center text-gray-500">
      No products found
    </p>
  )}
</div>

      </motion.div>
    </div>
  );
};

export default Collection;
