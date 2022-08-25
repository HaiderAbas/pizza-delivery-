import react from "react";
import Footer from "../../components/footer/footer";
import Header from "../Header/header";
import Image from "next/image";
import img1 from "../images/F1.png";
import { useState } from "react";
import Button from "../../components/button";
import ProgressBar from "../progressBar/ProgressBar";
import Link from "next/link";
const steps = [
  { id: 1, name: "Step 1", status: "complete" },
  { id: 2, name: "Step 2", status: "upcoming" },
  { id: 3, name: "Step 3", status: "upcoming" },
  { id: 4, name: "Step 4", status: "upcoming" },
  { id: 5, name: "Step 5", status: "upcoming" },
];

const ShopingData = [
  {
    id: 1,
    image: img1,
    tittle: "Mindels Burger And Fire",
    price: "120$",
    value: 2,
  },
  {
    id: 2,
    image: img1,
    tittle: "Mindels Burger And Fire",
    price: "120$",
    value: 1,
  },
  {
    id: 3,
    image: img1,
    tittle: "Mindels Burger And Fire",
    price: "120$",
    value: 3,
  },
];
const ShopingInfo = () => {
  const [data, setData] = useState(ShopingData);
  //   const [Count, setCount] = useState(3);
  //   const myFunction = (value: string, index: number) => {
  //     let newArr = [...data];
  //     newArr[index].value =
  //       value == "+"
  //         ? newArr[index].value + 1
  //         : newArr[index].value <= 0
  //         ? newArr[index].value
  //         : newArr[index].value - 1;
  //     setData(newArr);
  //   };
  //   console.log(data);

  return (
    <>
      <Header />
      <div className="bg-[#000935]  p-10 flex  flex-col justify-center items-center">
        <ProgressBar StepsProps={steps}  />
        <div className="p-10 text-[#FFFFFF] shadow-xl bg-gray-800 from-indigo-900 mt-[4%] w-[40%] ">
        <div className=" w-[70%]">
          <div className="flex m-4 flex justify-between ">
            <h2 className="font-bold">Mindels Burger and Fries</h2>
            <p className="">120$</p>
          </div>
          <div className="flex m-4  flex justify-between ">
            <h2 className="font-bold">Italian pizza</h2>
            <p className="">120$</p>
          </div>
          <div className="flex m-4 flex justify-between">
            <h2 className="font-bold">Mexican green wave</h2>
            <p className="">120$</p>
          </div>
          <div className="bg-[#FFFFFF] w-50 h-0.5"></div>
        </div>
        <div className=" w-[70%] mt-10">
          <div className="flex m-4 flex justify-between ">
            <h2 className="font-bold">Tax1</h2>
            <p className="">30$</p>
          </div>
          <div className="flex m-4  flex justify-between ">
            <h2 className="font-bold">Tax2</h2>
            <p className="">30$</p>
          </div>
          <div className="flex m-4 flex justify-between">
            <h2 className="font-bold">Discount</h2>
            <p className="">10$</p>
          </div>
          <div className="bg-[#FFFFFF] w-50 h-0.5"></div>
          <div className="flex m-4 flex justify-between">
            <h2 className="font-bold">Total</h2>
            <p className="">10$</p>
          </div>
          <Button dark>Next</Button>
        </div>
   </div>
      </div>
      <Footer />
    </>
  );
};
export default ShopingInfo;
