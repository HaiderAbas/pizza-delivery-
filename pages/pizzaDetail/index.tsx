import React, { useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../Header/header";
import Image from "next/image";
// import { PizaaData } from "../pizza";
import pizzaProject from "../data.json"

function PizzaDetail() {
  const [pizzaData, setPizzaData] = useState(pizzaProject.PizaaProduct);
  return (
    // loader
    <>
      <div className="bg-[#000935] h-[100%]">
        {pizzaData.map((item) => {
          return (
            <>
              <div className="flex p-10 justify-center">
                <div className="w-[678.83px]">
                  {/* <Image src={item.image} alt=""/> */}
                </div>
                <div className=" flex ml-2">
                  <div className="w-[333.14px] h-[248px]">  
                    {/* <Image src={item.image} alt="" />
                    <Image src={item.image} alt="" /> */}
                  </div>
                  <div className="w-[333.14px] h-[248px] ml-2 ">
                    {/* <Image src={item.image} alt="" />
                    <Image src={item.image} alt="" /> */}
                  </div>
                </div>
              </div>
              <div className="text-[#FFFFFF] ml-[13%]">
                <h2>{item.title}</h2>
                <p>Burger, Fastfood, Bevrages</p>
                <p>Austin, Texas</p>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default PizzaDetail;
