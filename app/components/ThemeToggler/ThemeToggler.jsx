'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ThemeEyeClosed, ThemeEyeOpen, ThemeTogglerLeft, ThemeTogglerRight } from '@public/assets/svg'

export const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  
  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='flex items-center mr-[16px] 3sm:max-md:mr-0 cursor-pointer' onClick={toggleTheme}>
      {theme === 'dark' ? (
        <ThemeEyeClosed className={`rounded-[20px] w-6 h-6 bg-[#FFFFFF0D] p-1 bg-opacity-5 mr-[5px]`} />
      ) : (
        <ThemeEyeOpen className={`rounded-[20px] w-6 h-6 bg-white p-1 mr-[5px]`} />
      )}
      {theme === 'dark' ? (
        <ThemeTogglerLeft/>
      ) : (
        <ThemeTogglerRight/>
      )}
    </div>
  )
}