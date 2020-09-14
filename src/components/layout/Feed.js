import React from 'react';
import '../../Feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';

import jersey from '../../assets/images/Jersey.jpg';
import jaden from '../../assets/images/Jaden.jpg';
import melanie from '../../assets/images/Melanie.jpg';

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post
        profilePic={jersey}
        message={"It's so Cool !"}
        timestamp='This is a timestamp'
        username='Shernille Licud'
        image={jersey}
      />
      <Post
        profilePic={jaden}
        message={"It's so Cool !"}
        timestamp='This is a timestamp'
        username='Jaden Licud'
        image={jaden}
      />
      <Post
        profilePic={melanie}
        message={"It's so Cool !"}
        timestamp='This is a timestamp'
        username='Melanie Agner'
        image={melanie}
      />
    </div>
  );
};

export default Feed;
