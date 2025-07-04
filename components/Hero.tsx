"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title"> Find, Book or Rent a Car Quickly and Easily!!
            </h1>

            <p className="hero__subtitle">
                Streamline Your Car rental experience with our Effortless Booking Process
            </p>

            <CustomButton
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div>
                    <div className="hero__image-overlay" />
                    {/* <div className="hero__image-overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[0]" /> */}
            </div>
        </div>
    </div>
  )
}

export default Hero