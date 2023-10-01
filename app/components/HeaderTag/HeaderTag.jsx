'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

const HeaderTag = ({ color = "primary", children, ...props }) => {
  const path = usePathname();
  const pathName = path.slice(1)

  const tagClasses = `
    h-full py-[5px] px-[30px] rounded-[10px] text-[20px] tracking-[2px] uppercase font-medium;
    ${props.className || ''}
    ${color === 'primary' ? 'bg-primary text-white' : ''}
    ${color === 'primarySoft' ? 'bg-primary-soft text-primary gdark:bg-primary-dark' : ''}
  `
  return (
    <span className={tagClasses} {...props}>
      {pathName}
    </span>
  )
}

export default HeaderTag