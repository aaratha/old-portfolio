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
        <div className="relative flex-row align-center border">
            <div className="flex flex-row transition-all video-player-wrapper">
                <iframe
                    className="w-[100%] shad transition-all video-player-iframe z-0"
                    src={images[currentImage]}
                    title={`Web page ${currentImage}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    sandbox="allow-scripts allow-same-origin"
                    allowFullScreen
                />
            </div>
        </div>
    );
};
