import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets";

import { motion } from "framer-motion";
import { fadein } from "../variants";
import ProductItem from "./Productitem";

const RelatedProducts = ({ category, subcategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productscopy = products.filter(
        (item) => item.category === category && item.subcategory === subcategory
      );

      setRelated(productscopy.slice(0, 5)); 
    }
  }, [products, category, subcategory]); 

  return (
    <motion.div
          variants={fadein('up', 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0 }}
     className="my-24">
      <motion.div 
            variants={fadein('left', 0.1)}
                              initial="hidden"
                              whileInView={"show"}
                              viewport={{ once: false, amount: 0 }}
      className="text-center py-2">
        <img
          src={assets.related}
          className="items-center w-50 sm:w-55 md:w-60 lg:w-60 mb-6"
          alt="Related Products"
        />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {related.length > 0 ? (
          related.map((item) => (
            <ProductItem key={item.id} id={item.id} name={item.name} price={item.price} img={item.images} />
          ))
        ) : (
          <p className="text-center col-span-full">No related products found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default RelatedProducts;
