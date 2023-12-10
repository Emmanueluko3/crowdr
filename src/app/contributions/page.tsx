"use client";

import Card from "@/components/molecules/cards/card";
import Header from "@/components/molecules/header/header";
import SolarPanel from "@/../public/images/auth-bg.png";
import React, { useEffect, useState } from "react";
import { useMagicContext } from "@/components/magic/MagicProvider";
import { IDToCategory, getMyCampaigns } from "@/lib/utils";
import { ethers } from "ethers";


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
export default function Contributions() {

  const { magic } = useMagicContext()

  const [account, setAccount] = useState<string | null>('')
  const [campaigns, setCampaigns] = useState([])

  const getCreatorCampaignsHandler = async () => {
   const provider = await magic?.wallet.getProvider();
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const res = await getMyCampaigns(web3Provider, account)
    setCampaigns(res)
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    setAccount(user);
  }, [account]);

  useEffect(() => {
    getCreatorCampaignsHandler()
  }, [magic, account])

  return (
    <div className=" bg-auth-bg">
      <Header />
      <div className="py-14 px-16">
        <h2 className="text-white font-bold text-3xl">My Contributions</h2>
        <div className="my-10 grid grid-flow-row grid-cols-3 gap-6">
          {campaigns &&
            campaigns.map((item, index) => (
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

    </div>
  );
}
