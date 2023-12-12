"use client";

import Card from "@/components/molecules/cards/card";
import Header from "@/components/molecules/header/header";
import SolarPanel from "@/../public/images/auth-bg.png";
import React, { useEffect, useState } from "react";
import { useMagicContext } from "@/components/magic/MagicProvider";
import {
  IDToCategory,
  getAllCategories,
  getCampaigns,
  getMyCampaigns,
} from "@/lib/utils";
import { ethers } from "ethers";
import Footer from "@/components/molecules/footer/footer";

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M15.76 15.75L11.26 11.25M12.76 7.5C12.76 8.18944 12.6242 8.87213 12.3604 9.50909C12.0965 10.146 11.7098 10.7248 11.2223 11.2123C10.7348 11.6998 10.1561 12.0865 9.5191 12.3504C8.88214 12.6142 8.19945 12.75 7.51001 12.75C6.82057 12.75 6.13788 12.6142 5.50092 12.3504C4.86396 12.0865 4.28521 11.6998 3.7977 11.2123C3.31019 10.7248 2.92348 10.146 2.65964 9.50909C2.39581 8.87213 2.26001 8.18944 2.26001 7.5C2.26001 6.10761 2.81313 4.77226 3.7977 3.78769C4.78227 2.80312 6.11762 2.25 7.51001 2.25C8.9024 2.25 10.2378 2.80312 11.2223 3.78769C12.2069 4.77226 12.76 6.10761 12.76 7.5Z"
      stroke="#B2B2B4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default function Dashboard() {
  const { magic } = useMagicContext();

  const [account, setAccount] = useState<any>("");
  const [campaigns, setCampaigns] = useState<any>([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setAccount(user);
  }, [account]);

  useEffect(() => {
    const getCreatorCampaignsHandler = async () => {
      const provider = await magic?.wallet.getProvider();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const res = await getCampaigns(web3Provider);
      setCampaigns(res);
    };

    const getAllCategoriesHandler = async () => {
      const provider = await magic?.wallet.getProvider();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const res = await getAllCategories(web3Provider);
      setCategories(res);
    };
    getCreatorCampaignsHandler();
    getAllCategoriesHandler();
  }, [magic]);

  return (
    <div className=" bg-auth-bg">
      <Header />
      {/* Trendings */}
      <div className="py-14 px-16">
        <h2 className="text-white font-bold text-3xl">Trending Now</h2>
        <div className="my-10 grid grid-flow-row grid-cols-3 gap-6">
          {campaigns &&
            campaigns
              ?.slice(0, 3)
              .map((item: any, index: number) => (
                <Card
                  key={index}
                  image={item.image}
                  category={IDToCategory(item.category)}
                  daysLeft={4}
                  title={item.title}
                  subtitle={item.description}
                  creatorPicture={SolarPanel}
                  creator={"Divine Samuel"}
                  raised={item.totalFunds}
                  supporters={item.supporters}
                  goal={item.goal}
                />
              ))}
        </div>
      </div>

      {/* Categories */}
      <div className="py-14 px-16">
        <div className="flex justify-between items-center w-full mb-8">
          <h2 className="text-white font-bold text-3xl">Categories</h2>{" "}
          <div className=" w-1/5 rounded-lg py-2 px-4 flex items-center border-2 border-gray-500 focus-within:border-[#03DEE2]">
            <span>{searchIcon}</span>
            <input
              type="text"
              id="searchInput"
              placeholder="Search"
              className="bg-transparent border-none ml-2 focus:outline-none w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {categories &&
            categories.map((item: any, index) => (
              <button
                key={index}
                className=" text-gray-300 border border-gray-300 rounded-full px-4 py-2 whitespace-nowrap text-base"
              >
                {item
                  .split("_")
                  .map(
                    (word: any) =>
                      word[0].toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </button>
            ))}
        </div>
        <div className="my-10 grid grid-flow-row grid-cols-3 gap-6">
          {campaigns.map((item: any, index: number) => (
            <Card
              key={index}
              image={SolarPanel}
              category={IDToCategory(item.category)}
              daysLeft={4}
              title={item.title}
              subtitle={item.description}
              creatorPicture={SolarPanel}
              creator={"Divine Samuel"}
              raised={item.totalFunds}
              supporters={item.supporters}
              goal={item.goal}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
