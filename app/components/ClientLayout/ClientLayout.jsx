'use client'

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { LeftSidebar } from "../LeftSidebar/LeftSidebar";
import Providers from "@app/Providers";
import useScreenWidth from "@app/hooks/useScreenWidth";
import { Provider } from 'react-redux';
import store from "@app/store/store";
import {
	DehydratedState,
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";

const client = new QueryClient();

export function ClientRootLayout({ children }) {
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
      <Provider store={store}>
        <Providers>
          <body className='
            app flex bg-white-soft dark:bg-black relative dark:text-white 
            w-full 
            p-[20px] 
            md:p-[30px]
          '>
            <QueryClientProvider client={client}>
              {shouldRenderLeftSidebar && <LeftSidebar />}
              {shouldRenderLeftSidebar && children}

              {isHomePath && !isWideScreen && <LeftSidebar />}

              {!isHomePath && !isWideScreen && children}
            </QueryClientProvider>
          </body>
        </Providers>
      </Provider>
    </html>
  )
}