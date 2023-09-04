'use client'
import { usePathname } from "next/navigation"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.item.module.css";
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
  const router = usePathname();

  return (
    <Link 
      href={path}
      className={`${styles.navItem} ${router === path ? styles.active : '' }`}
    >
        <div 
          className={`${styles.navItemImage}`}
          style={{ background: background }}
        >
          <Image
            className={isFirstImage ? styles.firstImage : ''}
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