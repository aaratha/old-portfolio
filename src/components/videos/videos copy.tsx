export {};
/** 
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const images = [
    <iframe
    width="90%"
    src="https://www.youtube.com/embed/TBMEBSfnJbQ"
    title="knox om pax"
    frameBorder="1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className=''
    ></iframe>,
    <iframe
    width="100%"
    src="https://www.youtube.com/embed/TybreaCetEA"
    title="dreary times (remastered)"
    frameBorder="1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className=''
    ></iframe>,
    <iframe
    width="100%"
    src="https://www.youtube.com/embed/OcpRc_LU-e0"
    title="2814"
    frameBorder="1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className=''
    ></iframe>,
    <iframe
    width="100%"
    src="https://www.youtube.com/embed/buUa9jiD9os"
    title="my superstition"
    frameBorder="1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className=''
    ></iframe>,
    <iframe
    width="100%"
    src="https://www.youtube.com/embed/GSU93sFdRls"
    title="3 months in"
    frameBorder="1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className=''
    ></iframe>
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
    };
    return (
      <div className="relative flex-row w-[80vw] m-auto content-center">
          <img src={images[currentImage -1]} alt="Carousel" className="w-[30%] inline-block" />
          <img src={images[currentImage]} alt="Carousel" className="w-[40%] inline-block" />
          <img src={images[currentImage +1]} alt="Carousel" className="w-[30%] inline-block" />
          <div className="absolute inset-0 flex items-center justify-between">
          <button onClick={previousImage} className="bg-gray-800 text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
          </button>
          <button onClick={nextImage} className="bg-gray-800 text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
          </button>
          </div>
      </div>
    );
  }

*/