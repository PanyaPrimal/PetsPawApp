'use client'

import React, { useState } from 'react';
import PageContainer from '@app/components/PageContainer/PageContainer';
import useScreenWidth from "@app/hooks/useScreenWidth";
import Select from '@app/components/ui/Select/select';
import Button from '@app/components/ui/Button/Button';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { BreedService } from '@service/breed.service';
import splitIntoChunks from '@utils/splitIntoChunks';
import { ImageService } from '@service/image.service';
import { AscendSvg, DescendSvg, LeftArrowSvg } from '@public/assets/svg';
import Loader from '@app/components/ui/Loader/Loader';
import Grid from '@app/components/Grid/Grid';
import GridItem from '@app/components/Grid/GridItem';
import UserLogItem from '@app/components/UserLog/UserLogItem';
import HeaderContent from '@app/components/HeaderContent/HeaderContent';

const BreedsPage = () => {
  const width = useScreenWidth();
  const isMobileScreen = width < 640;
  const [options, setOptions] = useState({
    breed: '',
    limit: 5,
    order: 'ASC',
    page: 0,
  })

  const breedsOptions = useQuery({
    queryKey: ['breedsOption'],
    queryFn: () => BreedService.getBreeds({}, 'data'),
    select: (data) => data.filter((breed) => breed.image),
  });
  
  const breeds = useQuery({
    queryKey: ['breeds', options],
    queryFn: () => 
      BreedService.getBreeds(
        {
          limit: options.limit,
          order: options.order,
          page: options.page,
        },
        'data'
      ),
    select: (data) => 
      splitIntoChunks(
        data.filter((breed) => breed.image),
        10
      ),
  });

	const breedsHeaders = useQuery({
		queryKey: ['breedsHeaders', options],
		queryFn: () =>
			BreedService.getBreeds(
				{
					limit: options.limit,
					order: options.order,
					page: options.page,
				},
				'headers'
			),
	});

  const images = useQuery({
    queryKey: ['images', options],
    queryFn: () => 
      ImageService.getImages({
        limit: options.limit,
				order: options.order,
				page: options.page,
        breed_ids: options.breed,
        has_breeds: 1,
      }),
    select: (data) => splitIntoChunks(data, 10),
  });

  const imagesHeaders = useQuery({
    queryKey: ['imagesHeaders', options],
    queryFn: () =>
      ImageService.getImages(
        {
          limit: options.limit,
          order: options.order,
          page: options.page,
          breed_ids: options.breed,
          has_breeds: 1,
        },
        'headers'
      ),
  });
 
  const data = options.breed ? images.data : breeds.data;

  const paginationLimit = Math.floor(
		(options.breed
			? imagesHeaders.data?.['pagination-count']
			: breedsHeaders.data?.['pagination-count']) / options.limit
	);

  const isLoading =
  breedsOptions.isLoading ||
  breedsOptions.isFetching ||
  breeds.isLoading ||
  breeds.isFetching ||
  breedsHeaders.isLoading ||
  breedsHeaders.isFetching ||
  images.isLoading ||
  images.isFetching ||
  imagesHeaders.isLoading ||
  imagesHeaders.isFetching;

  return (
    <PageContainer isBreedsPage className='flex flex-row justify-center content-between gap-[5px] h-[90%]'>
      <div className='flex flex-wrap justify-between'>
        <HeaderContent />
        <Select
            value={options.breed}
            onChange={(e) =>
              setOptions({
                ...options,
                breed: e.target.value,
                page: 0,
              })
            }
            className=''
            disabled={isLoading}
          >
            <option value=''>All Breeds</option>
            {breedsOptions.data?.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </Select>

          <Select
            value={options.limit}
            onChange={(e) =>
              setOptions({
                ...options,
                limit: +e.target.value,
                page: 0,
              })
            }
            className=''
            disabled={isLoading}
          >
            <option value='5'>Limit 5</option>
            <option value='10'>Limit 10</option>
            <option value='15'>Limit 15</option>
            <option value='20'>Limit 20</option>
          </Select>

          <Button
            className='h-[40px] w-fit'
            color='gray'
            aria-label='ascending order'
            onClick={() =>
              setOptions({
                ...options,
                order: 'ASC',
                breed: '',
                page: 0,
              })
            }
            disabled={isLoading}
          >
            <AscendSvg />
          </Button>

          <Button
            className='h-[40px] w-fit'
            color='gray'
            aria-label='descending order'
            onClick={() =>
              setOptions({
                ...options,
                order: 'DESC',
                breed: '',
                page: 0,
              })
            }
            disabled={isLoading}
          >
            <DescendSvg />
          </Button>
      </div>

      {isLoading ? (
				<Loader 
          centered
          position = 'centredInGrids'
        />
			) : isMobileScreen && data?.length ? (
				data.map((grid, i) => (
					<div 
            className='h-[206px] my-[10px]'
            key={i}
          >
						{grid.map((item) => (
							<Link
								key={item.id}
								href={`breeds/${
									options.breed ? item?.breeds[0].id : item.id
								}`}
								passHref
							>
								<GridItem
									component='a'
									isHoverable
									title={
										options.breed
											? item?.breeds[0].name
											: item.name
									}
								>
                  <img 
                    placeholder='blur'
                    src={
											options.breed
												? item.url
												: item?.image.url
										}
                    alt={
											options.breed
												? item?.breeds[0].name
												: item.name
										}
                    blurDataURL={
											options.breed
												? item.url
												: item?.image.url
										}
                    className='h-full w-full object-cover'
                  >
                  </img>
								</GridItem>
							</Link>
						))}
					</div>
				))
			) : data?.length ? (
				data.map((grid, i) => (
					<Grid key={i}>
						{grid.map((item) => (
							<Link
								key={item.id}
								href={`breeds/${
									options.breed ? item?.breeds[0].id : item.id
								}`}
								passHref
							>
								<GridItem
									component='a'
									isHoverable
									title={
										options.breed
											? item?.breeds[0].name
											: item.name
									}
								>
                  <img 
                    placeholder='blur'
                    src={
											options.breed
												? item.url
												: item?.image.url
										}
                    alt={
											options.breed
												? item?.breeds[0].name
												: item.name
										}
                    blurDataURL={
											options.breed
												? item.url
												: item?.image.url
										}
                    className='h-full w-full object-cover'
                  >
                  </img>
								</GridItem>
							</Link>
						))}
					</Grid>
				))
			) : (
				<UserLogItem className='mt-[20px] w-fit' text='No item found' />
			)}

			{!isLoading && (
				<div className='flex justify-center items-center gap-[10px]'>
					<Button
            className={'w-fit rounded-[10px]'}
						color='primarySoft'
						disabled={isLoading || options.page === 0}
						onClick={() =>
							setOptions({ ...options, page: options.page - 1 })
						}
					>
						<LeftArrowSvg /> prev
					</Button>

					<Button
            className={'w-fit rounded-[10px]'}
						color='primarySoft'
						disabled={isLoading || options.page === paginationLimit}
						onClick={() =>
							setOptions({ ...options, page: options.page + 1 })
						}
					>
						next <LeftArrowSvg className='rotate-180' />
					</Button>
				</div>
			)}
    </PageContainer>
  )
}

export default BreedsPage;