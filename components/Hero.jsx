import Image from "next/image";
import React from "react";
import {Button} from "../components"
import {EnvelopeOpenIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

const Hero = ({title, subtitle, withButton, imageTitle}) => {
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
                <h1
                    className="text-5xl md:text-8xl text-white"
                    style={{textShadow: "1px 1px 1px #0f172a"}}
                >
                    {title}
                </h1>
                <h3
                    className="text-xl md:text-3xl text-white  mt-4"
                    style={{textShadow: "1px 1px 1px #0f172a"}}
                >
                    {subtitle}
                </h3>

                {withButton && (
                    <Link passHref href="/rsvp">
                        <a>
                            <Button className="mt-4 hover:bg-slate-700 transition-all ease-in-out duration-150">
                                <EnvelopeOpenIcon className={'w-6 h-6 text-white mr-2'}/> RSVP Now
                            </Button>
                        </a>
                    </Link>
                )}

            </div>
        </div>
    );
};

export default Hero;
