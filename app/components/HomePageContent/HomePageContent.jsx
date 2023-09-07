import React from "react";
import Image from 'next/image';

export const HomePageContent = () => {
  return (
    <div className="max-w-[775px] w-full h-full">
      <div className="w-full h-full relative">
        <Image
          
          src="/assets/images/girl-and-pet1.png"
          width={775}
          height={900}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};