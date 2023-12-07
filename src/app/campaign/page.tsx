"use client";

import Image from "next/image";
import SolarPanel from "@/../public/images/auth-bg.png";
import Header from "@/components/molecules/header/header";
import ProfilePics from "@/../public/images/profilePics.png";

const descriptions = [
  {
    title: "Project overview",
    subtile:
      "A Solar-Powered Community Microgrid is a self-sustaining energy system that combines solar energy generation with energy storage solutions and smart grid technologies. This microgrid can provide clean, renewable energy to an entire community, especially in areas where access to reliable electricity is limited. The project aims to reduce carbon emissions, promote sustainable energy practices, and improve the quality of life for community members.",
  },
  {
    title: "Background",
    subtile:
      "In the heart of rural communities, where the rhythm of life is intertwined with the land, lies a story of resilience, hope, and the enduring spirit of agriculture. The Harvesting Hope project is a transformative initiative aimed at nurturing sustainable farming practices within these communities. It addresses the challenges faced by small-scale farmers, fostering cooperation through the establishment of farming cooperatives. These cooperatives not only promote environmentally conscious agricultural methods but also create pathways to economic stability and community development.Small farmers often face obstacles ranging from limited access to resources and education to market vulnerabilities. The Harvesting Hope project seeks to break these barriers, ushering in a new era of sustainable agriculture that benefits both the environment and the livelihoods of those who cultivate the land.",
  },
  {
    title: "Personal Connection",
    subtile:
      "Our commitment to Harvesting Hope is personal. Witnessing the struggles of small-scale farmers has fueled our passion for sustainable change. We believe in empowering communities, protecting the environment, and fostering innovation. This project is more than an initiative; it's a shared vision for a more sustainable and equitable future. Join us in sowing the seeds of change and cultivating hope for generations to come.",
  },
  {
    title: "Budget Breakdown",
    subtile:
      "The budget for the Solar-Powered Community Microgrid Project encompasses critical components to ensure its success. Key allocations include solar panel installation with photovoltaic panels, inverters, mounting structures, wiring, and electrical components. Battery storage systems, incorporating lithium-ion batteries, battery management systems, and charge controllers, contribute to energy reliability. The implementation of smart grid technology involves smart meters, monitoring sensors, and essential communication infrastructure. Community training and education initiatives, maintenance and upkeep provisions, and infrastructure development, including microgrid facilities and distribution lines, are paramount. Environmental impact measures like agroforestry and sustainable construction practices, accessibility upgrades, and educational outreach programs are also funded. Economic development initiatives, emergency preparedness measures, scalability provisions, cost efficiency measures, long-term sustainability planning, and a contingency fund round out the comprehensive budget, ensuring a holistic approach to the project's success. The total budget for these endeavors is [10,000].",
  },
];
export default function Campaign() {
  return (
    <div>
      <Header />
      <div className="py-14 px-16">
        <div className="w-full h-80 py-10">
          <Image
            src={SolarPanel}
            width={500}
            height={500}
            alt="Solar Panel"
            loading="lazy"
            className="w-full h-full rounded-t-3xl"
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className=" col-span-8">
            <h2 className="mb-4">
              Empowering Communities: Solar-Powered Microgrid Initiative
            </h2>
            <span className="text-customBlue border border-customBlue bg-gradient-to-b from-[#17191F] to-[#0F1115] rounded-full px-4 py-2 whitespace-nowrap text-base ">
              Renewable Energy
            </span>

            {descriptions.map((item, index) => (
              <div key={index} className="my-10 text-xl">
                <h2 className=" font-bold text-white mb-3">{item.title}</h2>
                <p className="mb-6 text-gray-200 text-base">{item.subtile}</p>
              </div>
            ))}
          </div>
          <div className=" col-span-4 flex items-center justify-center flex-col bg-gradient-to-b from-[#17191F] to-[#0F1115] p-6 rounded-2xl h-fit">
            <Image
              src={ProfilePics}
              width={500}
              height={500}
              alt="Solar Panel"
              loading="lazy"
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className=" text-2xl font-bold mb-4">Divine Samuel</h3>
            <p className=" text-customGray text-base mb-6">Raised</p>
            <h3 className=" text-lg font-medium mb-4">$2000</h3>
            <p className=" text-customGray text-base mb-6">Supporters</p>
            <h3 className=" text-lg font-medium mb-4">20</h3>
            <p className=" text-customGray text-base mb-6">Goal</p>
            <h3 className=" text-lg font-medium mb-4">$10,000</h3>
            <p className=" text-white text-base mt-6">
              11th Nov - 11 Dec, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
