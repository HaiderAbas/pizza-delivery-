import React, { useState } from "react";
import Image from "next/image";
import img1 from "../images/Vector (7).png";
import img2 from "../images/Vector (8).png";
import img3 from "../images/Vector (9).png";
import img4 from "../images/Vector (10).png";
import img5 from "../images/Vector (11).png";
import { BiTime,BiStar } from "react-icons/bi";
const Data = [
  {
    id: 1,
    image: img1,
    title: "Big Mac Burger",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 2,
    image: img2,
    title: "Big Mac Burger",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 3,
    image: img3,
    title: "Big Mac Burger",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 4,
    image: img4,
    title: "Big Mac Burger",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 5,
    image: img5,
    title: "Big Mac Burger",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },    
];
const Restaurent = () => {
  const [data, setData] = useState(Data);
  return (
    <>
      <h2 className="text-[#FFFFFF] text-2xl font-bold ml-[9%] p-10">
        Restsurants Near You
      </h2>
      <div className="  flex place-content-evenly items-center p-8 ml-[5%] w-[89%]  flex-wrap m-0 items-center ">
        {data.map((item) => {
          return (
            <>
            <div className="max-w-[271.66px] bg-gradient-to-b from-indigo-900 h-auto  rounded overflow-hidden shadow-lg ml-1 mb-8  border rounded-xl ">
              <div className="px-6 py-4">
                <Image
                  className="w-30"
                  src={item.image}
                  alt="Sunset in the mountains"
                />
                <div className="  mb-2 text-[#FFFFFF] ">{item.title}</div>
                <span className="text-[#FFFFFF] text-base">
                  {item.plus}
                </span>
                <span className="text-[#FFFFFF] text-base ml-1">
                  {item.plus}
                </span>
              </div>
              <div className="flex place-content-between text-[#FFFFFF]">
                <div className="">
                  <span className="flex ml-4 font-Size-10 rounded-full  px-3 py-1 text-sm font-semibold text-[#FFFFFF] mr-2 mb-2">
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                  </span>
                </div>
                <div className="flex m-2">
                  <span className="mt-1">
                    <BiTime />
                  </span>
                  <span className="ml-1">{item.time}</span>
                </div>
              </div>
            </div>
          </>
          );
        })}
      </div>
    </>
  );
};

export default Restaurent;
