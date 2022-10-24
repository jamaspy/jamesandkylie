import React from 'react';
import Link from "next/link";

const Accommodation = () => {
    return (
        <div>
            Accommodation
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
        </div>
    );
};

export default Accommodation;