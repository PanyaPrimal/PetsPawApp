import React from 'react';
import { Header } from '@app/components/Header/Header';

const PageContainer = ({ children }) => {
  return (
    <main className='flex-col w-full '>
      <Header />
      <div className='bg-white dark:bg-black-soft ml-auto mb-[30px] rounded-[20px] p-[20px]'>
        {children}
      </div>
    </main>
  );
};

export default PageContainer;