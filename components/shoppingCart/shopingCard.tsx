import React from "react";
import Header from "../../pages/Header/header";
import Footer from "../footer/footer";
import Image from "next/image";
import img1 from "../../pages/images/shoping1.png";
import Button from "../button";

function ShopingCard() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <Image src={img1} alt="" />
          <h2>Mindils Burger And Fries</h2>
          <Button dark size="size">Login </Button>
        </div>
        {/* <div>
  
        </div> */}
        di
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ShopingCard;
