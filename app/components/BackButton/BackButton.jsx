'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Button from '../ui/Button/Button';
import { LeftArrowSvg } from '@public/assets/svg';

const BackButton = ({ ...props }) => {
  const router = useRouter();
  const backButtonStyles = `${props.className || ''}`

  return (
		<>
			{router.pathname !== '/' && (
				<Button
					className={`${backButtonStyles} rounded-[10px]`}
					color='primarySoft'
          onClick={() => router.back()}
					aria-label='back'
					{...props}
				>
					<LeftArrowSvg />
				</Button>
			)}
		</>
  )
}

export default BackButton