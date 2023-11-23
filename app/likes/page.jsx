'use client'

import React from 'react';
import PageContainer from '@app/components/PageContainer/PageContainer';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useQuery } from '@tanstack/react-query';
import { VoteService } from '@service/vote.service';
import splitIntoChunks from '@utils/splitIntoChunks';
import Grid from '@app/components/Grid/Grid';
import GridItem from '@app/components/Grid/GridItem';
import UserLogItem from '@app/components/UserLog/UserLogItem';
import Loader from '@app/components/ui/Loader/Loader';
import Image from 'next/image';
import useScreenWidth from '@app/hooks/useScreenWidth';

const LikesPage = () => {
  const width = useScreenWidth();
  const isMobileScreen = width < 640;
  const { id } = useAppSelector((state) => state.id);

	const { data, isLoading, isFetching } = useQuery({
		queryKey: ["likes"],
		queryFn: () =>
			VoteService.getVotes({
				attach_image: 1,
				order: "ASC",
				sub_id: id,
			}),
		select: (data) =>
			splitIntoChunks(
				data.filter((item) => item.value === 1),
				10
			),
	});

  return (
    <PageContainer>
      {isLoading || isFetching ? (
				<Loader 
          centered
          position='centredInGrids'
        />
			) : isMobileScreen && data?.length ? (
				data?.map((grid, i) => (
					<Grid className="mt-[20px] w-full" key={i}>
						{grid.map((item) => (
							<GridItem key={item.id}>
								<Image
									src={item.image.url}
									layout="fill"
									placeholder="blur"
									blurDataURL={item.image.url}
									alt="liked image"
								/>
							</GridItem>
						))}
					</Grid>
				))
			)  : data?.length ? (
				data?.map((grid, i) => (
        <Grid  key={i}>
          {grid.map((item) => (
              <GridItem
              >
								<Image
									src={item.image.url}
									layout="fill"
									placeholder="blur"
									blurDataURL={item.image.url}
									alt="liked image"
								/>
              </GridItem>
						))}
					</Grid>
				))
			) : (
				<UserLogItem text="No item found" />
			)}
    </PageContainer>
  )
}

export default LikesPage;