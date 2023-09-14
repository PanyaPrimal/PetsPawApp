import React from 'react';
import Image from 'next/image';

export const HomePageContent = () => {
  return (
      <div className='
        hidden
        lg:flex
      '>        
        <div className='h-full ml-[560px] absolute right-0 top-0 overflow-hidden'>
          <div className='
            w-[calc(100%-60px)] h-[calc(100vh-60px)] absolute top-[30px]
            ml-[30px] 
            bg-primary-soft dark:bg-black-soft
            rounded-[20px]
            z-[-1]
          '>
          </div>
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