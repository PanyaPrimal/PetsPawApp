import React from 'react';
import { PawSvg, PetsPawTextSvg } from '@public/assets/svg';

export const Logo = () => {
  return (
    <div className='flex items-center w-fit'>
      <PawSvg className='mr-2' />
      <PetsPawTextSvg />
    </div>
  );
};
