import React from 'react';
import { Header } from '@app/components/Header/Header';
import HeaderContent from '../HeaderContent/HeaderContent';

const PageContainer = ({ children, showHeader = true }) => {
  return (
    <main className='flex-col w-full h-full lg:max-w-[680px] lg:ml-auto'>
      {showHeader && <Header />}
      <div className={`
        flex flex-col
        h-[calc(100%-70px)]
        m-auto  p-[20px]
        dark:bg-black-soft rounded-[20px]
        ${showHeader ? 'bg-white' : ''}
      `}>
        {showHeader && <HeaderContent />}
        {children}
      </div>
    </main>
  );
};

export default PageContainer;