"use client";
import Image from "next/image";
import * as React from "react";
import SolarPanel from "@/../public/images/auth-bg.png";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div
      className={`w-full bg-gradient-to-b from-[#17191F] to-[#0F1115] rounded-3xl`}
    >
      <div className="w-full h-44">
        <Image
          src={SolarPanel}
          width={500}
          height={500}
          alt="Solar Panel"
          loading="lazy"
          className="w-full h-full rounded-t-3xl"
        />
      </div>
      <div className="p-5">
        <h4 className="text-base text-white font-medium">{title}</h4>
      </div>
    </div>
  );
};

export default Card;
