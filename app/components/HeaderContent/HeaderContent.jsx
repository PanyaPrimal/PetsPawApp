import React, { Children } from 'react'
import BackButton from '../BackButton/BackButton'
import HeaderTag from '../HeaderTag/HeaderTag'

const HeaderContent = ({ children, ...props }) => {
  const headerContentClasses = `${props.className || ''}`

  return (
    <div className={`
      mb-[20px] w-fit flex items-center gap-[10px] 
      ${headerContentClasses}
    `}>
      <BackButton />
      <HeaderTag color="primary"></HeaderTag>
      { children }
    </div>
  )
}

export default HeaderContent