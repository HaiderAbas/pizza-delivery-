import React, { useState } from "react";
import Image from "next/image";
import img11 from "../../pages/images/Group.png";
import img12 from "../../pages/images/Vector (3).png";
import Link from "next/link";
function MainHome() {
  return (
    <div className="h-100 p-10 flex place-content-evenly items-center relative md:place-content-center">
      <div className="w-[550px]">
        <h2 className="text-[#FFFFFF]  text-5xl h-[109.21px] font-medium">
          GET DELICIOUS FOOD AT YOUR DOORSTIPS
        </h2>
        <p className=" h-[93px] text-[#FFFFFF] text-xs-1 mt-10  ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
          voluptatibus, ipsum eius tempora natus mollitia. Quam cupiditate iusto
          quod, tenetur voluptatem laudantium. Sed perspiciatis nobis ipsum
          totam vero laboriosam eius!
        </p>

        <div className="mt-10">
          <Link href="../OrderBtbData">
            <button className="px-4 py-1 text-sm text-[#FFFF] font-semibold  rounded-full border  hover:text-white bg-[#79BD03] hover:border-transparent focus:outline-none outline-none  focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Order Now
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className=" w-[578px] ml-[170px] relative">
          <Image src={img11} alt="images"/>
        </div>
        <div className=" w-[675px] absolute top-[45px] ">
          <Image src={img12} alt="images" />
        </div>
      </div>
    </div>
  );
}

export default MainHome;
