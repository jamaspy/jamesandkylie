import { Header, Hero, RoundedWrapper } from "../components";
import { Contact, Welcome } from "../components/sections";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
const LinkItem = ({ text }) => {
  return (
    <a
      className={
        "font-hand text-2xl font-semibold hover:text-slate-400 transition-all ease-in-out duration-150 cursor-pointer"
      }
    >
      {text}
    </a>
  );
};
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Header
        title="James & Kylie"
        description="James Aspinall & Kylie Clark's wedding website"
      />
      <RoundedWrapper>
        <Hero
          title="James & Kylie's Wedding"
          subtitle="25th Nov 2023 | Hunter Valley"
          withButton={true}
          imageTitle={"heroGrape.png"}
        />
        <Navbar />

        <Welcome />
        <hr />
        <div className="flex flex-col md:flex-row p-4">
          <div className="w-full mb-4">
            <h2 className="font-semibold mb-2 text-lg">Key Things</h2>

            <p className={"mb-2"}>
              <span className="font-semibold">Date:</span> 25th November 2023
            </p>
            <p className={"mb-2"}>
              <span className="font-semibold">Wedding Venue:</span> Circa 1876
              Restaurant The Convent
            </p>
            <p className={"mb-2"}>
              <span className="font-semibold">Coaches Depart:</span> 2:20pm
              (from main complex carpark at the front)
            </p>
            <p className={"mb-2"}>
              <span className="font-semibold">Arrival Time:</span> 2:30pm
            </p>
            <p className={"mb-2"}>
              <span className="font-semibold">Wedding Ceremony:</span> 3:00pm
            </p>
            <p className={"mb-2"}>
              <span className="font-semibold">Wedding Reception:</span> 5:00pm
            </p>
            <p className={"mb-2"}>
              <span className="font-semibold">Last Orders:</span> 11:00pm
            </p>
            <p className={"mb-2"}>
              <span className="font-semibold">Return Coaches Depart:</span> 11:15pm
            </p>
            <p>
              <span className="font-semibold">Dress Code:</span> Smart Casual
              (Bridesmaids are in navy blue)
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-end mb-4 hover:text-green-600">
              <FaWhatsapp className="text-green-600 text-2xl mr-2" />
              <a
                href="https://wa.me/+61415392527"
                className="font-semibold"
                target="_blank"
                rel="noreferrer noopener"
              >
                WhatsApp
              </a>
            </div>
            <Contact />
          </div>
        </div>
      </RoundedWrapper>
    </div>
  );
}
