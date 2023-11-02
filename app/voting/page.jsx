'use client'

import { useEffect } from 'react';
import { ImageService } from '@service/image.service';
import { VoteService } from '@service/vote.service';
import { FavouriteService } from '@service/favourite.service';
import PageContainer from '@app/components/PageContainer/PageContainer';
import Button from '@app/components/ui/Button/Button';
import styles from './Voting.module.scss'
import { DislikeSvg, FavoriteHeartSvgEmpty, FavoriteHeartSvgFilled, LikeSvg } from '@public/assets/svg';
import Image from 'next/image';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { setLog } from '@app/store/reducers/userLogSlice';
import { setIsFavourite } from '@app/store/reducers/isFavouriteSlice';
import Loader from '@app/components/ui/Loader/Loader';
import UserLog from '@app/components/UserLog/UserLog';

const VotingPage = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.id);
	const { isFavourite, favouriteId } = useAppSelector(
		(state) => state.isFavourite
	);

  const { data, isLoading, isFetching } = useQuery({
		queryKey: ["image"],
		queryFn: () =>
			ImageService.getImages({
				limit: 1,
			}),
		refetchOnMount: false,
	});

	const setVote = useMutation({
		mutationFn: ({ image_id, sub_id, value }) =>
			VoteService.setVote({
				image_id,
				sub_id,
				value,
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["image"] });
		},
		onMutate: () => {
			dispatch(setIsFavourite({ value: false, id: null }));
		},
	});

  
	const setFavourite = useMutation({
		mutationFn: ({ image_id, sub_id }) =>
			FavouriteService.setFavourite({
				image_id,
				sub_id,
			}),
		onSuccess: () => {
			dispatch(
				setIsFavourite({
					value: true,
				})
			);
			dispatch(
				setLog({
					createdAt: `${new Date().getHours()}:${new Date().getMinutes()}`,
					imageId: data[0].id,
					message: "was added to Favourites",
					value: "favourite",
				})
			);
		},
	});

	const removeFavourite = useMutation({
		mutationFn: ({ favourite_id }) =>
			FavouriteService.removeFavourite({
				favourite_id,
			}),
		onSuccess: () => {
			dispatch(setIsFavourite({ value: false, id: null }));
			dispatch(
				setLog({
					createdAt: `${new Date().getHours()}:${new Date().getMinutes()}`,
					imageId: data[0].id,
					message: "was removed from Favourites",
				})
			);
		},
	});

	const voteHandler = (value) => {
		setVote.mutate({
			image_id: data[0].id,
			sub_id: id,
			value: value,
		});

		if (value === 1) {
			dispatch(
				setLog({
					createdAt: `${new Date().getHours()}:${new Date().getMinutes()}`,
					imageId: data[0].id,
					message: "was added to Likes",
					value: "like",
				})
			);
		} else {
			dispatch(
				setLog({
					createdAt: `${new Date().getHours()}:${new Date().getMinutes()}`,
					imageId: data[0].id,
					message: "was added to Dislikes",
					value: "dislike",
				})
			);
		}
	};
  
	const loading = isLoading || isFetching || setVote.isLoading;

	useEffect(() => {
		dispatch(
			setIsFavourite({
				value: isFavourite,
				id: setFavourite.data?.id ? setFavourite.data?.id : favouriteId,
			})
		);
	}, [setFavourite.data]);
  
  return (
    <PageContainer>
        <div className={styles.voting}>
          <div className={styles.voting__image}>
            {loading ? (
              <Loader/>
            ) : (
              <Image 
                src={data?.[0].url ? data?.[0].url : ""}
                alt="voting cat image"
                height={560}
                width={560}
                placeholder="blur"
                blurDataURL={data?.[0].url ? data?.[0].url : ""}
              />
            )}
          </div>

          <div className={styles.voting__buttons}>
            <Button
              aria-label='vote like'
              disabled={
                loading ||
                setFavourite.isLoading ||
                removeFavourite.isLoading
              }
              onClick={() => {
                voteHandler(1);
              }}
            >
              <LikeSvg color='white'/>
            </Button>

            <Button
              aria-label='favourite'
              disabled={
                loading ||
                setFavourite.isLoading ||
                removeFavourite.isLoading
              }
              onClick={() => {
                if (isFavourite) {
                  removeFavourite.mutate({
                    favourite_id: setFavourite.data?.id
                      ? setFavourite.data?.id
                      : favouriteId,
                  });
                } else {
                  setFavourite.mutate({
                    image_id: data[0].id,
                    sub_id: id,
                  });
                }
              }}
            >
              {setFavourite.isLoading || removeFavourite.isLoading ? (
                <Loader
                  color="white"
                  className="!h-[30px] !w-[30px]"
                />
              ) : isFavourite ? (
                <FavoriteHeartSvgFilled />
              ) : (
                <FavoriteHeartSvgEmpty />
              )}
            </Button>

            <Button
              aria-label='vote dislike'
              disabled={
							loading ||
							setFavourite.isLoading ||
							removeFavourite.isLoading
              }
              onClick={() => {
                voteHandler(0);
              }}
            >
              <DislikeSvg />
            </Button>
          </div>
        </div>

        <UserLog className="mt-[50px]" />
    </PageContainer>
  );
};

export default VotingPage;
