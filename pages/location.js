import React from 'react';
import {Header, Hero, RoundedWrapper} from "../components";


const Location = () => {
    return (
        <div className="container mx-auto p-4 mb-12">
            <Header
                title="James & Kylie | Location"
                description="James Aspinall & Kylie Clark's wedding location | Hunter Valley NSW"
            />
            <RoundedWrapper>
                <Hero
                    title="Location"
                    subtitle="Circa 1876 | Hunter Valley"
                />
                <div className="mt-8 pl-4">
                    <p className='text-xl'><span className="font-semibold">Venue:</span> Circa 1876 Restaurant The Convent</p>
                <p className='text-xl'><span className="font-semibold">Address:</span> 64 Halls Road, Pokolbin NSW 2320</p>
                <p className='text-xl'><span className="font-semibold">Dress Code:</span> Smart Formal</p>
                </div>


                <hr className='mt-8'/>
                <div className="flex flex-col md:flex-row p-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.4439498043816!2d151.31304551674802!3d-32.78048597082922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0ccab7687fc91f%3A0xad7464b0d7c568c8!2sCirca%201876%20Restaurant%20The%20Convent%20Hunter%20Valley!5e0!3m2!1sen!2sau!4v1666564321240!5m2!1sen!2sau"
                        width="100%" height="450" style={{border: 0, borderRadius:'20px', boxShadow:"1px 1px 1px #F7F7F7", margin:"auto"}} allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </RoundedWrapper>
        </div>
    );
};

export default Location;