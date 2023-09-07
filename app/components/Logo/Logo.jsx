'use client'

import React from 'react';
import { PawSvg, PetsPawTextSvg } from '@public/assets/svg';
import Link from "next/link";
import { useTheme } from 'next-themes';

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link 
      href="/"
      className='flex items-center w-fit'
    >
      <PawSvg className='mr-2' />
      { theme === "dark" ? (
        <PetsPawTextSvg color={'white'}/>
      ) : (
        <PetsPawTextSvg color={'black'}/>
      )}
    </Link>
  );
};
