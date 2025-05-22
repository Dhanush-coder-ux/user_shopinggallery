import { useContext, useState } from "react";
import { assets } from "../assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Her0 from "../pages/Her0";
import { useEffect } from "react";
import { ShopContext } from "../context/ShopContext";

const Nav = () => {
  const [visible,setVisible]=useState(false);

  <Her0 isSidebarOpen={visible} />
  // useEffect(() => {
  //   console.log("Sidebar is now:", visible ? "OPEN" : "CLOSED");
  // }, [visible]);
  const  {setShowSearch, navigate, getCartCount,token,setToken,setCartItem }=useContext(ShopContext)

  const logout = () =>{
    navigate('/login')
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    setToken('')
    setCartItem({})

  }
  
  

  useEffect(() => {
    if (visible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }


    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [visible]);

  return (
 
    <div className="flex items-center justify-between px-1 py-5 font-medium">
    
  <Link to='/'>
  <img
    src={assets.name}
    alt="Brand Name"
    className="w-50  sm:w-50 md:w-60 lg:w-65"
  /></Link>



    
      <ul className="hidden sm:flex gap-8 text-medium text-">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#] hidden" />
        </NavLink>
        
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#83B505] hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#83B505] hidden" />
        </NavLink>
        
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#83B505] hidden" />
        </NavLink>
      </ul>
      <div className=" flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.glass} alt="" className=" w-7 cursor-pointer ml-3 "/>


        <div className="hidden sm:block group relative  ">
          <img src={assets.usersvg} className="w-6 cursor-pointer" alt="" />
  <div className="relative">
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-[100]">
                      <div className="flex flex-col items-center gap-3 w-60 py-4 px-6 bg-white text-gray-500 shadow-lg rounded-lg">
                        
                        <p className="text-[15px] text-black font-semibold">Hello..!</p>
                        <p className="text-[10px] text-center">To Access Your Shop Gallery Account</p>
                        
        {/* Sign In Button */}
        <Link to='login'><button  className="cursor-pointer hover:text-black px-4 py-2 bg-green-400 text-white text-sm rounded-md w-full">
          Sign in
        </button></Link>

    {/* Divider */}
    <div className="w-full border-t border-black my-2"></div>

    {/* Menu Items with Icons */}
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-2  text-black">
        <img src={assets.user} className="w-4 mr-4" alt="Profile" />
        <p className="text-sm">My Profile</p>
      </div>

      <div className="flex items-center gap-2 cursor-pointer hover:text-black">
        <img src={assets.order} className="w-4 mr-4" alt="Orders" />
        <p onClick={()=>navigate('/order')} className="text-sm">Orders</p>
      </div>

      <div className="flex items-center gap-2 cursor-pointer hover:text-black">
        <img src={assets.singout} className="w-4 mr-4" alt="Sign out" />
        <p className="text-sm" onClick={logout}>Sign out</p>
      </div>
    </div>

  </div>
</div>

</div>

        </div>
        <Link to='/cart' className="relative">
        <img src={assets.bascket} alt=""  className="w-6 cursor-pointer"/>
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 aspect-square rounded-full text-white text-[8px]">{getCartCount()}</p>
        </Link>
        <img src={assets.burgers} onClick={()=>setVisible(true)} className="w-7 cursor-pointer sm:hidden" alt="" />
      </div>

      {/* side bar */}
      {visible && (
  <div
    className="fixed inset-0 bg-[rgba(0,0,0,0.2)] z-[90]"
    onClick={() => setVisible(false)} 
  ></div>
)}

<div className={`fixed top-0 right-0 h-full duration-300 shadow-sm z-[100] bg-white transition-all ${visible ? 'w-[50%]' : 'w-0 overflow-hidden'}`}>
  <div className="flex flex-col text-gray-400">
    <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
      <img src={assets.left} alt="" className="h-4 rotate-180" />
      <p>Back</p>
    </div>
   

    <NavLink onClick={() => setVisible(false)} className="flex py-3 pl-10 text-gray-400 hover:bg-gray-300 hover:text-black" to="/">
      <img src={assets.homesvg} alt="" className="h-5 mr-5 w-5"/>Home
    </NavLink>
    <NavLink onClick={() => setVisible(false)} className="flex py-3 pl-10 text-gray-400 hover:bg-gray-300 hover:text-black" to="/collection">
      <img src={assets.collectionsvg} alt="" className="h-5 mr-5 w-5" />Collection
    </NavLink>
    <NavLink onClick={() => setVisible(false)} className="py-3 flex pl-10 text-gray-400 hover:bg-gray-300 hover:text-black" to="/about">
      <img src={assets.aboutsvg} alt="" className="h-5 w-5 mr-5 " />About
    </NavLink>
    <NavLink onClick={() => setVisible(false)} className="py-3 flex pl-10 text-gray-400 hover:bg-gray-300 hover:text-black" to="/contact">
      <img src={assets.contact} alt="" className="h-4 mr-5 w-4" />Contact
    </NavLink>
 
    <NavLink onClick={() => setVisible(false)} className="py-3 pl-10 flex text-gray-400 hover:bg-gray-300 hover:text-black" to="/order">
      <img src={assets.order} alt="" className="h-4 mr-5 w-4" />Orders
    </NavLink>
        <div className="w-full border-t border-black my-2"></div>
     <NavLink onClick={() => setVisible(false)} className="py-3 pl-10 text-gray-400 flex mt-3 hover:text-green-800" to="/login">
  <img src={assets.user} className="mr-5 h-5 w-5" alt="" />
   Sign in
</NavLink>
    <div onClick={() => setVisible(false)} className="py-3 flex pl-10 text-gray-400 hover:text-red-600 " to="/signout">
      <img src={assets.singout}  alt="" className="h-5 mr-5 w-5"/><p onClick={logout} >Sign out</p>
    </div>
  </div>
</div>

      
    </div>
 
  );
};

export default Nav;
