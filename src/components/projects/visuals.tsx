import React, { useState } from 'react';
import img1 from './visuals/PURPLE RED AND WHITE DC DELEGATE.png';
import img2 from './visuals/FFDC LOGO 2 - FONT 2 (1).png';
import img3 from './visuals/IMG_0026.jpg';
import img4 from './visuals/IMG_4481-01.jpeg';
import img5 from './visuals/IMG_4485-01.jpeg';
import img6 from './visuals/IMG_20230612_124540_842.jpg';
import img7 from './visuals/IMG_20230612_124541_150.jpg';
import img8 from './visuals/img4.png';
import img9 from './visuals/IMG_3971.jpg';

export interface VisualsProps {
    className?: string;
}

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9
];

export const previousImage = (currentImage: number) => {
    return (currentImage - 1 + images.length) % images.length;
};

export const nextImage = (currentImage: number) => {
    return (currentImage + 1) % images.length;
};

export const Visuals: React.FC<VisualsProps> = ({ className }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePreviousImage = () => {
        setCurrentImage(previousImage(currentImage));
    };

    const handleNextImage = () => {
        setCurrentImage(nextImage(currentImage));
    };
    return (
        <div className="m-auto relative flex-row align-center">
            <div className="w-[100%] m-auto video-player-wrapper flex flex-row transition-all">
                <button onClick={handlePreviousImage} className="h-14 mr-2 m-auto bg-secondary bg-opacity-[60%] hover:bg-opacity-[100%] rounded-full p-2 hover:scale-110 hover:shadow-1 hover:shadow-tertiary transition-all">
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
                <img
                    className="border-tertiary max-h-[70vh] border overflow-scroll rounded-2xl shadow-1 shadow-tertiary transition-all z-0"
                    src={images[currentImage]}
                    title={`Web page ${currentImage}`}
                />
                <button onClick={handleNextImage} className="ml-2 h-14 m-auto bg-secondary bg-opacity-[60%] hover:bg-opacity-[100%] rounded-full p-2 hover:scale-110 hover:shadow-1 hover:shadow-tertiary transition-all">
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
