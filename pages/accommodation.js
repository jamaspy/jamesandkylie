import React from "react";
import { Header, Hero, RoundedWrapper } from "../components";
import { Navbar } from "../components/Navbar";

const Accommodation = () => {
  const guestList = [
    {
      name: "Gaynor & Nick",
      room: "King Studio",
      number: "213",
      nights: "2",
    },
    {
      name: "Sam Aspinall",
      room: "King Studio",
      number: "315",
      nights: "2",
    },
    {
      name: "Sarah Latham",
      room: "King Suite",
      number: "202",
      nights: "2",
    },
    {
      name: "Jamie Hanlon",
      room: "King Suite",
      number: "203",
      nights: "2",
    },
    {
      name: "Tim Rogers",
      room: "King Suite",
      number: "204",
      nights: "2",
    },
    {
      name: "Les Millar",
      room: "King Suite",
      number: "205",
      nights: "3",
    },
    {
      name: "Andy Knight",
      room: "King Suite",
      number: "206",
      nights: "4",
    },
    {
      name: "Alicia Donovan",
      room: "King Suite",
      number: "207",
      nights: "2",
    },
    {
      name: "Rob Jones",
      room: "King Suite",
      number: "208",
      nights: "2",
    },
    {
      name: "Rachel Exton & Danielle Furguson",
      room: "King Suite",
      number: "209",
      nights: "2",
    },
    {
      name: "Kate Graham",
      room: "King Suite",
      number: "218",
      nights: "2",
    },
    {
      name: "Derek McCartney",
      room: "King Suite",
      number: "219",
      nights: "2",
    },
    {
      name: "Nic Chamberlain",
      room: "King Suite",
      number: "220",
      nights: "3",
    },
    {
      name: "Gary Zamal",
      room: "King Suite",
      number: "221",
      nights: "3",
    },
    {
      name: "Lauren Monsel",
      room: "King Suite",
      number: "222",
      nights: "2",
    },
    {
      name: "Chloe & Liam Connolly, Ross & Liz Hibburt ",
      room: "2 Bedroom Villa",
      number: "213",
      nights: "2",
    },
    {
      name: "Dean & Julie Staples",
      room: "2 Bedroom Villa",
      number: "215",
      nights: "2",
    },
    {
      name: "Laura Hopes & Erin Evans",
      room: "2 Bedroom Villa",
      number: "223",
      nights: "2",
    },
    {
      name: "Sam Kirshen",
      room: "2 Bedroom Villa",
      number: "224",
      nights: "2",
    },
    {
      name: "David Aspinall",
      room: "2 Bedroom Villa",
      number: "225",
      nights: "2",
    },
    {
      name: "Les, Veronic, Danny Barnes",
      room: "2 Bedroom Cottage",
      number: "302",
      nights: "3",
    },
    {
      name: "Louise Milne, Gemma Fade, Laura Johnson",
      room: "2 Bedroom Cottage",
      number: "312",
      nights: "3",
    },
  ];
  return (
    <div className="container mx-auto p-4 mb-12">
      <Header
        title="James & Kylie | Accommodation"
        description="James Aspinall & Kylie Clark's wedding location | Hunter Valley NSW"
      />
      <RoundedWrapper>
        <Hero
          title="Accommodation"
          subtitle="Your rooms have been reserved"
          imageTitle={"heroGrape4.png"}
        />
        <Navbar />

        <div className="p-4">
          <p className="font-semibold text-xl">
            Contact the venue to pay your deposit
          </p>
          <p>
            <span className="font-semibold">Phone:</span> (02) 4998 7670 (9am to
            4pm AEST)
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            relax@pokolbinvillage.com.au
          </p>
        </div>
        <div className="flex flex-col md:flex-row p-4">
          <table class="table-auto w-full text-xs md:text-base">
            <thead className="text-left">
              <tr className="divide-gray-400 border-b-2 py-1">
                <th>Names</th>
                <th>Room Type</th>
                <th>Room Number</th>
                <th>Number Nights</th>
              </tr>
            </thead>
            <tbody>
              {guestList.map((guest, index) => (
                <tr key={index} className="divide-gray-400 border-b py-2">
                  <td>{guest.name}</td>
                  <td>{guest.room}</td>
                  <td>{guest.number}</td>
                  <td>{guest.nights}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </RoundedWrapper>
    </div>
  );
};

export default Accommodation;
