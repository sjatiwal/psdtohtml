import React, { useState } from "react";
import Order1 from "../images/order1.png";
import Order2 from "../images/order2.png";
import Combo from "../images/combo.png";
import TopBurger from "../images/topBurger.png";
import Bottle from "../images/bottle.png";
import Plate from "../images/plate.png";
import FullPackage from "../images/fullPackage.png";
import WhiteLogo from "../images/whiteLogo.png";
import WhiteBH from "../images/whiteBH.png";
import Insta from "../images/insta.png";
import Twitter from "../images/twitter.png";
import Facebook from "../images/facebook.png";
import Whatsapp from "../images/whatsapp.png";
import Email from "../images/email.png";
import Location from "../images/location.png";

const Template2 = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("00:00");

  const bookTable = (e) => {
    e.preventDefault();
    const todayDate = new Date();
    const dateCheck = date.split("-");
    const timeCheck = time.split(":");

    if (dateCheck[0] < todayDate.getFullYear()) {
      alert("Please select a proper date");
    } else if (
      +todayDate.getMonth() + 1 > dateCheck[1] &&
      dateCheck[0] == todayDate.getFullYear()
    ) {
      alert("Please select a proper date");
    } else if (
      dateCheck[0] == todayDate.getFullYear() &&
      +todayDate.getMonth() + 1 == dateCheck[1] &&
      todayDate.getDate() > dateCheck[2]
    ) {
      alert("Please select a proper date");
    } else if (timeCheck[0] < todayDate.getHours()) {
      alert("Please select a proper time");
    } else if (
      timeCheck[0] >= todayDate.getHours() &&
      timeCheck[1] < todayDate.getMinutes()
    ) {
      alert("Please select a proper time");
    } else {
      alert(`${name} booked table for ${people} person on ${date} at ${time}`);
    }
  };

  return (
    <div className="w-[30%] overflow-hidden ml-7">
      <div className="bg-white w-[90%]">
        <div className="flex justify-center pt-2  text-amber-950 ">
          <span className="bg-yellow-500 px-2 py-1 text-[.3rem] font-medium">
            ALWAYS TASTY BURGER
          </span>
        </div>
        <div className="flex justify-center mt-2 text-[1rem] font-bold">
          CHOOSE & ENJOY
        </div>
        <div className="text-[.3rem] px-8 text-center text-amber-950">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel fasilisis.
        </div>
      </div>
      <div className="bg-white w-[90%]">
        <div className="pl-[5%] pt-2 flex flex-row ">
          <div className="w-[30%] flex flex-col justify-center">
            <div className="flex justify-center">
              <img src={Order1} alt="Order1" className="h-16 w-20" />
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
              <img src={Order2} alt="Order1" className="h-16 w-20" />
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
              <img src={Order1} alt="Order1" className="h-16 w-20" />
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
      <div className="w-[90%] bg-white pb-5">
        <div className="flex flex-row mx-3  pt-5 shadow-xl shadow-slate-300">
          <div className="w-[50%] p-3 relative ">
            <div className="text-[.5rem]">DISCOVER</div>
            <div className="text-[.8rem] font-bold">UPCOMMING EVENTS</div>
            <div className="text-[.3rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel fasilisis.
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
      <div className="w-[90%] flex bg-white relative h-52 overflow-hidden">
        <div className="absolute left-[-3px]">
          <img src={TopBurger} alt="BottomBurger" className="h-12 mt-4" />
        </div>
        <div className="absolute">
          <img src={Bottle} alt="Bottle" className="h-20 mt-[5.5rem] ml-5" />
        </div>
        <div className="absolute bottom-0 right-[-30px]">
          <img src={Plate} alt="Plate" className="h-20" />
        </div>

        <div className="flex flex-col text-center mt-5 w-full">
          <div className="text-[.5rem]">RESERVATION</div>
          <div className="font-bold text-amber-950 text-[1.3rem]">
            BOOK YOUR TABLE
          </div>

          <form className="mt-5 flex justify-center" onSubmit={bookTable}>
            <div className="flex flex-row">
              <div className="flex flex-col p-1">
                <input
                  className="border-2 p-1 text-[.5rem] border-slate-300 w-28"
                  placeholder="NAME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="border-2 p-1 text-[.5rem] border-slate-300 w-28 mt-1"
                  placeholder="DATE"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  className="border-2 p-1 text-[.5rem] border-slate-300 w-28 mt-1"
                  placeholder="PEOPLE"
                  type="number"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </div>
              <div className="flex flex-col p-1">
                <input
                  className="border-2 p-1 text-[.5rem] border-slate-300 w-28"
                  placeholder="EMAIL"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border-2 p-1 text-[.5rem] border-slate-300 w-28 mt-1"
                  placeholder="TIME"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <input
                  className="border-2 p-1 text-[.5rem] border-red-500 w-28 text-white font-bold mt-1 bg-red-500"
                  type="submit"
                  value="FIND A TABLE"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[90%] bg-white flex justify-center pb-4">
        <div className="w-[90%] relative">
          <div className="absolute opacity-60 bg-black w-full h-32"></div>
          <img src={FullPackage} alt="FullPackage" className="w-full h-32" />
          <div className="absolute top-4 left-2 flex flex-row items-center">
            <img src={WhiteLogo} alt="WhiteBurger" className="h-5 w-5" />
            <img src={WhiteBH} alt="WhiteBH" className="w-20 h-3 pl-2" />
          </div>
          <div className="absolute text-[.3rem] top-12 left-2 text-white w-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel fasilisis.
          </div>
          <div className="absolute text-white right-8 top-12">
            <div className="flex flex-row">
              <img src={Location} alt="Location" className="h-2 w-2" />
              <div className="text-[.3rem] ml-1">
                MAIN ROAD, BUILDING NAME, COUNTRY
              </div>
            </div>
            <div className="flex flex-row mt-1">
              <img src={Email} alt="Email" className="h-[.4rem] w-2" />
              <div className="text-[.3rem] ml-1">INFO@COMPANYNAME.COM</div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 flex flex-row">
            <img src={Insta} alt="Instagram" className="h-4 w-5 pr-1" />
            <img src={Facebook} alt="Facebook" className="h-4 w-5 pr-1" />
            <img src={Twitter} alt="Twitter" className="h-4 w-5 pr-1" />
            <img src={Whatsapp} alt="Whatsapp" className="h-4 w-5 pr-1" />
          </div>
          <div className="absolute bottom-2 left-2 text-white text-[.2rem]">
            &copy; COMPANY NAME 2022. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
