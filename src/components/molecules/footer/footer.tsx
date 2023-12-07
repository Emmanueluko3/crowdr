"use client";
import Button from "@/components/atoms/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ProfilePics from "@/../public/images/profilePics.png";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-customBlack flex justify-between items-center p-8 px-16">
      <div className="flex items-center">
        <Link href="/" className="text-white text-3xl font-bold mr-8">
          Crowdr
        </Link>
        <p className="text-gray-500">
          Copyright @ {currentYear} StrategyConnect Inc. All Rights Reserved.
        </p>
      </div>
      <div className="flex gap-3">
        <Button className="text-black flex text-base whitespace-nowrap">
          <span className="mr-3">{plusIcon}</span> Create Campaign
        </Button>
      </div>
    </div>
  );
}
