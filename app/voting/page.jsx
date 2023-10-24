'use client'

import { useEffect, useState } from 'react';
import { ImageService } from '@service/image.service';
import { VoteService } from '@service/vote.service';
import PageContainer from '@app/components/PageContainer/PageContainer';
import Button from '@app/components/ui/Button/Button';
import styles from './Voting.module.scss'
import { DislikeSvg, FavoriteHeartSvgEmpty, LikeSvg } from '@public/assets/svg';
import Image from 'next/image';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from '@app/components/ui/Loader/Loader';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { FavouriteService } from '@service/favourite.service';
import UserLog from '@app/components/UserLog/UserLog';
import { setLog } from '@app/store/reducers/userLogSlice';
import { setIsFavourite } from '@app/store/reducers/isFavouriteSlice';

const VotingPage = () => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState(null);
  const [voteValue, setVoteValue] = useState(0);
  const { isPending, error, data } = useQuery({queryFn: () => 
    ImageService.getImages({limit : 1}).then(response => response)});

  const fetchRandomImage = async () => {
    try {
      const [randomImage] = await ImageService.getImages({ limit: 1 });
      if (randomImage) {
        console.log('Fetched image:', randomImage);
        setImage(randomImage);
        setVoteValue(0);
      } else {
        console.error('No images found.');
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };  
  
  useEffect(() => {
      console.log('data income', data, isPending, error);
     fetchRandomImage();
  }, [isPending]);

  const handleVote = async (value) => {
    try {
      if (image) {
        console.log('Voting with value:', value);
        const response = await VoteService.setVote({
          image_id: image.id,
          value: value,
        });
        console.log('Vote response:', response);

        setVoteValue(response.value);

        fetchRandomImage();
      }
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <PageContainer>
      {image && (
        <div className={styles.voting}>
          <div className={styles.voting__image}>
            <Image 
              src={image?.url ? image.url : ""}
              alt="Cat"
              width={360}
              height={360}
            />
          </div>
          <div className={styles.voting__buttons}>
            <Button
              aria-label='vote like'
              onClick={() => handleVote(1)}
            >
              <LikeSvg color='white'/>
            </Button>

            <Button
              aria-label='open menu'
              onClick={''}
            >
              <FavoriteHeartSvgEmpty />
            </Button>

            <Button
              aria-label='vote dislike'
              onClick={() => handleVote(-1)}
            >
              <DislikeSvg />
            </Button>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default VotingPage;
