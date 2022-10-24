import React from 'react';
import RSVPForm from '../components/sections/RSVP'
import {Header, Hero, RoundedWrapper} from "../components";
import Link from "next/link";

const Rsvp = () => {

    return (
        <div className="container mx-auto p-4 mb-12">
            <Header
                title="James & Kylie | Location"
                description="James Aspinall & Kylie Clark's wedding location | Hunter Valley NSW"
            />

            <RoundedWrapper>
                <Hero
                    title="RSVP"
                    subtitle="Lets us know if you can make it"
                    imageTitle={"hunter.jpg"}
                />
                <div className="hidden md:flex items-center justify-evenly pr-4 mt-4 text-center text-xl">
                    <Link passHref={true} href={'/'}>
                        <a className={'font-semibold hover:text-slate-400 transition-all ease-in-out duration-150 cursor-pointer'}>Home</a>
                    </Link>
                    <Link passHref={true} href={'/rsvp'}>
                        <a className={'font-semibold hover:text-slate-400 transition-all ease-in-out duration-150 cursor-pointer'}>RSVP</a>
                    </Link>
                    <Link passHref={true} href={'/location'}>
                        <a className={'font-semibold hover:text-slate-400 transition-all ease-in-out duration-150 cursor-pointer'}>Location</a>
                    </Link>
                    <Link passHref={true} href={'/accommodation'}>
                        <a className={'font-semibold hover:text-slate-400 transition-all ease-in-out duration-150 cursor-pointer'}>Accommodation</a>
                    </Link>
                </div>
                <hr className={'mt-2'}/>
                <div className="p-4 bg-white mt-8">
                    <RSVPForm/>
                </div>
            </RoundedWrapper>
        </div>
    )
};

export default Rsvp;