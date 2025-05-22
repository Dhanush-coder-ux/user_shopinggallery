import React, { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext(); 

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const backend_url =import.meta.env.VITE_BACKEND_URL;
  const [products,setProducts] =useState([]);
  const [search,setSearch]=useState('');
  const [showsearch,setShowSearch]=useState(false);
  const [cartitem,setCartItem]=useState({})
  const navigate =useNavigate()
  const [token,setToken]=useState([]);




  // get products function

  const getProductData = async () =>{
    const response =await axios.get(`${backend_url}/list`)
    

    if (response.status === 200) {
      
      setProducts(response.data.products)
    } else {
      toast.error(response.data.message)
      
    }
  }
  useEffect(()=>{
    getProductData()
   
  },[])



// add cart function
  const addTOcart = async (itemid, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }
  
    let cartdata = structuredClone(cartitem);
  
    if (cartdata[itemid]) {
      if (cartdata[itemid][size]) {
        cartdata[itemid][size] += 1;
      } else {
        cartdata[itemid][size] = 1;
      }
    } else {
      cartdata[itemid] = {};
      cartdata[itemid][size] = 1;
    }
  
    setCartItem(cartdata);

    if (token) {
      try {
        const response = await axios.post(`${backend_url}/cart/add-cart`, {
          product_id: itemid,
          size: size,
          quantity: 1
        }, {
          headers: {
            "Authorization": `Bearer ${token}` 
          }
        });
        
        toast.success(response.data.message, { position: "top-right", autoClose: 2000 });
      } catch (error) {
        toast.error(error.response?.data?.detail || error.message, { position: "top-right", autoClose: 2000 });
        console.log(error);
      }
    }
    else {
      toast.error("Token not available", { position: "top-right", autoClose: 2000 });
    }
};


 
// update cart function
const updateQuantity =async (itemid,size,quantity)=>{
  let cartdata =structuredClone(cartitem);
  cartdata[itemid][size]=quantity
  setCartItem(cartdata)
  console.log(itemid);
  
  if (token) {
    try {
      await axios.put(`${backend_url}/cart/update-cart`,{product_id:itemid,size:size,quantity:parseInt(quantity)},
        {
          headers: {
              "Authorization": `Bearer ${token}`,
          },
      }
      ) 
    } catch (error) {
        toast.error(error.message,{position:"top-right",autoClose:2000});
        console.error(error.message);  
    } 
  } else {
    toast.error("token is not define")
    
  }
}





  //  delete cart function

  const deleteCart = async (productId, size) => {
  try {
    await axios.delete(`${backend_url}/cart/delete-cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
    product_id: productId,
    size: size
  },
    });

 
    getUserCart();
    toast.success("Item deleted from cart.");
  } catch (err) {
    console.error("Failed to delete item from cart:", err);
    toast.error("Failed to delete item from cart.");
  }
};




  // get user cart function
  const transformCartData = (cartdata) => {
    const transformed = {};
  
    cartdata.forEach((item) => {
      const productId = item.product_id || item.id; // depends on your backend response
      const size = item.size;
      const quantity = item.quantity;
  
      if (!transformed[productId]) {
        transformed[productId] = {};
      }
  
      transformed[productId][size] = quantity;
    });
  
    return transformed;
  };
  
  const getUserCart = async (authToken = token) => {
    try {
      const response = await axios.get(`${backend_url}/cart/get-cart`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const transformedCart = transformCartData(response.data.cartdata);
      setCartItem(transformedCart);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };
  


  
  const getCartAmount = () => {
    let totalAmount = 0;
  
    for (const productId in cartitem) {
      for (const size in cartitem[productId]) {
        const quantity = cartitem[productId][size];
        const product = products.find((p) => p.id.toString() === productId.toString());
  
        if (product) {
          totalAmount += product.price * quantity;
        }
      }
    }
  
    return totalAmount;
  };

  
  


  
  const getCartCount= () => {
    let totalcount = 0;
    for (const items in cartitem){
      for(const item in cartitem[items]){
        try{
          if(cartitem[items][item]){
            totalcount+=cartitem[items][item]
          }
        }catch(error){

        }
      }
    }
    return totalcount;

  }



  useEffect(()=>{
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setToken(storedToken);
      getUserCart(storedToken);
    }
  },[])







  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showsearch,
    setShowSearch,
    addTOcart,
    cartitem,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    setToken,
    token,
    backend_url,
    deleteCart,
    setCartItem

  };


  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
};

export default ShopContextProvider; // Ensure this is correctly exported