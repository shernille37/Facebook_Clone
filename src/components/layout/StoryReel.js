import React from 'react';
import Story from '../Story';
import '../../StoryReel.css';
import jersey from '../../assets/images/Jersey.jpg';
import melanie from '../../assets/images/Melanie.jpg';
import jaden from '../../assets/images/Jaden.jpg';
import gina from '../../assets/images/Carriza.jpg';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story image={jersey} profileSrc={jersey} title={'Shernille Licud'} />
      <Story image={melanie} profileSrc={melanie} title={'Melanie Agner'} />
      <Story image={jaden} profileSrc={jaden} title={'Jaden Licud'} />
      <Story image={gina} profileSrc={gina} title={'Gina Tanedo'} />
    </div>
  );
};

export default StoryReel;
