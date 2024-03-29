import Image from "next/image";
import React from "react";
import { Button } from "../components";
import { EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Hero = ({ title, subtitle, withButton, imageTitle }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "70vh",
        zIndex: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
      }}
    >
      <div
        className="w-full bg-gradient-to-r from-stone-50 to-stone-100 p-4 pb-12 md:pb-8 z-10 absolute top-0 flex items-center justify-start"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center ml-4 md:ml-12 mb-2 md:mb-0">
          <Image
            src={`/tras.png`}
            placeholder="blur"
            blurDataURL={`/${imageTitle}`}
            // layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            quality={100}
            width={100}
            height={100}
            alt="hunter valley scenery"
          />
          <p className="font-hand text-2xl">James & Kylie</p>
        </div>
      </div>
      <Image
        src={`/${imageTitle}`}
        placeholder="blur"
        blurDataURL={`/${imageTitle}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        alt="hunter valley scenery"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full text-center">
        {/* <h1
          className="text-2xl md:text-5xl  text-white"
          style={{ textShadow: "1px 1px 1px #0f172a" }}
        >
          {title}
        </h1>
        <h3
          className="text-xl md:text-3xl text-white  mt-4"
          style={{ textShadow: "1px 1px 1px #0f172a" }}
        >
          {subtitle}
        </h3> */}

        {/* {withButton && (
          <Link passHref href="/rsvp">
            <a>
              <Button className="mt-4 hover:bg-slate-700 transition-all ease-in-out duration-150">
                <EnvelopeOpenIcon className={"w-6 h-6 text-white mr-2"} /> RSVP
                Now
              </Button>
            </a>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Hero;
