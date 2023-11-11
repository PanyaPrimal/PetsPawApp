import React from 'react'
import PageContainer from '@app/components/PageContainer/PageContainer'
import HeaderContent from '@app/components/HeaderContent/HeaderContent'
import Button from '@app/components/ui/Button/Button'
import { UploadSvg } from '@public/assets/svg'

export const metadata = {
  title: 'Gallery',
}

const GalleryPage = () => {
  return (
    <PageContainer isGalleryPage className='flex flex-row flex-wrap'>
      <div className='flex flex-wrap justify-between'>
        <HeaderContent />
        <Button
            className='h-[40px] !px-[30px] 3sm:sm:w-full rounded-[10px] md:2xl:w-[143px]'
            color='primarySoft'
          //  disabled={isLoading}
          //  onClick={() => dispatchEvent(openModal())}
          >
            <UploadSvg />
            <span>upload</span>
          </Button>
        </div>
    </PageContainer>
  )
}

export default GalleryPage;