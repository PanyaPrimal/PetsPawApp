import React from "react";
import '@styles/globals.css';
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";
import Providers from "./Providers";

export const metadata = {
  title: "PetsPaw",
  description: 'Hello, i am cat API project'
}

export default function RootLayout({ children }) {
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
          md:pr-[30px] md:pt-[30px]
          md:pl-[147px]
        '>
          <LeftSidebar></LeftSidebar>
          <div className='w-[calc(100%-60px)] h-[calc(100%-80px)] hidden lg:flex'>
            {children}
          </div>
        </body>
      </Providers>
    </html>
  )
}