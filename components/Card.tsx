import React from "react";

import { ReactNode } from "react";

interface CardProps {
  title: string;
  today: number;
  period: number;
  icon: ReactNode;
}

function Card({ title, today, period, icon }: CardProps) {
  return (
    <div className="flex items-start p-4  border w-[250px] bg-white border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-col w-full mr-4">
        <h2 className="text-green font-semibold">{title}</h2>
        <p className="text-xl font-bold">
          {period}/{today}
        </p>
        <p>Period/Today</p>
      </div>
      <div>{icon}</div>
    </div>
  );
}

export default Card;
