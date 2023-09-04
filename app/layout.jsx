import React from "react";
import '@styles/globals.css';
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";

export const metadata = {
  title: "PetsPaw",
  description: 'Hello, i am cat API project'
}

export default function RootLayout({ children }) {
 return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/assets/icons/favicon.svg" sizes="any" />
      </head>
      <body className='app w-full flex pt-[30px] pl-[147px] pr-[30px]'>
        <LeftSidebar className="max-w-[665px] w-full"></LeftSidebar>
        {children}
      </body>
    </html>
  )
}
