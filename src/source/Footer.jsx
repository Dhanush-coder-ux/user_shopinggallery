import React from 'react';
import { assets } from '../assets';

const Footer = () => {
  return (
    <div className="bg-gray-200 py-10 mt-40 my-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm">
         
          <div>
            <img src={assets.name} className="mb-5 w-40 sm:w-45 md:w-50" alt="Brand Logo" />
            <p className="w-full md:w-2/3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic, natus eum aut placeat earum
              perferendis, eos dicta officia optio harum veniam excepturi deleniti facilis, nam pariatur blanditiis magnam
              incidunt?
            </p>
          </div>

          <div>
            <p className="text-xl font-medium mb-5 text-gray-800">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Delivery</li>
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5 text-gray-800">FOLLOW US</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="hover:text-black cursor-pointer">Facebook</li>
              <li className="hover:text-black cursor-pointer">Twitter</li>
              <li className="hover:text-black cursor-pointer">Instagram</li>
              <li className="hover:text-black cursor-pointer">LinkedIn</li>
            </ul>
          </div>
        </div>

   
        <div className="text-center mt-10 text-gray-500 text-xs">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
