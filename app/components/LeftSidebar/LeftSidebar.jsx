import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';

export const LeftSidebar = () => {
  return (
    <aside className='flex flex-col 2sm:max-lg:w-full md:pl-[147px] md:max-lg:pr-[147px]'>
      <div className='flex justify-between'>
        <Logo />
        <ThemeToggler />
      </div>

      <h2 className='mt-[80px] text-4xl font-medium leading-[58px]'>
        Hi!👋
      </h2>

      <h5 className='mt-[10px] mb-[60px] text-gray-dark'>Welcome to MacPaw Bootcamp 2023</h5>

      <h4 className='mb-[20px] font-medium'>Lets start using The Cat API</h4>

      <Navigation />
      
    </aside>
  );
};
