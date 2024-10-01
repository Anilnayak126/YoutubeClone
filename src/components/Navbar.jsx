import React, { useState } from "react";
import Logo from "/logo.png";
import profile from "/profile.jpg";

import Avatar from 'react-avatar';

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { useUtils } from "../context/UtilsContext";


export default function Navbar() {

  const [searchQuery,setSearchQuery] = useState()
  const navigate = useNavigate()

 /*
  const {setIsSidebar,isSidebar,mobileShow,setMobileShow} = useUtils();

   const handleSidebar = ()=>{
    if(window.innerWidth <= 1280 ){
      setIsSidebar(!isSidebar)
      setMobileShow(!mobileShow)
    }

    setIsSidebar(!isSidebar)
  }

  useEffect(() => {
    console.log(isSidebar,mobileShow);
    
  }, [isSidebar])
  
*/


  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white ml-1 mr-1">
      <div className=" p-2 flex justify-center items-center space-x-2 ">
        <AiOutlineMenu size={25} className="cursor-pointer" />  
        <img src={Logo} className="w-28 cursor-pointer" alt="" />
      </div>

      <div className=" flex  w-[35%] mt-2">
        <div className=" px-4  w-[100%] py-2 rounded-l-full border border-gray-500">
          <input type="text" placeholder="search" className=" outline-none " 
           onChange={(e) => setSearchQuery(e.target.value)}
           onKeyUp={searchQueryHandler}
           value={searchQuery}
            />
        </div>
        <button className=" rounded-r-full  px-4 py-2 border border-gray-500 bg-gray-100">
          <CiSearch size={25}  onClick={() => searchQueryHandler("searchButton")} />
        </button>
        <IoMdMic size={"35px"} className=" w-[50px] mt-1 ml-3 p2 rounded-full border hover:bg-gray-300 duration-200 opacity-70 " />
      </div>

      <div className=" flex space-x-2 items-center">
      <RiVideoAddFill className="text-2xl cursor-pointer" />
      <AiOutlineBell className="text-2xl cursor-pointer"/>
      <Avatar src={profile} size="32" className="cursor-pointer" round={true} />
      </div>
    </div>
  );
}
