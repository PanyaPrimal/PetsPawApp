This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


'use client'

import { ThemeEyeClosed, ThemeEyeOpen, ThemeTogglerLeft, ThemeTogglerRight } from '@public/assets/svg';
import React, { useState, useEffect } from 'react';
import styles from './togler.module.css';
import { useTheme } from 'next-themes';

export const ThemeToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState();

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    setIsDarkTheme(storedTheme === 'dark');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className='flex items-center mr-[16px] cursor-pointer' onClick={toggleTheme}>
      {isDarkTheme ? (
        <ThemeEyeClosed className={`rounded-[20px] w-6 h-6 bg-[#FFFFFF0D] p-1 bg-opacity-5 mr-[5px] ${styles}`} />
      ) : (
        <ThemeEyeOpen className={`rounded-[20px] w-6 h-6 bg-white p-1 mr-[5px] ${styles}`} />
      )}
      {isDarkTheme ? (
        <ThemeTogglerLeft className={{styles}} />
      ) : (
        <ThemeTogglerRight className={{styles}} />
      )}
    </div>
  );
};