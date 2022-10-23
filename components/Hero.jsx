import Image from "next/image";
import React from "react";

const Hero = ({ title, subtitle }) => {
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
      <Image
        src="/circa.jpeg"
        placeholder="blur"
        blurDataURL="/circa.jpeg"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        quality={100}
        alt="coastal road"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full text-center">
        <h1
          className="text-5xl md:text-8xl text-white"
          style={{ textShadow: "1px 1px 1px #0f172a" }}
        >
          {title}
        </h1>
        <h3
          className="text-xl md:text-3xl text-white  mt-4"
          style={{ textShadow: "1px 1px 1px #0f172a" }}
        >
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default Hero;
