import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const images = [
    'https://www.youtube.com/embed/TBMEBSfnJbQ',
    'https://www.youtube.com/embed/TybreaCetEA',
    'https://www.youtube.com/embed/OcpRc_LU-e0',
    'https://www.youtube.com/embed/buUa9jiD9os',
    'https://www.youtube.com/embed/GSU93sFdRls',
];

export interface VideosProps {
    className?: string;
}

export const previousImage = (currentImage: number) => {
    return (currentImage - 1 + images.length) % images.length;
};

export const nextImage = (currentImage: number) => {
    return (currentImage + 1) % images.length;
};

export const Videos = ({ className }: VideosProps) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePreviousImage = () => {
        setCurrentImage(previousImage(currentImage));
    };

    const handleNextImage = () => {
        setCurrentImage(nextImage(currentImage));
    };
    return (
        <div className="relative flex-row align-center">
            <div className="flex flex-row transition-all video-player-wrapper">
                <button onClick={handlePreviousImage} className="h-14 mr-2 m-auto bg-black bg-opacity-[60%] hover:bg-opacity-[100%] text-white rounded-full p-2 border hover:scale-110 hover:shadow hover:shadow-white transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <iframe
                    className="border rounded-2xl w-[100%] shad transition-all video-player-iframe z-0"
                    src={images[currentImage]}
                    title={`Web page ${currentImage}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    sandbox="allow-scripts allow-same-origin"
                    allowFullScreen
                />
                <button onClick={handleNextImage} className="ml-2 h-14 m-auto bg-black bg-opacity-[60%] hover:bg-opacity-[100%] text-white rounded-full p-2 border hover:scale-110 hover:shadow hover:shadow-white transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
            
        </div>
    );
};
