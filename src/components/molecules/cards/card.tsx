"use client";
import Image from "next/image";
import * as React from "react";
import ProgressBar from "@/components/atoms/progressBar";

interface CardProps {
  image: any;
  category: string;
  daysLeft: string | number;
  title: string;
  subtitle: string;
  creatorPicture: any;
  creator: string;
  raised: number;
  supporters: number;
  goal: number;
}

const Card: React.FC<CardProps> = ({
  image,
  category,
  daysLeft,
  title,
  subtitle,
  creatorPicture,
  creator,
  raised,
  supporters,
  goal,
}) => {
  const percentage = Math.min(Math.max((raised / goal) * 100, 0), 100);

  return (
    <div
      className={`w-full bg-gradient-to-b from-[#17191F] to-[#0F1115] rounded-3xl`}
    >
      <div className="w-full h-44">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Solar Panel"
          loading="lazy"
          className="w-full h-full rounded-t-3xl"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center w-full mb-4">
          <p className="bg-gray-700 text-xs whitespace-nowrap text-[#03DEE2] rounded-full py-2 px-3">
            {category}
          </p>
          <p className="text-base whitespace-nowrap text-white">
            {3} days Left
            {/* {daysLeft} days Left */}
          </p>
        </div>
        <h4 className="text-base text-white font-medium mb-4">{title}</h4>
        <p className=" text-gray-400 text-sm mb-4 pb-2">
          {subtitle.substring(0, 168)}...
        </p>
        <div className="flex items-center">
          <Image
            src={creatorPicture}
            width={500}
            height={500}
            alt="Solar Panel"
            loading="lazy"
            className="w-10 h-10 rounded-full mr-4"
          />
          <h2 className="text-base text-gray-200">{creator}</h2>
        </div>
        <ProgressBar progress={percentage} addClassName="h-2 my-4" />
        <div className="flex justify-between items-center">
          <h3 className=" text-gray-400 text-xs">
            Raised <span className=" text-white">${raised}</span>
          </h3>
          <h3 className=" text-gray-400 text-xs">
            Supporters <span className=" text-white">{"20"}</span>
            {/* Supporters <span className=" text-white">{supporters}</span> */}
          </h3>
          <h3 className=" text-gray-400 text-xs">
            Goal <span className=" text-white">${goal}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
