import React from 'react';
import { PawSvg, PetsPawTextSvg } from '@public/assets/svg';
import Link from "next/link";

export const Logo = () => {
  return (
    <Link 
      href="/"
      className='flex items-center w-fit'
    >
      <PawSvg className='mr-2' />
      <PetsPawTextSvg />
    </Link>
  );
};
