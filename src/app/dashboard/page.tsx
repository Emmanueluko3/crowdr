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

const categoriesData = [
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
  const categories = [
    "All Campaigns",
    "Creative Projects",
    "Technology and Innovation",
    "Food and Agriculture",
    "Product Development",
    "Social Causes",
    "Event Funding",
    "Renewable Energy",
    "Animal Welfare",
  ];
  return (
    <div className=" bg-auth-bg">
      <Header />
      {/* Trendings */}
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
          {categories.map((item, index) => (
            <button
              key={index}
              className=" text-gray-300 border border-gray-300 rounded-full px-4 py-2 whitespace-nowrap text-base"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="my-10 grid grid-flow-row grid-cols-3 gap-6">
          {categoriesData.map((item, index) => (
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
