import React from 'react';
import Image from 'next/image';

export const HomePageContent = () => {
  return (
    <div className='
      hidden
      lg:flex
      w-[680px]
      mb-[30px]
      ml-auto
      bg-primary-soft dark:bg-black-soft   
      rounded-[20px]
    '>
      <div className='h-full ml-[560px] absolute right-0 top-0 overflow-hidden'>
        <Image
          src='/assets/images/girl-and-pet1.png'
          width={775}
          height={900}
          alt='Home page image, girl with the cat'
        />
      </div>
    </div>
  );
};