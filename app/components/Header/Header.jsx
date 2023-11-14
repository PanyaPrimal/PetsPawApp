'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react';
import styles from './Header.module.scss'
import Button from '../ui/Button/Button';
import {
  BurgerMenuSvg, 
  CloseSvg, 
  LikeSvg, 
  FavoriteHeartSvgEmpty, 
  DislikeSvg,
} from '../../../public/assets/svg/index';
import SearchBar from '../SearchBar/SearchBar';
import Link from 'next/link';
import getActiveClass from '@utils/getActiveClass';
import useScreenWidth from "@app/hooks/useScreenWidth";
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { Logo } from '../Logo/Logo';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { Navigation } from '../Navigation/Navigation';
import dynamic from 'next/dynamic';
import { closeBurger, openBurger } from '@app/store/reducers/burgerSlice';

export const Header = ({ ...props}) => {
  const dispatch = useAppDispatch();
  const screenWidth = useScreenWidth();
  
  const headerClasses = `
    ${styles.header || ''}
		${props.className || ''}
  `

  const router = usePathname();

  const BurgerMenu = dynamic(() => import("../BurgerMenu/BurgerMenu"));

 useEffect(() => {
  if (screenWidth > 1024) {
      dispatch(closeBurger());
    }
  }, [screenWidth, dispatch]);
  
  return (
    <>
      <header {...props} className={`
        ${headerClasses}
      `}>
        {screenWidth < 1024 && (
            <Button
              className='3sm:max-lg:w-[60px] rounded-[20px]'
              color='default'
              aria-label='open menu'
              onClick={() => dispatch(openBurger())}
            >
              <BurgerMenuSvg />
            </Button>
        )}
            <div className='3sm:max-md:hidden w-full'>
              <SearchBar />
            </div>

        <nav className='flex flex-nowrap ml-auto gap-[10px]'>
          <Link href="/likes" passHref>
            <Button
              className={`${getActiveClass(styles.active, "/likes")}, w-full h-full rounded-[20px]`}
              color="default"
              aria-label="likes"
            >
              <LikeSvg />
            </Button>
          </Link>

          <Link href="/favourites" passHref>
            <Button
              className={`${getActiveClass(styles.active, "/favourites")}, w-full h-full rounded-[20px]`}
              color="default"
              aria-label="favourites"
            >
              <FavoriteHeartSvgEmpty />
            </Button>
          </Link>

          <Link href="/dislikes" passHref>
            <Button
              className={`${getActiveClass(styles.active, "/dislikes")}, , w-full h-full rounded-[20px]`}
              color="default"
              aria-label="dislikes"
            >
              <DislikeSvg />
            </Button>
          </Link>
        </nav>

        {screenWidth < 1024 && (
          <>
            <div className='w-full md:hidden'>
              <SearchBar />
            </div>
          </>
        )}
      </header>

      
        <BurgerMenu className="bg-white-soft dark:bg-black">
          <div className="p-[20px]">
            <div className='w-full flex justify-between mb-[33%]'>
              <Logo
                className='mr-auto'
              />
              <div className='flex'>
                <ThemeToggler />
                <Button
                  className='h-[60px] w-[60px] ml-[10px] !rounded-[20px]'
                  color='default'
                  aria-label='close menu'
                  onClick={() => dispatch(closeBurger())}
                >
                  <CloseSvg />
                </Button>
              </div>
            </div>
            <div>
              <Navigation 
                className="flex justify-evenly sm:block" 
              />
            </div>
          </div>
        </BurgerMenu>
    </>
  );
};