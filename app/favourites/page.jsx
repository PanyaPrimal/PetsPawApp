'use client'

import React from 'react';
import PageContainer from '@app/components/PageContainer/PageContainer';
import { useAppSelector, useAppDispatch } from '@app/hooks/reduxHooks';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { VoteService } from '@service/vote.service';
import { setLog } from '@app/store/reducers/userLogSlice';
import { setIsFavourite } from '@app/store/reducers/isFavouriteSlice';
import useScreenWidth from '@app/hooks/useScreenWidth';
import splitIntoChunks from '@utils/splitIntoChunks';
import Grid from '@app/components/Grid/Grid';
import GridItem from '@app/components/Grid/GridItem';
import UserLog from '@app/components/UserLog/UserLog';
import UserLogItem from '@app/components/UserLog/UserLogItem';
import Loader from '@app/components/ui/Loader/Loader';
import Image from 'next/image';
import { FavouriteService } from '@service/favourite.service';
import Button from '@app/components/ui/Button/Button';
import { FavoriteHeartSvgFilled } from '@public/assets/svg';

const FavouritesPage = () => {
  const width = useScreenWidth();
  const isMobileScreen = width < 640;
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.id);
  const { favouriteId } = useAppSelector((state) => state.isFavourite);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['favourites'],
    queryFn: () => FavouriteService.getFavourites({ sub_id: id }),
    select: (data) => splitIntoChunks(data, 10),
  });

  const removeFavourite = useMutation({
		mutationFn: ({ favourite_id }) =>
			FavouriteService.removeFavourite({ favourite_id }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["favourites"] });
		},
	});

  const removeFavouriteHandler = (item) => {
		removeFavourite.mutate({
			favourite_id: item.id,
		});

    dispatch(
			setLog({
				createdAt: `${new Date().getHours()}:${new Date().getMinutes()}`,
				imageId: item.image_id,
				message: "was removed from Favourites",
			}),
    );

    if (item.id === favouriteId) {
      dispatch(setIsFavourite({ value: false, id: item.id }));
    }
  };

  const isItemLoading = removeFavourite.isLoading || isFetching || isLoading;

  return (
    <PageContainer>
			{isLoading ? (
				<Loader 
          centered
          position='centredInGrids'
        />
			) : isMobileScreen && data?.length ? (
				data?.map((grid, i) => (
					<Grid className="mt-[20px] w-full" key={i}>
						{grid.map((item) => (
							<GridItem
								isHoverable
								tabIndex={0}
								actionButton={
									<Button
										color="default"
										className="h-[40px] w-[40px] rounded-[10px]"
										aria-label="remove from favourite"
										disabled={isItemLoading}
										onClick={() =>
											removeFavouriteHandler(item)
										}
									>
										{isItemLoading &&
										removeFavourite.variables
											?.favourite_id === item.id ? (
											<Loader className="!h-5 !w-5 !border-2" />
										) : (
											<FavoriteHeartSvgFilled className="!fill-primary" />
										)}
									</Button>
								}
								key={item.id}
							>
								<Image
									src={item.image.url}
									layout="fill"
									placeholder="blur"
									blurDataURL={item.image.url}
									alt="favourite image"
								/>
							</GridItem>
						))}
					</Grid>
				))
			) : data?.length ? (
				data?.map((grid, i) => (
					<Grid key={i}>
						{grid.map((item) => (
							<GridItem
								isHoverable
								tabIndex={0}
								actionButton={
									<Button
										color="default"
										className="h-[40px] w-[40px] rounded-[10px]"
										aria-label="remove from favourite"
										disabled={isItemLoading}
										onClick={() =>
											removeFavouriteHandler(item)
										}
									>
										{isItemLoading &&
										removeFavourite.variables
											?.favourite_id === item.id ? (
											<Loader className="!h-5 !w-5 !border-2" />
										) : (
											<FavoriteHeartSvgFilled className="!fill-primary" />
										)}
									</Button>
								}
								key={item.id}
							>
								<Image
									src={item.image.url}
									layout="fill"
									placeholder="blur"
									blurDataURL={item.image.url}
									alt="favourite image"
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

export default FavouritesPage;