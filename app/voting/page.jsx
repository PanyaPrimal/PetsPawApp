'use client'

import { useEffect, useState } from 'react';
import { ImageService } from '@service/image.service';
import { VoteService } from '@service/vote.service';

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
    <div>
      <h1>Voting Page</h1>
      {image && (
        <div>
          <h2>Image</h2>
          <img src={image.url} alt="Cat" />
          <div>
            <button onClick={() => handleVote(1)}>Up</button>
            <button onClick={() => handleVote(-1)}>Down</button>
          </div>
          <p>Current Vote: {voteValue}</p>
        </div>
      )}
      <button onClick={fetchRandomImage}>Load Another Image</button>
    </div>
  );
};

export default VotingPage;
