import React from "react";

interface CircularButtonProps {
  onClick: () => void;
  imageUrl: string;
}

const CircularButton = ({ onClick, imageUrl }: CircularButtonProps) => {
  return (
    <div className="avatar">
      <button onClick={onClick}>
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={imageUrl}
            alt="User avatar"
          />
        </div>
      </button>
    </div>
  );
};

export default CircularButton;
