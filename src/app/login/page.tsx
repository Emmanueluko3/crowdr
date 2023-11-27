import React from "react";

export default function Login() {
  return (
    <div className=" bg-auth-bg">
      <div className="w-full bg-customBlack flex justify-center items-center p-8">
        <h2 className="text-white text-4xl font-bold">Crowdr</h2>
      </div>

      <div className="grid grid-flow-row grid-cols-2 justify-center items-end p-10 w-full">
        <div className="p-6 order-last bg-gradient-to-b from-[#17191F] to-[#0F1115] rounded-2xl w-full">
          <h2 className="text-white text-2xl font-bold mb-2">Login</h2>
          <p className=" text-gray-300 text-base">
            Welcome back, login to continue
          </p>
        </div>
      </div>
    </div>
  );
}
