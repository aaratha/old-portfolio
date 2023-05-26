import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const images = [
    "https://www.youtube.com/embed/TBMEBSfnJbQ",
    "https://www.youtube.com/embed/TybreaCetEA",
    "https://www.youtube.com/embed/OcpRc_LU-e0",
    "https://www.youtube.com/embed/buUa9jiD9os",
    "https://www.youtube.com/embed/GSU93sFdRls"
]

export interface VideosProps {
    className?: string;
}

export const Videos = ({ className }: VideosProps) => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const previousImage = () => {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    };
  
    const nextImage = () => {
      setCurrentImage((currentImage + 1) % images.length);
      if (currentImage === images.length - 1) {
        setCurrentImage(0);
        }
    };
    return (
        <div className="relative flex-row w-[90vw] md:w-[50vw] align-center border">
            <div className="flex flex-row transition-all video-player-wrapper">
                <iframe className='w-[100%] shad transition-all video-player-iframe z-0' src={images[currentImage]} title={`Web page ${currentImage}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                sandbox="allow-scripts allow-same-origin"                allowFullScreen />
            </div>
            <div className="inset-0 flex items-center justify-between p-3 border-t-2 bg-black bg-opacity-[60%]">
                <button onClick={previousImage} className="bg-black text-white rounded-full p-2 border hover:scale-125 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className='flex flex-row text-white w-full ml-6 mr-6 justify-between text-lg'>
                    <button className='border pl-16 pr-16 p-1 hover:scale-110 transition-all hover:border'>Videos</button>
                    <button className='border pl-16 pr-16 hover:scale-110 transition-all hover:border'>Visuals</button>
                    <button className='border pl-16 pr-16 hover:scale-110 transition-all hover:border'>Websites</button>
                </div>
                <button onClick={nextImage} className="bg-black text-white rounded-full p-2 border hover:scale-125 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}