import React, { useState } from "react";
import Image from "next/image";
import img11 from "../images/P1.png";
import img12 from "../images/P2.png";
import img13 from "../images/P3.png";
import img14 from "../images/P4.png";
import img15 from "../images/P5.png";
import img16 from "../images/P6.png";
import img17 from "../images/P7.png";
import img18 from "../images/P8.png";
import img1 from "../images/Vector (5).png";
import img2 from "../images/Vector (6).png";
import img3 from "../images/Vector (7).png";
import img4 from "../images/Vector (8).png";
import img5 from "../images/Vector (9).png";
import img6 from "../images/Vector (10).png";
import img7 from "../images/Vector (11).png";
import img8 from "../images/Vector (12).png";
import img9 from "../images/Vector (13).png";
import img10 from "../images/Vector (14).png";

import { BiTime, BiStar } from "react-icons/bi";
import Header from "../Header/header";
import Footer from "../../components/footer/footer";
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
    title: "Banana Pacakes",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 3,
    image: img3,
    title: "Fresh Farm Pizza",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 4,
    image: img4,
    title: "Grilled Sandwich",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 5,
    image: img5,
    title: "Taco Mexicana",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 6,
    image: img6,
    title: "Avacado Sandwich",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 7,
    image: img7,
    title: "Pasta Italiano",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 8,
    image: img8,
    title: "Shrimp Curry",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 9,
    image: img9,
    title: "Hot Dogs",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 10,
    image: img10,
    title: "Sugary Donuts",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 11,
    image: img11,
    title: "Big Mac Burger",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 12,
    image: img12,
    title: "Banana Pacakes",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 13,
    image: img13,
    title: "Fresh Farm Pizza",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 14,
    image: img14,
    title: "Grilled Sandwich",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 15,
    image: img15,
    title: "Taco Mexicana",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 16,
    image: img16,
    title: "Avacado Sandwich",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 17,
    image: img17,
    title: "Pasta Italiano",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
  {
    id: 18,
    image: img18,
    title: "Shrimp Curry",
    plus: "$15.99",
    stars: "*****",
    time: "30 mins",
  },
 
];
const RestaurentsData = () => {
  const [data, setData] = useState(Data);
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="bg-[#000935] h-[100%]">
        <div className="  flex place-content-evenly items-center p-2 ml-[13%] w-[72%]  flex-wrap m-0 items-center ">
          {data.map((item) => {
            return (
              <>
                <div className="max-w-[400px] bg-gradient-to-b from-indigo-900 h-auto rounded overflow-hidden shadow-lg ml-1 mb-8  border rounded-xl ">
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
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default RestaurentsData;
