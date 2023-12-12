"use client";
import Button from "@/components/atoms/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useMagicContext } from "@/components/magic/MagicProvider";
import { createCampaign, toTimestamp, truncate } from "@/lib/utils";
import { ethers } from "ethers";
import SelectGroup from "../inputGroup/selectGroup";
import InputGroup from "../inputGroup/inputGroup";
import Modal from "../Modals/modal";

const plusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z"
      fill="black"
    />
  </svg>
);

export default function Header() {
  const pathname = usePathname().split("/")[1];
  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "My Campaigns", href: "/campaign" },
  ];

  const { magic } = useMagicContext();

  const [account, setAccount] = useState<string>("");
  const [logoutBtn, setLogoutBtn] = useState<boolean>(false)
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [goal, setGoal] = useState<number>();
  const [duration, setDuration] = useState<number>();
  const [category, setCategory] = useState<number>(0);
  const [image, setImage] = useState<string>('');

  const [createCampaignModal, setCreateCampaignModal] = useState(false);


  const connect = useCallback(async () => {
    if (!magic) return;
    try {
      const accounts = await magic?.wallet.connectWithUI();

      localStorage.setItem("user", accounts[0]);
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  }, [magic, setAccount]);

  const createCampaignHandler = async () => {
    const provider = await magic?.wallet.getProvider();
    const web3Provider = new ethers.providers.Web3Provider(provider);

    if (account) {
      await createCampaign(
        web3Provider.getSigner(),
        title,
        description,
        goal,
        duration,
        category,
        image
      );

    } else {

      await connect();
      await createCampaign(
        web3Provider.getSigner(),
        title,
        description,
        goal,
        duration,
        category,
        image
      );
    }
  };

  const logout = async () => {
    await magic?.wallet.disconnect();
    localStorage.removeItem("user");
    setAccount("");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setAccount(user);
  }, []);

  return (
    <div className="w-full bg-customBlack flex justify-between items-center p-8 px-16">
      {/* Create campaign */}
      {createCampaignModal && (
        <Modal onClose={() => setCreateCampaignModal(false)}>
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="font-bold text-3xl m-8">Create a new campaign</h2>

            <div className="border border-customBlue rounded-lg p-4 w-[60vw] bg-customBlack">
              <h3 className="text-xl font-bold mb-4">Introduction</h3>
              <div className="mb-4">
                <InputGroup
                  onChange={e => setTitle(e.target.value)}
                  label="Campaign Title"
                  placeholder="Enter campaign title"
                />
              </div>
              <div className="mb-4">
                <SelectGroup
                  label="Category"
                  onChange={e => setCategory(Number(e.target.value))}
                  value={category}
                  placeholder="Select Campaign Category"
                  options={[
                    { label: "Creative Projects", value: 0 },
                    { label: "Technology and Innovation", value: 1 },
                    { label: "Food and Agriculture", value: 2 },
                    { label: "Social Causes", value: 3 },
                    { label: "Event Funding", value: 4 },
                    { label: "REFI", value: 5 },
                    { label: "Renewable Energy", value: 6 },
                    { label: "Animal Welfare", value: 7 },
                  ]}
                />
              </div>
              <div className="mb-4">
                <InputGroup
                  onChange={e => setDescription(e.target.value)}
                  label="Project Overview"
                  placeholder="Write something"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Tell Your Story</h3>
              <div className="mb-4">
                <InputGroup label="Background" placeholder="write something" />
              </div>

              <div className="mb-4">
                <InputGroup
                  onChange={e => setGoal(Number(e.target.value))}
                  label="Goal"
                  placeholder="Write something"
                />
              </div>

              <div className="mb-4">
                <InputGroup
                  onChange={e => setImage(e.target.value)}
                  label="Image path"
                  placeholder="Write something"
                />
              </div>

              <div className="mb-4">
                 <input
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                  type="datetime-local"
                  id="start"
                  onChange={e => setDuration(toTimestamp(e.target.value))}
                  placeholder="Start Time"
                  required
                   />
              </div>

              <Button onClick={createCampaignHandler} className="text-gray-950">Continue</Button>
            </div>
          </div>
        </Modal>
      )}
      <div className="flex items-center">
        <Link href="/" className="text-white text-3xl font-bold mr-8">
          Crowdr
        </Link>
        <div className="bg-gradient-to-b from-[#17191F] to-[#0F1115] px-4 py-3 rounded-full">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`text-base mx-4 hover:text-[#03DEE2] ${
                "/" + pathname === link.href
                  ? " text-[#03DEE2]"
                  : "text-customGray"
              } `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={() => setCreateCampaignModal(true)}
          className="text-black flex text-base whitespace-nowrap"
        >
          <span className="mr-3">{plusIcon}</span> Create Campaign
        </Button>

        {account ? (
          <>
            <Button
              onClick={() => setLogoutBtn(!logoutBtn)}
              className="bg-gradient-to-b from-[#17191F] to-[#0F1115] text-base whitespace-nowrap"
            >
              {truncate(account)}
            </Button>
            {logoutBtn && <Button onClick={logout}>Logout</Button>}
          </>
        ) : (
          <Button onClick={connect} className="text-gray-950">
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
