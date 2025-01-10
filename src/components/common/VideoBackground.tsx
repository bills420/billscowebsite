import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoUrl, 
  overlayOpacity = 0.7,
  children 
}) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-deep-black via-deep-black/50 to-deep-black z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      {children && (
        <div className="relative z-20">
          {children}
        </div>
      )}
    </div>
  );
};

export default VideoBackground;