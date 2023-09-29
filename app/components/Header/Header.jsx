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
      <Button
        className='hidden
        bg-white dark:bg-black-soft '
        color='default'
        aria-label='open menu'
        onClick={''}
      >
        <BurgerMenuSvg />
      </Button>

      <nav className="ml-auto child:mr-[10px] last:mr-0">
        <Link href="/likes" passHref>
          <Button
            className={getActiveClass(classes.active, "/likes")}
            color="default"
            aria-label="likes"
            component="a"
          >
            <LikeSvg />
          </Button>
        </Link>

        <Link href="/favourites" passHref>
          <Button
            className={getActiveClass(classes.active, "/favourites")}
            color="default"
            aria-label="favourites"
            component="a"
            onClick={() => console.log(router.pathname)}
          >
            <FavoriteHeartSvgEmpty />
          </Button>
        </Link>

        <Link href="/dislikes" passHref>
          <Button
            className={getActiveClass(classes.active, "/dislikes")}
            color="default"
            aria-label="dislikes"
            component="a"
          >
            <DislikeSvg />
          </Button>
        </Link>
      </nav>
      <div className='w-full'>
        <SearchBar />
      </div>
    </header>
  );
};