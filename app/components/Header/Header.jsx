
import React from 'react'
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation'

export const Header = () => {
  return (
    <header className='
      h-[60px] 
      flex items-center content-between
      bg-white dark:bg-black-soft 
      ml-auto mb-[10px] rounded-[20px]'
    >
      <div className='w-full'>search bar</div>
      <HeaderNavigation/>
    </header>
  )
}
