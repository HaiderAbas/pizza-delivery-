import type { NextPage } from "next";
import Footer from "../components/footer/footer";
import ShopingCard from "../components/shoppingCart/shopingCard";
import Carousel from "./carousel";
import FavouriteCategory from "./favouriteCategory/favouriteCategory";
import Header from "./Header/header";
import MainHome from "./Home";
import Category from "./jsonData/category";
import Restaurent from "./restaurentdata";

const Home: NextPage = () => {
  return (
    <div className="bg-[#000935] h-[100%]">
      <Header/>
      <MainHome/>
      <FavouriteCategory/>
      <Category/>
      <Restaurent/>
      <Carousel/>
      <Footer/>
      {/* <ShopingCard/> */}
    </div>
  );
};

export default Home;
