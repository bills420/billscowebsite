import React from 'react';
import VideoBackground from '../components/common/VideoBackground';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import PartnerLogos from '../components/home/PartnerLogos';

const Home = () => {
  return (
    <>
      <div className="h-screen relative">
        <VideoBackground 
          videoUrl="https://player.vimeo.com/external/477721941.hd.mp4?s=1cd53e41e1b3707e7d0c8ef0f2d8a2c6e0c7104e&profile_id=175"
          overlayOpacity={0.6}
        >
          <Hero />
        </VideoBackground>
      </div>
      <Services />
      <PartnerLogos />
    </>
  );
};

export default Home;