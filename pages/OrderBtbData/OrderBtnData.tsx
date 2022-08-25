import react from "react";
import Footer from "../../components/footer/footer";
import Header from "../Header/header";
import Image from "next/image";
import img1 from "../images/F1.png";
import { useState } from "react";

const array = [
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
const OrderForm = () => {
  const [data, setData] = useState(array);
  const [Count, setCount] = useState(3);

  const myFunction = (value:string, index:number) => {
    let newArr = [...data]; // copying the old datas array
    newArr[index].value = value== "+" ? newArr[index].value +1 : newArr[index].value<=1 ? newArr[index].value : newArr[index].value  -1; //key and value
    setData(newArr);    

  };  

  return (
    <>
      <Header />
      <div className="bg-[#000935]  p-10 flex  flex-col justify-center items-center">
        <div className="text-[#FFFFFF] ml-[-26%] mb-4 ">
          you have three items in your chart
        </div>
        {data.map((item, index) => {
          return (
            <div className="p-10 text-[#FFFFFF] bg-gray-800 from-indigo-900 w-[40%] flex justify-between items-center">
              <div className="flex  items-center">
                <div className="w-[109px] ">
                  <Image src={item.image} alt="image" />
                </div>
                <div>
                  <h2 className="ml-8">{item.tittle}</h2>
                </div>
                <div className="custom-number-input h-10 w-32 ml-8">
                  <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button
                      data-action="decrement"
                      className=" bg-gray-300 bg-[#97ED01]  h-full w-20 rounded-l cursor-pointer outline-none"
                      onClick={() => myFunction("-", index)}
                    >
                      <span className="m-auto text-2xl font-thin ">−</span>
                    </button>
                    <input
                      type="number"
                      className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                      name="custom-input-number"
                      value={item.value}
                    ></input>
                    <button
                      data-action="increment"
                      className="bg-gray-300 bg-[#97ED01]  h-full w-20 rounded-r cursor-pointer"
                      onClick={() => myFunction("+", index)}
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default OrderForm;
