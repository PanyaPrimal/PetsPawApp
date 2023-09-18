'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

export const HeaderNavigation = () => {

  const router = usePathname();

  return (
    <nav className='flex w-full content-end'>
      <ul className='flex w-full content-around'>
        <li>
          <Link href="/likes">Likes</Link>
        </li>
        <li>
          <Link href="/favourites">Favourites</Link>
        </li>
        <li>
          <Link href="/dislikes">Dislikes</Link>
        </li>
      </ul>
    </nav>
  )
}
