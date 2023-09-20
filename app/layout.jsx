'use client'

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import '@styles/globals.css';
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";
import Providers from "./Providers";
import useScreenWidth from "./hooks/useScreenWidth";

export const metadata = {
  title: "PetsPaw",
  description: 'Hello, I am a cat API project'
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(true);
  const width = useScreenWidth();
  const isWideScreen = width >= 1024;
  const isHomePath = pathname === '/';
  const shouldRenderLeftSidebar = isWideScreen;

  useEffect(() => {
    setIsHomePage(pathname === '/');
  }, [pathname]);

  return (
    <html 
      lang='en'
      className='light bg-opacity-0'
      style={{ colorScheme: '' }}
    >
      <head>
        <link rel='icon' href='/assets/icons/favicon.svg' sizes='any' />
      </head>
      <Providers>
        <body className='
          app flex bg-white-soft dark:bg-black relative dark:text-white 
          w-full 
          p-[20px] 
          md:p-[30px]
        '>
          {shouldRenderLeftSidebar && <LeftSidebar />}
          {shouldRenderLeftSidebar && children}

          {isHomePath && !isWideScreen && <LeftSidebar />}

          {!isHomePath && !isWideScreen && children}
        </body>
      </Providers>
    </html>
  )
}