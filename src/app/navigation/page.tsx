import Card from "@/components/molecules/cards/card";
import Header from "@/components/molecules/header/header";
import SolarPanel from "@/../public/images/auth-bg.png";
import React from "react";

const trending = [
  {
    image: SolarPanel,
    category: "Renewable Energy",
    daysLeft: 12,
    title: "Empowering Communities: Solar-Powered Microgrid Initiative",
    subtitle:
      "A Solar-Powered Community Microgrid is a self-sustaining energy system that combines solar energy generation with energy storage solutions and smart grid technologies. This microgrid can provide clean, renewable energy to an entire community, especially in areas where access to reliable electricity is limited. The project aims to reduce carbon emissions, promote sustainable energy practices, and improve the quality of life for community members.",
    creatorPicture: SolarPanel,
    creator: "Divine Samuel",
    raised: 5200,
    supporters: 20,
    goal: 10000,
  },
  {
    image: SolarPanel,
    category: "Food and Agriculture",
    daysLeft: 20,
    title:
      "Growing Futures: Sustainable Farming and Agricultural Training Center",
    subtitle:
      "The Sustainable Farming and Agricultural Training Center is a comprehensive initiative aimed at promoting sustainable agricultural practices, improving food security, and empowering local farmers and communities. The center serves as an educational hub and a practical training ground for farmers, teaching them modern and eco-friendly farming techniques while emphasizing environmental conservation and community development.",
    creatorPicture: SolarPanel,
    creator: "ADAX COOP",
    raised: 2000,
    supporters: 20,
    goal: 10000,
  },
  {
    image: SolarPanel,
    category: "Renewable Energy",
    daysLeft: 12,
    title: "Healing Paws: Animal Rescue and Rehabilitation Center",
    subtitle:
      "The Animal Rescue and Rehabilitation Center provides a safe haven for abused, neglected, and injured animals. The center offers medical care, rehabilitation, and behavioral support to help animals recover physically and emotionally. It also focuses on education and advocacy, promoting responsible pet ownership and raising awareness about animal welfare issues.",
    creatorPicture: SolarPanel,
    creator: "Lucia Stephen",
    raised: 9000,
    supporters: 20,
    goal: 10000,
  },
];

export default function Navigation() {
  return (
    <div className=" bg-auth-bg">
      <Header />
      <div className="py-14 px-16">
        <h2 className="text-white font-bold text-3xl">Trending Now</h2>
        <div className="my-10 grid grid-flow-row grid-cols-3 gap-6">
          {trending.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              category={item.category}
              daysLeft={item.daysLeft}
              title={item.title}
              subtitle={item.subtitle}
              creatorPicture={item.creatorPicture}
              creator={item.creator}
              raised={item.raised}
              supporters={item.supporters}
              goal={item.goal}
            />
          ))}
        </div>
      </div>
      <div className="py-14 px-16">
        <h2 className="text-white font-bold text-3xl">Categories</h2>
        <div className="my-10 grid grid-flow-row grid-cols-3 gap-6">
          {trending.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              category={item.category}
              daysLeft={item.daysLeft}
              title={item.title}
              subtitle={item.subtitle}
              creatorPicture={item.creatorPicture}
              creator={item.creator}
              raised={item.raised}
              supporters={item.supporters}
              goal={item.goal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
