'use client'

import React from 'react';
import PageContainer from '@app/components/PageContainer/PageContainer';
import { useQueries, useQuery } from "@tanstack/react-query";
import { BreedService } from '@service/breed.service';
import { ImageService } from '@service/image.service';
import splitIntoChunks from '@utils/splitIntoChunks';
import Loader from '@app/components/ui/Loader/Loader';
import Grid from '@app/components/Grid/Grid';
import GridItem from '@app/components/Grid/GridItem';
import Image from 'next/image';
import Link from 'next/link';
import UserLogItem from '@app/components/UserLog/UserLogItem';

const SearchPage = ({ name }) => {
  const breed = useQuery({
    queryKey: ["breed", name],
    queryFn: () => BreedService.getBreedByName(name),
    select: (data) => data.filter((breed) => breed.reference_image_id),
  })
  const breeds = !breed.isLoading || !breed.isFetching ? breed.data : [];

  const images = useQueries({
    queries: breeds.map((breed) => {
      return {
        queryKey: ["images", breed.reference_image_id],
				queryFn: () => ImageService.getImageById(breed.reference_image_id),
				enabled: !!breed,
      }
    })
  })

  const data = splitIntoChunks(
		images.map((item) => item.data),
		10
	);

  const isLoading =
    images.some((item) => item.isLoading) ||
    images.some((item) => item.isFetching) ||
    breed.isLoading ||
    breed.isFetching;

  return (
    <PageContainer>
      {isLoading ? null : (
        <div className="text-gray-dark">
          Search results for:{" "}
          <span className="mb-[20px] font-medium text-black dark:text-white">
            {name}
          </span>
        </div>
      )}

      {isLoading ? (
        <Loader centered />
      ) : breeds.length ? (
        data.map((grid, i) => (
          <Grid className="mt-[20px] w-full" key={i}>
            {grid.map((item) => (
              <Link
                href={`../breeds/${item?.breeds[0]?.id}`}
                passHref
                key={item.id}
              >
                <GridItem
                  component="a"
                  tabIndex="1"
                  isHoverable
                  title={item.breeds[0].name}
                >
                  <Image
                    src={item.url || ""}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={item.url}
                    alt={item.breeds[0].name}
                  />
                </GridItem>
              </Link>
            ))}
          </Grid>
        ))
      ) : (
        <UserLogItem className="mt-[20px]" text="No item found" />
      )}
    </PageContainer>
  );
};

export default SearchPage;