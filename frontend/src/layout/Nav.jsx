import React from "react";
import logo from "../../src/assets/logo.png";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
function Nav() {
  const lis = ["Home", "Shop", "Blog"];
  return (
    <>
      <div className="flex justify-between px-12 pt-5 items-center">
        <img className="w-28" src={logo} alt="" />
        <div>
          <ul className="flex  gap-3">
            {lis.map((index) => (
              <li className="cursor-pointer" key={index}>
                {index}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 text-3xl justify-center items-center cursor-pointer ">
          <CiUser className="inline-block" />
          <CiSearch className="inline-block" />

          <div className="relative">
            <CiHeart className="inline-block" />
            <div className="w-5 h-5 rounded-full bg-blue-600 absolute top-1 -right-1 text-[12px] text-white flex items-center justify-center">
              1
            </div>
          </div>
          <div className="relative">
            <PiShoppingCartLight className="inline-block" />
            <div className="w-5 h-5 rounded-full bg-blue-600 absolute top-1 -right-1 text-[12px] text-white flex items-center justify-center">
              1
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
