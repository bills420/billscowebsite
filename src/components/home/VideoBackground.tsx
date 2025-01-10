import React from 'react';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 via-deep-black/50 to-deep-black z-10" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source 
          src="https://player.vimeo.com/external/477721941.hd.mp4?s=1cd53e41e1b3707e7d0c8ef0f2d8a2c6e0c7104e&profile_id=175" 
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;