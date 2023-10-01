'use client'

import { usePathname } from "next/navigation"
import React from 'react';
import classes from "./Header.module.scss"
import Button from '../ui/Button/Button';
import classNames from "classnames";
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

export const Header = (props) => {
  const screenWidth = useScreenWidth();
  const headerClasses = classNames({
		[classes.header]: true,
		[props.className]: true,
	});

  const router = usePathname();
  
  return (
    <header {...props} className={`
      ${headerClasses}
    `}>
      {screenWidth < 1024 && (
          <Button
            className='3sm:max-lg:w-[60px] rounded-[20px]'
            color='default'
            aria-label='open menu'
            onClick={''}
          >
            <BurgerMenuSvg />
          </Button>
      )}
          <div className='3sm:max-md:hidden w-full'>
            <SearchBar />
          </div>

      <nav className={classNames({
        'flex flex-nowrap ml-auto gap-[10px]': true,
      })}>
        <Link href="/likes" passHref>
          <Button
            className={`${getActiveClass(classes.active, "/likes")}, w-full h-full rounded-[20px]`}
            color="default"
            aria-label="likes"
          >
            <LikeSvg />
          </Button>
        </Link>

        <Link href="/favourites" passHref>
          <Button
            className={`${getActiveClass(classes.active, "/favourites")}, w-full h-full rounded-[20px]`}
            color="default"
            aria-label="favourites"
            onClick={() => console.log(router.pathname)}
          >
            <FavoriteHeartSvgEmpty />
          </Button>
        </Link>

        <Link href="/dislikes" passHref>
          <Button
            className={`${getActiveClass(classes.active, "/dislikes")}, , w-full h-full rounded-[20px]`}
            color="default"
            aria-label="dislikes"
          >
            <DislikeSvg />
          </Button>
        </Link>
      </nav>

      {screenWidth < 1024 && (
        <div className='w-full md:hidden'>
          <SearchBar />
        </div>
      )}
    </header>
  );
};