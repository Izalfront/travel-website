// eslint-disable-next-line no-unused-vars
import React from 'react';

import aeroplane from '../../assets/plane.png';
import video from '../../assets/video.mp4';

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>

        <img src={aeroplane} className="plane" alt="ad" />
      </div>
    </div>
  );
};

export default Home;
