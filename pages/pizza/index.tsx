import React, { useState } from "react";
import Image from "next/image";
import img1 from "../images/P1.png";
import img2 from "../images/P2.png";
import img3 from "../images/P3.png";
import img4 from "../images/P4.png";
import img5 from "../images/P5.png";
import img6 from "../images/P6.png";
import img7 from "../images/P7.png";
import img8 from "../images/P8.png";
import img9 from "../images/P9.png";
import img10 from "../images/P10.png";
import img11 from "../images/P11.png";
import img12 from "../images/P12.png";
import img13 from "../images/P13.png";
import img14 from "../images/P14.png";
import img15 from "../images/P15.png";
import PizaaProduct from "../data.json";
import { BiTime, BiStar } from "react-icons/bi";
import Header from "../Header/header";
import Footer from "../../components/footer/footer";
import Link from "next/link";
import PizzaDetail from "../pizzaDetail";
// export const PizaaProduct = [
//   {
//     id: 1,
//     image: [img1, img11, img9, img1, img4, img15],
//     title: "Big Mac Burger",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 2,
//     image: [img2, img11, img9, img1, img4, img15],
//     title: "Banana Pacakes",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 3,
//     image: [img3, img11, img9, img1, img4, img15],
//     title: "Fresh Farm Pizza",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 4,
//     image: [img4, img11, img9, img1, img4, img15],
//     title: "Grilled Sandwich",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 5,
//     image: [img5, img11, img9, img1, img4, img15],
//     title: "Taco Mexicana",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 6,
//     image: [img6, img11, img9, img1, img4, img15],
//     title: "Avacado Sandwich",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 7,
//     image: [img7, img11, img9, img1, img4, img15],
//     title: "Pasta Italiano",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 8,
//     image: [img8, img11, img9, img1, img4, img15],
//     title: "Shrimp Curry",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 9,
//     image: [img9, img11, img9, img1, img4, img15],
//     title: "Hot Dogs",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 10,
//     image: [img10, img11, img9, img1, img4, img15],
//     title: "Sugary Donuts",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 11,
//     image: [img11, img11, img9, img1, img4, img15],
//     title: "Sugary Donuts",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 12,
//     image: [img12, img11, img9, img1, img4, img15],
//     title: "Sugary Donuts",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 13,
//     image: [img13, img11, img9, img1, img4, img15],
//     title: "Sugary Donuts",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 14,
//     image: [img14, img11, img9, img1, img4, img15],
//     title: "Sugary Donuts",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
//   {
//     id: 15,
//     image: [img15, img11, img9, img1, img4, img15],
//     title: "Sugary Donuts",
//     plus: "$15.99",
//     stars: "*****",
//     time: "30 mins",
//   },
// ];
const RestaurentPizza = () => {
  const [data, setData] = useState(PizaaProduct.PizaaProduct);
  const [selectedProduct, setSelectedProduct] = useState<any>({});
  const hendleClick = (id: number) => {
    const product = data.filter((item) => item.id === id)[0];
    setSelectedProduct(product);
  };
  console.log(data, "data");

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="bg-[#000935] h-[100%]">
        <h2 className="text-[#FFFFFF] text-2xl font-bold ml-[14.5%] p-4">
          Pizza
        </h2>
        <div className="  flex place-content-evenly items-center p-2 ml-[13%] w-[72%]  flex-wrap m-0 items-center ">
          {data.map((item: any) => {
            console.log(item.image, "image");
            return (
              <>
                {/* <Link href="../pizzaDetail"> */}
                <div className="max-w-[400px] bg-gradient-to-b from-indigo-900 h-auto  rounded overflow-hidden shadow-lg ml-1 mb-8  border rounded-xl ">
                  <div className="px-6 py-4">
                    {/* <Link href={"/pizzaDetail"}>
                      <Image    
                      className="w-30"
                      src={item.Image}
                      onClick={() => hendleClick(item.id)}
                      alt="Sunset in the mountains"
                    />  
                    </Link> */}
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
                {/* </Link> */}
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

export default RestaurentPizza;
