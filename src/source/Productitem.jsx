import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, img, name, price }) => {
  const { currency } = useContext(ShopContext);

  const imageUrl = Array.isArray(img) && img.length > 0 ? img[0] : "https://via.placeholder.com/200";
  console.log(imageUrl);
  console.log(img);
  
  

  return (
    <Link
      className="bg-white shadow-2xl hover:shadow-xl transition p-3 text-gray-400 cursor-pointer body"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden w-full h-[200px]">
        <img
          src={imageUrl}
          className="w-full h-full object-cover hover:scale-110 transition ease-in-out"
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm text-[#83B505]">{name}</p>
      <p className="pt-3 font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
