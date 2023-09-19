import React from 'react';
import { Header } from '@app/components/Header/Header';

const PageContainer = ({ children }) => {
  return (
    <main className='flex-col w-full h-full'>
      <Header />
      <div className='
        h-full
        ml-auto mb-[30px] p-[20px]
        bg-white dark:bg-black-soft rounded-[20px]
      '>
        {children}
      </div>
    </main>
  );
};

export default PageContainer;