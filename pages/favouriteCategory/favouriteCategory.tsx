import Link from "next/link";
import React from "react";
import dataJSON from "../data.json"
import { FaHamburger, FaPizzaSlice, FaFish } from "react-icons/fa";
import {
  GiNoodles,
  GiChickenLeg,
  GiSandwich,
} from "react-icons/gi";
import { TbSoup, TbCake } from "react-icons/tb";
// const FavouriteCategoryData = [
//   {
//     id: 1,
//     href:"../pizza",
//     icon: <FaPizzaSlice className="text-4xl " />,
//     name: "All",
//   },
//   {
//     id: 2,
//     href: "../pizza",
//     icon: <FaPizzaSlice className="text-4xl " />,
//     name: "Pizza",
//   },
//   {
//     id: 3,
//     href: "../pizza",
//     icon: <FaHamburger className="text-4xl w-10 h-10" />,
//     name: "Burgar",
//   },
//   {
//     id: 4,
//     href: "../pizza",
//     icon: <GiNoodles className="text-4xl" />,
//     name: "Noodles",
//   },
//   {
//     id: 5,
//     href: "../pizza",
//     icon: <GiChickenLeg className="text-4xl" />,
//     name: "Chicken",
//   },
//   {
//     id: 6,
//     href: "../pizza",
//     icon: <FaFish className="text-4xl" />,
//     name: "Fish",
//   },
//   {
//     id: 7,
//     href: "../pizza",
//     icon: <GiSandwich className="text-4xl" />,
//     name: "Standwich",
//   },
//   {
//     id: 8,
//     href: "../pizza",
//     icon: <TbSoup className="text-4xl" />,
//     name: "Soup",
//   },
//   {
//     id: 9,
//     href: "../pizza",
//     icon: <TbCake className="text-4xl" />,
//     name: "Cake",
//   },
// ];
console.log(dataJSON,"dataJSON")
function FavouriteCategory() {
  return (
    <>
      <div>
        <div className="text-[#FFFFFF]  m-[3%] ">
          <h2 className="text-4xl font-bold ml-[8%]">
            Choose from your favouite Category
          </h2>
        </div>
        <div className="flex text-[#FFFF]  h-100  place-content-evenly w-[95vw]  items-center p-8 ml-10">
          {dataJSON.FavouriteCategoryData.map((item) => {
            return (
              <>
                <div className="flex place-content-center hover:shadow-lg hover:border w-[96px] h-[97px] hover:shadow-indigo-500/40 flex-col hover:bg-[#000956] hover:bg-blur hover:rounded items-center ">
                  <Link href={item.href}>
                    <a>
                      {item.icon}
                      <h2 className="text-xl ">{item.name}</h2>
                    </a>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FavouriteCategory;
