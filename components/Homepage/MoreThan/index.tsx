"use client";
import { TabCard } from "@/components/Cards";
import { moreThanProvider } from "@/content/more_than_provider";
import image1 from "@/public/morethan/moreThan1.jpeg";
import image2 from "@/public/morethan/moreThan2.jpeg";
import image3 from "@/public/morethan/moreThan3.jpeg";
import tableLadies from "@/public/tableLadies.png";

import Image from "next/image";
import React, { Fragment } from "react";
export const MoreThan = () => {
  const [selectedTab, setSelectedTab] = React.useState<number>(0);

  const renderImage = (index: number) => {
    switch (index) {
      case 0:
        return (
          <Image
            src={tableLadies}
            alt="option1"
            className="rounded-lg"
            width={800}
          />
        );
      case 1:
        return (
          <Image
            src={image2}
            alt="option2"
            className="rounded-lg"
            width={800}
          />
        );
      case 2:
        return (
          <Image
            src={image3}
            alt="option3"
            className="rounded-lg"
            width={800}
          />
        );
      default:
        return (
          <Image
            src={image1}
            alt="option1"
            className="rounded-lg"
            width={800}
          />
        );
    }
  };
  return (
    <section className="bg-[#FFF9F0]">
      <div className=" container mx-auto p-8">
        <div className="max-w-xl"></div>
        <div className="flex flex-row gap-16">
          <div className="flex-1 flex items-center justify-center">
            {renderImage(selectedTab)}
          </div>
          <div className="flex-1">
            <p className="font-bold text-6xl leading-snug mb-8">
              Your partner for diversity, growth, and female leadership in{" "}
              <span className="bg-tea-green text-white">tech recruitment</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
