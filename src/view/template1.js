import React from "react";
import Logo from "../images/logo.png";
import Name from "../images/titleName.png";
import Delivery from "../images/delivery.png";
import BurgerLoaded from "../images/burgerLoaded.png";
import FrenchFries from "../images/frenchFries.png";
import Drink from "../images/drinks.png";
import BurgerDoubleLoaded from "../images/burgerDoubleLoaded.png";
import TwoBurger from "../images/twoBurgers.png";
import FullPlate from "../images/fullPlate.png";
import Order1 from "../images/order1.png";
import Order2 from "../images/order2.png";
import Combo from "../images/combo.png";
import TopBurger from "../images/topBurger.png";

const Template1 = () => {
  return (
    <div className="w-[30%]">
      <div className="mt-10 ml-10 w-[90%]">
        <div className="bg-yellow-background bg-no-repeat pb-4 w-full bg-cover">
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
          <div className="pl-5 mt-5 flex flex-row relative">
            <div>
              <div className="clear-both text-[.3rem] border-dashed border-[.02rem] border-amber-950 w-fit px-1 py-[.1rem]">
                IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS
              </div>
              <div className="font-semibold text-[2rem]">BURGER</div>
              <div className="font-semibold text-[1rem]">WEEK</div>
            </div>

            <div className="absolute right-3 bottom-0">
              <img
                src={BurgerLoaded}
                className="absolute h-12 w-20 mt-10 ml-20 z-10"
                alt="BurgerLoaded"
              />
              <img
                src={FrenchFries}
                className="absolute h-12 w-20 mt-4 ml-12 z-0"
                alt="French Fries"
              />
              <img src={Drink} className="h-20 w-10  ml-28 z-0" alt="Drink" />
            </div>
            <div className="bg-red-600 absolute right-16 bottom-[-15px] rounded-full p-1 mt-16 ml-12 z-10">
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
        <div className="flex flex-row bg-white">
          <div className="pl-5 pt-5 pb-2 w-[50%] relative">
            <div className="absolute text-white  mt-2 ml-2">
              <div className="text-[.3rem]"> TRY IT TODAY </div>
              <div className="text-[.5rem]">MOST POPULAR BURGER</div>
            </div>
            <img
              src={BurgerDoubleLoaded}
              className="w-full h-[8.5rem]"
              alt="BurgerBoubleLoaded"
            />
          </div>
          <div className="pt-5 pb-2 pl-2 w-[50%]">
            <div className="relative">
              <div className="absolute text-white mt-2 ml-2">
                <div className="text-[.3rem]"> TRY IT NOW</div>
                <div className="text-[.5rem]">MORE FUN</div>
                <div className="text-[.5rem]">MORE TASTE</div>
              </div>
              <img
                src={TwoBurger}
                alt="TwoBrgers"
                className="w-full h-16 pr-4"
              />
            </div>
            <div className="relative">
              <div className="absolute text-white mt-2 ml-2">
                <div className="text-[.3rem]">TRY IT TODAY</div>
                <div className="text-[.5rem]">FRESH & CHILI</div>
              </div>
              <img
                src={FullPlate}
                alt="FullPlate"
                className="w-full h-16 pr-4 mt-2"
              />
            </div>
          </div>
        </div>
        <div className="bg-white ">
          <div className="flex justify-center pt-5  text-amber-950 ">
            <span className="bg-yellow-500 px-2 py-1 text-[.5rem] font-medium">
              ALWAYS TASTY BURGER
            </span>
          </div>
          <div className="flex justify-center mt-2 text-[1.5rem] font-bold">
            CHOOSE & ENJOY
          </div>
          <div className="text-[.3rem] px-8 text-center text-amber-950">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel fasilisis.
          </div>
        </div>
        <div className="bg-white ">
          <div className="pl-[5%] pt-5 flex flex-row ">
            <div className="w-[30%] flex flex-col justify-center">
              <div className="flex justify-center">
                <img src={Order1} alt="Order1" className="h-20 w-20" />
              </div>
              <div className="text-[.5rem] text-amber-950 mt-2 text-center">
                LOREM IPSUM DOLOR
              </div>
              <div className="text-[.3rem] mt-1 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
              <div className=" flex justify-center mt-2">
                <span
                  className="bg-red-500 text-white px-2 py-1 text-[.5rem]"
                  onClick={() => alert("You ordered a burger")}
                >
                  ORDER NOW
                </span>
              </div>
            </div>
            <div className="w-[30%] flex flex-col justify-center">
              <div className="flex justify-center">
                <img src={Order2} alt="Order2" className="h-20 w-20" />
              </div>
              <div className="text-[.5rem] text-amber-950 mt-2 text-center">
                LOREM IPSUM DOLOR
              </div>
              <div className="text-[.3rem] mt-1 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
              <div className=" flex justify-center mt-2">
                <span
                  className="bg-red-500 text-white px-2 py-1 text-[.5rem]"
                  onClick={() => alert("You ordered a burger")}
                >
                  ORDER NOW
                </span>
              </div>
            </div>
            <div className="w-[30%] flex flex-col justify-center">
              <div className="flex justify-center">
                <img src={Order1} alt="Order1" className="h-20 w-20" />
              </div>
              <div className="text-[.5rem] text-amber-950 mt-2 text-center">
                LOREM IPSUM DOLOR
              </div>
              <div className="text-[.3rem] mt-1 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
              <div className=" flex justify-center mt-2">
                <span
                  className="bg-red-500 text-white px-2 py-1 text-[.5rem]"
                  onClick={() => alert("You ordered a burger")}
                >
                  ORDER NOW
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white pb-5">
          <div className="flex flex-row mx-3  pt-5 shadow-xl shadow-slate-300">
            <div className="w-[50%] p-3 relative ">
              <div className="text-[.5rem]">DISCOVER</div>
              <div className="text-[.8rem] font-bold">UPCOMMING EVENTS</div>
              <div className="text-[.3rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel fasilisis.
              </div>
              <div className="flex flex-row absolute bottom-2">
                <div className="border-2 border-yellow-500 rounded-full w-1"></div>
                <div className="border-2 border-slate-300 rounded-full w-1 ml-1"></div>
                <div className="border-2 border-slate-300 rounded-full w-1 ml-1"></div>
              </div>
            </div>
            <div className="w-[50%]">
              <img src={Combo} alt="Combo" />
            </div>
          </div>
        </div>
        <div className=" flex bg-white ">
          <img src={TopBurger} alt="BottomBurger" className="h-6 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Template1;
