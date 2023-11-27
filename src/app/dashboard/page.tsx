import Card from "@/components/molecules/cards/card";
import Header from "@/components/molecules/header/header";
import React from "react";

export default function Dashboard() {
  return (
    <div className=" bg-auth-bg">
      <Header />
      <div className="py-14 px-16">
        <h2 className="text-white">Trending Now</h2>
        <div className="my-10 grid grid-flow-row grid-cols-3 gap-3">
          <Card title="Empowering Communities: Solar-Powered Microgrid Initiative" />
        </div>
      </div>
    </div>
  );
}
