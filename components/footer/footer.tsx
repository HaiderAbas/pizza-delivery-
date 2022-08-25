import React from "react";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { TbWorld, TbSearch } from "react-icons/tb";
function Footer() {
  return (
    <div className="flex flex-wrap place-content-evenly p-10 text-[#FFFFFF]  shadow-lg  shadow-indigo-500/40  bg-[#000956] bg-blur rounded items-center ">
      <div className="flex p-4 ">
        <AiOutlineInstagram className="text-4xl bg-[#000935] w-50 h-50 rounded-3xl p-1 ml-9" />
        <TbWorld className="text-4xl bg-[#000935] w-50 h-50 rounded-3xl p-1" />
        <AiFillTwitterCircle className="text-4xl bg-[#000935] w-50 h-50 rounded-3xl p-1" />
        <AiFillYoutube className="text-4xl bg-[#000935] w-50 h-50 rounded-3xl p-1" />
      </div>
      <div className="m-10">
        <h2 className="text-xl font-bold mb-5  ">Company</h2>
        <p>About us</p>
        <p>Blog</p>
        <p>Contact us</p>
        <p>Pricing</p>
        <p>Testimonials</p>
      </div>
      <div className="m-10">
        <h2 className="text-xl font-bold mb-5  ">Support</h2>
        <p>Help Center</p>
        <p>Terms of services</p>
        <p>Legal</p>
        <p>Privacy Policy</p>
        <p>status</p>
      </div>
      <div className="mb-14">
        <h2 className="text-xl font-bold mb-5 ">Stay up to date</h2>
        <input
          type="text"
          placeholder="your email address"
          className="p-2 border rounded-xl text-[black]"
        />
        <span className="text-xl absolute mt-3 ml-[-33px]">
          <TbSearch />
        </span>
      </div>
    </div>
  );
}

export default Footer;
