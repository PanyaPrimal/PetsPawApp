import React from 'react'
import BackButton from '../BackButton/BackButton'
import HeaderTag from '../HeaderTag/HeaderTag'

const HeaderContent = () => {
  return (
    <div className='mb-[20px] w-full flex items-center gap-[10px]'>
      <BackButton />
      <HeaderTag color="primary"></HeaderTag>
    </div>
  )
}

export default HeaderContent