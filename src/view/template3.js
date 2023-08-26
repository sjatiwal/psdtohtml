import React from "react";
import Desktop from "../images/desktop.png";
import Logo from "../images/logo.png";
import Name from "../images/titleName.png";
import Delivery from "../images/delivery.png";
import BurgerLoaded from "../images/burgerLoaded.png";
import FrenchFries from "../images/frenchFries.png";
import Drink from "../images/drinks.png";

const Template3 = () => {
  return (
    <div className="w-[40%] overflow-hidden ml-[20px]">
      <div className="flex mt-48 relative bg-red-400">
        <div className="absolute top-0 left-[-20px]">
          <img src={Desktop} alt="Desktop" className="h-[24rem] w-[27.5rem]" />
        </div>
        <div className="absolute ml-[1.3rem] mt-[4.9rem] bg-yellow-background bg-no-repeat h-[40rem] w-[21rem]">
          <div className="flex flex-row items-center justify-between ">
            <div className="flex items-center mt-1">
              <img src={Logo} className="h-5 w-5 pt-1 pl-1" alt="Logo" />
              <img src={Name} className="h-3 w-20 pt-1 pl-1" alt="Title" />
            </div>
            <div className="pt-1 flex items-center">
              <img src={Delivery} className="h-3 w-3 pr-1" alt="Delivery" />
              <div className="text-amber-950 text-[.5rem] pr-1">
                Express Delivery +1234567890
              </div>
            </div>
          </div>
          <div className="flex flex-row text-[.5rem] float-right mt-1">
            <div
              className="pr-1"
              onClick={() => alert("You will be directed to Home page")}
            >
              HOME
            </div>
            <div
              className="pr-1"
              onClick={() => alert("You will be directed to Menu page")}
            >
              MENU
            </div>
            <div
              className="pr-1"
              onClick={() => alert("You will be directed to Our Story page")}
            >
              OUR STORY
            </div>
            <div
              className="pr-1"
              onClick={() => alert("You will be directed to Contact Us page")}
            >
              CONTACT US
            </div>
          </div>
          <div className="pl-5 mt-10 flex flex-row">
            <div>
              <div className="clear-both text-[.3rem] border-dashed border-[.02rem] border-amber-950 w-fit px-1 py-[.1rem]">
                IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS
              </div>
              <div className="font-semibold text-[1.5rem]">BURGER</div>
              <div className="font-semibold text-[.7rem]">WEEK</div>
            </div>
            <div className="relative">
              <img
                src={BurgerLoaded}
                className="absolute h-16 w-20 mt-8 ml-20 z-10"
                alt="BurgerLoaded"
              />
              <img
                src={FrenchFries}
                className=" absolute h-16 w-28 mt-6 ml-10 z-0"
                alt="French Fries"
              />
              <img
                src={Drink}
                className="absolute h-24 w-10  ml-[7.5rem] z-0"
                alt="Drink"
              />
              <div className="bg-red-600 relative rounded-full p-1 mt-16 ml-10 z-10">
                <div className="p-2 outline-dashed rounded-full text-white">
                  <div className="flex flex-row justify-center">
                    <div className="text-[.5rem]">$5</div>
                    <div className="text-[.25rem] mt-1">.49</div>
                  </div>
                  <div className="text-[.35rem]">O N L Y</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
