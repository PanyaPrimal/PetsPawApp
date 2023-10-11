import React from 'react';
import NavItem from '../NavItem/NavItem';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { closeBurger } from '@app/store/reducers/burgerSlice';

export const Navigation = ({...props}) =>{
  const dispatch = useAppDispatch();

  const handleLinkClick = () => {
    dispatch(closeBurger());
  };

  return (
    <nav className='md:flex justify-around'
      onClick={handleLinkClick}
    >
      <NavItem
        height="124"
        width="100"
        path="/voting"
        imageSrc="/assets/images/voting.png"
        imageAlt="voting"
        buttonText="voting"
        background="#B4B7FF"
        isFirstImage
      />

      <NavItem
        height="117"
        width="163"
        path="/breeds"
        imageSrc="/assets/images/breeds.png"
        imageAlt="breeds"
        buttonText="breeds"
        background="#97EAB9"
      />

      <NavItem
        height="112"
        width="190"
        path="/gallery"
        imageSrc="/assets/images/search.png"
        imageAlt="gallery"
        buttonText="gallery"
        background="#FFD280"
      />
    </nav>
  );
};
