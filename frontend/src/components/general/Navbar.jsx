import Logo from "../../assets/Logo.png";
import Search from "../../assets/Search.png";
import Cart from "../../assets/Cart.png";
import Profile from "../../assets/Profile.png";
import { useEffect } from "react";
import { useState } from "react";
const Navbar = () => {
  const [login , setLogin] = useState(false);

  useEffect(() => {
    if(localStorage.token)setLogin(true);
  } , [])
  if(login){
    return (
      <nav className="bg-[#F3D9A0] w-full h-[100px] flex justify-between items-center">
        <img src={Logo} alt="Logo" className="ml-[150px]" />
        <div className="flex items-center h-[50px] relative">
          <input
            type="text"
            className="w-[550px] h-full bg-[#FAF1DA] rounded-full px-[26px] placeholder-[#70401ec1] placeholder:text-[20px] placeholder:italic border-2 border-[#EECB83] shadow-md"
            placeholder="Search book or authors ..."
          />
          <button className="absolute right-4">
            <img src={Search} alt="Search" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex gap-[45px] mr-[150px]">
          <button className="h-[50px] w-[50px] rounded-full bg-[#FAF1DA] flex justify-center items-center border-2 border-[#E0942F]"><img src={Cart} alt="Cart" className="w-6 h-6" /></button>
          <button className="h-[50px] w-[50px] rounded-full bg-[#FAF1DA] flex justify-center items-center border-2 border-[#E0942F]"><img src={Profile} alt="Cart" className="w-6 h-6" /></button>          
        </div>
      </nav>
    );
  }
  else{
    return (
      <nav className="bg-[#F3D9A0] w-full h-[100px] flex justify-between items-center">
        <img src={Logo} alt="Logo" className="ml-[150px]" />
        <div className="flex items-center h-[50px] relative">
          <input
            type="text"
            className="w-[550px] h-full bg-[#FAF1DA] rounded-full px-[26px] placeholder-[#70401ec1] placeholder:text-[20px] placeholder:italic border-2 border-[#EECB83] shadow-md"
            placeholder="Search book or authors ..."
          />
          <button className="absolute right-4">
            <img src={Search} alt="Search" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex gap-[45px] mr-[150px]">
          <button className="h-[50px] w-[50px] rounded-full bg-[#FAF1DA] flex justify-center items-center border-2 border-[#E0942F]"><img src={Cart} alt="Cart" className="w-6 h-6" /></button>
          <button className="w-[114px] h-[50px] bg-[#FAF1DA] rounded-full text-[#8B4D21] text-[20px] border-2 border-[#E0942F] font-medium" onClick = {() => {
            window.location.href = '/login'
          }}>Login</button>
        </div>
      </nav>
    );
  }
};

export default Navbar;
