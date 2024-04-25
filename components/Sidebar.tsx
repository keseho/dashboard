"use client";

import React, { useState } from "react";
import CardButton from "./CardButton";

import { PiUserCircleBold } from "react-icons/pi";
import { BsCash, BsDatabase, BsFunnel } from "react-icons/bs";
import { BiStore, BiTestTube } from "react-icons/bi";
import { FaRegistered } from "react-icons/fa";
import { LiaUserCircleSolid } from "react-icons/lia";

function Sidebar() {
  const [selectedCard, setSelectedCard] = useState<string>("Patients");

  const handleCardClick = (name: string) => {
    setSelectedCard(name);
  };

  return (
    <div className="bg-white w-[140px] h-[750px] gap-[10px]  relative">
      <div>
        <div className="ml-2 text-gray-500">Dashboard</div>
        <div className="flex flex-col mx-auto px-2">
          <CardButton
            name="Patients"
            selected={selectedCard === "Patients"}
            onClick={handleCardClick}
            icon={PiUserCircleBold}
          />
          <CardButton
            name="HR"
            selected={selectedCard === "HR"}
            onClick={handleCardClick}
            icon={BsDatabase}
          />
          <CardButton
            name="Lab"
            selected={selectedCard === "Lab"}
            onClick={handleCardClick}
            icon={BsFunnel}
          />
          <CardButton
            name="Pharma"
            selected={selectedCard === "Pharma"}
            onClick={handleCardClick}
            icon={BiStore}
          />
        </div>
      </div>
      <div>
        <div className="mt-2 ml-2 text-gray-500">Processes</div>
        <div className="flex flex-col mx-auto px-2">
          <CardButton
            name="Registration"
            selected={selectedCard === "Registration"}
            onClick={handleCardClick}
            icon={FaRegistered}
          />
          <CardButton
            name="Consultation"
            selected={selectedCard === "Consultation"}
            onClick={handleCardClick}
            icon={LiaUserCircleSolid}
          />
          <CardButton
            name="Test & Reports"
            selected={selectedCard === "Test & Reports"}
            onClick={handleCardClick}
            icon={BiTestTube}
          />

          <CardButton
            name="Billing"
            selected={selectedCard === "Billing"}
            onClick={handleCardClick}
            icon={BsCash}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
