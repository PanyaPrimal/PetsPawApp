import PageContainer from './components/PageContainer/PageContainer'
import React from 'react'

const NotFound = () => {
  return (
    <PageContainer>
      <span className='w-full h-full text-4xl
       text-primary flex justify-center pt-[33%]'
      >
        404. This page doesn't exist!
      </span>
    </PageContainer>
  )
}

export default NotFound