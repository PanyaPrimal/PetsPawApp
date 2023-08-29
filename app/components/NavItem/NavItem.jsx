'use client'

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
  return (
    <Link 
      href={path}
      className={`${styles.navItem}`}
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
      <NavButton buttonText={buttonText}/>
    </Link>
  );
}

export default NavItem;