import React from "react";
import { IconType } from "react-icons";

interface CardButtonProps {
  name: string;
  selected: boolean;
  onClick: (name: string) => void;
  icon?: IconType;
}

const CardButton: React.FC<CardButtonProps> = ({
  name,
  selected,
  onClick,
  icon: Icon,
}) => {
  const isUpperRounded = name === "Patients" || name === "Registration";
  const isLowerRounded = name === "Pharma" || name === "Billing";
  return (
    <button
      className={`flex flex-col items-center justify-center h-20 w-full  ${
        selected ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"
      }`}
      onClick={() => onClick(name)}
      style={{
        borderTopLeftRadius: isUpperRounded ? "0.5rem" : undefined,
        borderTopRightRadius: isUpperRounded ? "0.5rem" : undefined,
        borderBottomLeftRadius: isLowerRounded ? "0.5rem" : undefined,
        borderBottomRightRadius: isLowerRounded ? "0.5rem" : undefined,
        boxShadow: isLowerRounded ? "0px 4px 4px rgba(0, 0, 0, 0.1)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {Icon && <Icon className=" text-2xl" />}
      {name}
    </button>
  );
};

export default CardButton;
