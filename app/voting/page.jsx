'use client'

import { useEffect, useState } from 'react';
import { ImageService } from '@service/image.service';
import { VoteService } from '@service/vote.service';
import PageContainer from '@app/components/PageContainer/PageContainer';
import Button from '@app/components/ui/Button/Button';
import styles from './Voting.module.scss'
import { DislikeSvg, FavoriteHeartSvgEmpty, LikeSvg } from '@public/assets/svg';
import Image from 'next/image';

const VotingPage = () => {
  const [image, setImage] = useState(null);
  const [voteValue, setVoteValue] = useState(0);

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
    if (!image) {
      console.log('Fetching random image...');
      fetchRandomImage();
    }
  }, [image]);

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
