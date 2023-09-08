'use client'

import { useTheme } from 'next-themes';
import { usePathname } from "next/navigation"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./NavItem.module.scss";
import NavButton from "../Button/button";

const NavItem = ({
  path,
  imageSrc,
  imageAlt,
  width,
  height,
  buttonText,
  background,
  isFirstImage
}) => {
  const { theme } = useTheme();
  const router = usePathname();

  return (
    <Link 
      href={path}
      className={`
        ${styles.navItem} 
        ${router === path ? styles['navItem--active'] : '' }
        ${theme === 'dark' ? styles['theme-dark'] : styles['theme-light'] }
      `}
    >
        <div 
          className={`
            ${styles.navItemImage}
            ${isFirstImage ? styles['navItemImage--firstImage'] : ''}
          `}
          style={{ background: background }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={width}
            height={height}
          />
        </div>
      <NavButton
        className={styles.navButton}
        buttonText={buttonText}
      />
    </Link>
  );
}

export default NavItem;