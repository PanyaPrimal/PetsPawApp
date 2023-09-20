import React from 'react';
import { Header } from '@app/components/Header/Header';

const PageContainer = ({ children, showHeader = true, customStyles = {} }) => {
  
  const containerStyles = {
    ...customStyles,
  };

  return (
    <main className='flex-col w-full h-full lg:max-w-[680px] lg:ml-auto'>
      {showHeader && <Header />}
      <div className='
        h-[calc(100%-70px)]
        m-auto  p-[20px]
        bg-white dark:bg-black-soft rounded-[20px]
      '
      style={containerStyles}  
    >
        {children}
      </div>
    </main>
  );
};

export default PageContainer;