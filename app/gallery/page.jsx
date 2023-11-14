'use client'

import React, { useState } from 'react'
import PageContainer from '@app/components/PageContainer/PageContainer'
import HeaderContent from '@app/components/HeaderContent/HeaderContent'
import Button from '@app/components/ui/Button/Button'
import { CloseSvg, LeftArrowSvg, RefreshSvg, UploadSvg } from '@public/assets/svg'
import styles from './Gallery.module.scss';
import Select from '@app/components/ui/Select/select';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { useQuery } from '@tanstack/react-query';
import { BreedService } from '@service/breed.service';
import splitIntoChunks from '@utils/splitIntoChunks';
import Loader from '@app/components/ui/Loader/Loader';
import Grid from '@app/components/Grid/Grid';
import GridItem from '@app/components/Grid/GridItem';
import UserLogItem from '@app/components/UserLog/UserLogItem';
import UploadPage from './upload/page'
import dynamic from 'next/dynamic'
import { closeModal, openModal } from '@app/store/reducers/modalSlice'


const DynamicModal = dynamic(() => import('../components/ui/Modal/Modal'));

const GalleryPage = () => {
  const dispatch = useAppDispatch();

  const [options, setOptions] = useState({
		order: 'RANDOM',
		mime_types: 'all',
		breed_ids: '',
		limit: 5,
		page: 0,
	});

  const breeds = useQuery({
		queryKey: ['breeds'],
		queryFn: () => BreedService.getBreeds({}, 'data'),
		select: (data) => data.filter((breed) => breed.image),
	});

	const {
		data,
		isLoading: ImageLoading,
		isFetching,
		refetch,
	} = useQuery({
		queryKey: ['images', options.page],
		queryFn: () =>
			ImageService.getImages(
				{
					...options,
					has_breeds: options.breed_ids ? 1 : 0,
				},
				'data'
			),
		select: (data) => splitIntoChunks(data, 10),
	});

	const imageHeaders = useQuery({
		queryKey: ['imagesHeaders', options.page],
		queryFn: () =>
			ImageService.getImages(
				{
					...options,
					has_breeds: options.breed_ids ? 1 : 0,
					order: 'ASC',
				},
				'headers'
			),
	});

	const isLoading =
		ImageLoading ||
		isFetching ||
		breeds.isLoading ||
		breeds.isFetching ||
		imageHeaders.isLoading ||
		imageHeaders.isFetching;

	const onSubmit = (e) => {
		e.preventDefault();

		setOptions({ ...options, page: 0 });
		refetch();
		imageHeaders.refetch();
	};

  return (
    <>
      <PageContainer isGalleryPage className='flex flex-row flex-wrap'>
        <div className='flex flex-wrap justify-between gap-[10px] sm:flex-nowrap'>
          <HeaderContent className='3sm:mb-[15px] lg:mb-[20px]'/>
          <Button
            className='h-[40px] 3sm:w-full rounded-[10px] sm:max-w-[143px]'
            color='primarySoft'
            disabled={isLoading}
            onClick={() => dispatch(openModal())}
          >
            <UploadSvg />
            <span>upload</span>
          </Button>
        </div>

        <form 
          className={styles.gallery__options} 
          onSubmit={onSubmit}
        >
            <div>
              <div className={styles.gallery__options_title}>
                order
              </div>
              <Select
                className={styles.gallery__options_select}
                value={options.order}
                onChange={(e) =>
                  setOptions({
                    ...options,
                    order: e.target.value['order'],
                  })
                }
                disabled={isLoading}
              >
                <option value='RANDOM'>Random</option>
                <option value='ASC'>Ascending</option>
                <option value='DESC'>Descending</option>
              </Select>
            </div>
            <div>
              <div className={styles.gallery__options_title}>
                type
              </div>
              <Select
                className={styles.gallery__options_select}
                value={options.mime_types}
                onChange={(e) =>
                  setOptions({
                    ...options,
                    mime_types: e.target
                      .value['mime_types'],
                  })
                }
                disabled={isLoading}
              >
                <option value='all'>All</option>
                <option value='gif'>Gif</option>
                <option value='jpg'>Jpg</option>
                <option value='png'>Png</option>
              </Select>
            </div>
            <div>
              <div className={styles.gallery__options_title}>
                breed
              </div>
              <Select
                className={styles.gallery__options_select}
                value={options.breed_ids}
                onChange={(e) =>
                  setOptions({
                    ...options,
                    breed_ids: e.target.value,
                  })
                }
                disabled={isLoading}
              >
                <option value=''>All</option>
                {breeds.data?.map((breed) => (
                  <option key={breed.id} value={breed.id}>
                    {breed.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <div className={styles.gallery__options_title}>
                limit
              </div>
              <div className='flex gap-[10px] 3sm:flex-wrap sm:flex-nowrap'>
                <Select
                  className={styles.gallery__options_select}
                  value={options.limit}
                  onChange={(e) =>
                    setOptions({
                      ...options,
                      limit: +e.target.value,
                    })
                  }
                  disabled={isLoading}
                >
                  <option value='5'>5 items per page</option>
                  <option value='10'>10 items per page</option>
                  <option value='15'>15 items per page</option>
                  <option value='20'>20 items per page</option>
                </Select>
                <Button
                  color='default'
                  className='!h-[40px] dark:!bg-black 3sm:min-w-full sm:!min-w-[40px] rounded-[10px]'
                  disabled={isLoading}
                >
                  <RefreshSvg />
                </Button>
              </div>
            </div>
          </form>

          {isLoading ? (
            <Loader className='!block !mt-[20px] !mx-auto' />
          ) : data?.length ? (
            data?.map((grid, i) => (
              <Grid className='mt-[20px] w-full' key={i}>
                {grid.map((item) => (
                  <GridItem component='div' key={item.id}>
                   <img
                      src={item.url}
                      alt={item.id}
                      className='h-full w-full object-cover'
                    ></img>
                  </GridItem>
                ))}
              </Grid>
            ))
          ) : (
            <UserLogItem className='mt-[20px]' text='No item found' />
          )}

          {!isLoading && (
            <div className='mt-[20px] flex items-center justify-evenly'>
              <Button
                className={'rounded-[10px]'}
                color='primarySoft'
                disabled={isLoading || options.page === 0}
                onClick={() =>
                  setOptions({
                    ...options,
                    page: options.page - 1,
                  })
                }
              >
                <LeftArrowSvg /> prev
              </Button>
              <Button
                className={'rounded-[10px]'}
                color='primarySoft'
                disabled={
                  isLoading ||
                  options.page ===
                    Math.floor(
                      imageHeaders?.data?['pagination-count'] :
                        options.limit
                    )
                }
                onClick={() =>
                  setOptions({
                    ...options,
                    page: options.page + 1,
                  })
                }
              >
                next <LeftArrowSvg className='rotate-180' />
              </Button>
            </div>
          )}
        </PageContainer>

        <DynamicModal
          className='flex p-[30px] sm:p-[20px]'
          aria-modal={true}
        >
          <PageContainer
            className='ml-auto !mt-0 !w-2/4 !bg-white-soft dark:!bg-black-soft md:!w-full'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-end'>
              <Button
                className='dark:!bg-[#333333]'
                color='default'
                onClick={() => dispatch(closeModal())}
              >
                <CloseSvg />
              </Button>
            </div>
            <UploadPage />
          </PageContainer>
        </DynamicModal>
		</>
  )
}

export default GalleryPage;