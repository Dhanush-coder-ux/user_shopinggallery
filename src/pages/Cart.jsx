import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets";
import Total from "./Total";
import { motion } from 'framer-motion';
import { fadein } from '../variants';
import axios from "axios";
import loadings from '../loading.json'
import Lottie from "lottie-react";
import cartempty from '../cart.json'

const Cart = () => {
  const {
    products,
    cartitem,
    currency,
    updateQuantity,
    deleteCart,
    navigate,
    backend_url,
    token,
  } = useContext(ShopContext);

  const [cartdata, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${backend_url}/cart/get-cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Cart data from backend:", res.data.cartdata);
      setCartData(res.data.cartdata || []);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
      setCartData([]); // fallback to empty cart
    } finally {
      setLoading(false);
    }
  };

  // Fetch cart initially and whenever token or cart changes
  useEffect(() => {
    if (token) fetchCart();
  }, [token, cartitem]);

  // Modified delete function to refresh cart after deletion
  const handleDelete = async (id, size) => {
    await deleteCart(id, size);  // you can also make this await if deleteCart returns a promise
    fetchCart(); // refresh cart
  };

  return (
    <motion.div
      variants={fadein("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="border-t pt-14 ml-2"
    >
      <motion.div
        variants={fadein("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="mb-10"
      >
        <img
          src={assets.yourcart}
          className="w-36 sm:w-44 md:w-48 lg:w-48 mb-6"
          alt="Your Cart"
        />
      </motion.div>

      {loading ? (
        <div  className="flex justify-center items-center h-40">
               <Lottie animationData={loadings} style={{ height: "150px", width: "150px" }}/>
        </div>
   
      ) : (
        <div>
          {cartdata.length > 0 ? (
            cartdata.map((item, index) => (
              <div
                key={index}
                className="py-5 border-b grid grid-cols-[4fr_1fr_1fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20 hover:scale-90 transition"
                    src={item.images?.[0] ?? "https://via.placeholder.com/100"}
                    alt={item.name}
                  />
                  <div>
                    <p className="text-sm text-[#83B505]">{item.name}</p>
                    <p className="m-2">
                      {currency}
                      {item.price}
                    </p>
                    <p className="bg-gray-200 px-3 py-2 mt-1 rounded-2xl">
                      {item.size}
                    </p>
                  </div>
                </div>

                <input
                  type="number"
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value > 0) {
                      updateQuantity(item.id, item.size, value);
                    }
                  }}
                  min={1}
                  defaultValue={item.quantity}
                  className="border outline-0 rounded-full max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                />

                <img
                  src={assets.bin}
                  onClick={() => handleDelete(item.id, item.size)}
                  className="w-4 cursor-pointer hover:scale-110 transition"
                  alt="Delete Item"
                />
              </div>
            ))
          ) : (
               <div  className="flex flex-col items-center justify-center mt-8">
               <Lottie animationData={cartempty} style={{ height: "200px", width: "200px" }}/>
                <p className="text-gray-500 mt-4">Your cart is empty.</p>
        </div>
          )}
        </div>
      )}

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <Total />
          <div className="text-end w-full">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-[#83B505] px-3 py-3 my-8 text-white cursor-pointer"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
