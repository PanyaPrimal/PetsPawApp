import React from "react";
import { useAppSelector } from "@app/hooks/reduxHooks";

const BurgerMenu = ({ children, ...props }) => {
  const { isBurgerOpen } = useAppSelector((state) => state.burger);

  const burgerClasses = `
    w-full fixed top-0 left-0 w-full h-full z-10 transition-all
    ${isBurgerOpen ? 'visible opacity-100' : 'invisible opacity-0'}
    ${props.className}
  `;

  delete props.className;

  return (
    <div className={burgerClasses} {...props}>
      {children}
    </div>
  );
};

export default BurgerMenu;