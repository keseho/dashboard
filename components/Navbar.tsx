"use client";
// components/Navbar.tsx
import React from "react";
import Useravatar from "./Useravatar";
import { BiPlus } from "react-icons/bi";

function Navbar() {
  return (
    <div className="bg-slate-800 p-4 flex justify-between items-center">
      <div></div>
      <div className="flex items-center">
        <div className="relative flex  justify-items-center">
          <select className="p-3 bg-gray-200 text-black rounded-l-3xl h-12">
            <option>Patients</option>
            <option>Doctors</option>
          </select>
          <div
            className="absolute inset-y-0 right-0 flex items-center  pointer-events-none"
            style={{ color: "#fff" }}
          ></div>
        </div>
        <input
          placeholder="Search"
          className="p-3 bg-white text-gray-800 border-gray-300 focus:outline-none rounded-r-3xl h-12 w-[400px]"
        ></input>

        <button className="flex items-center text-white ml-3 p-3 bg-green-500 rounded-3xl">
          <BiPlus />
          Add New
        </button>
      </div>

      <div className="flex justify-center gap-3">
        <Useravatar
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          onClick={() => {}}
        />
        <Useravatar
          imageUrl="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          onClick={() => {
            console.log("clicked avatar");
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
