import React from 'react';
import RSVPForm from '../components/sections/RSVP'
import {Header, Hero, RoundedWrapper} from "../components";
import {ConfettiContainer} from "../components/Confetti/ConfettiContaier";

const Rsvp = () => {

    return(
        <div className="container mx-auto p-4 mb-12">
            <Header
                title="James & Kylie | Location"
                description="James Aspinall & Kylie Clark's wedding location | Hunter Valley NSW"
            />
            <ConfettiContainer />
            <RoundedWrapper>
                <Hero
                    title="RSVP"
                    subtitle="Lets us know if you can make it "
                />
                <div className="p-4 bg-white mt-8">
                <RSVPForm/>
                </div>
            </RoundedWrapper>
        </div>
    )
};

export default Rsvp;