import React from "react";
import Image from "next/image";
import img from "../../pages/images/Vector.png";
import img1 from "../../pages/images/Vector (1).png";
import img2 from "../../pages/images/Vector (2).png";
import { TbSearch } from "react-icons/tb";
import Link from "next/link";
import RestaurentsData from "../Restaurants/Restaurants";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="bg-[#000935] w-100 h-[70px] flex place-content-between items-center border">
          <div className="flex place-content-around w-70 items-center">
            <div className="font-600 w-[30px] ml-10 ">
              <Link href=".." className="bg-red-500">
              <Image src={img} />
              </Link>
            </div>
            <div className="ml-10">
              <input
                type="text"
                className="placeholder:text-wight-700 w-[366.5px] px-5 py-2 rounded-lg outline-none"
                placeholder="Search Here"
              />
              <span className="text-xl absolute mt-3 ml-[-33px]">
                <TbSearch />
              </span>
            </div>
            <div className="flex place-content-between w-[300px] ml-10">
              <Link href="..">
                <p className="text-[#FFFFFF] hover:text-[#97ED01] cursor-pointer	">Home</p>
              </Link>
              <Link href="../Restaurants/Restaurants">
              <p className="text-[#FFFFFF] hover:text-[#97ED01] cursor-pointer	">Restaurants</p>
              </Link>
              
              <p className="text-[#FFFFFF] hover:text-[#97ED01] cursor-pointer	">About Us</p>
            </div>
          </div>
          <div className="flex place-content-between w-20 h-8 mr-10 ">
            <div>
              <Image src={img1} />
            </div>
            <div className="ml-5">
              <Image src={img2} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
