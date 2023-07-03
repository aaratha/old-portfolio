import React, { useState } from 'react';
import img1 from './websites/image.png';
import img2 from './websites/web2.png';

export interface WebsitesProps {
    className?: string;
}

const images = [
    img1, img2
];

const refs = [
    'https://www.wec.education/',
    'https://aaratha.github.io/'
];

export const previousImage = (currentImage: number) => {
    return (currentImage - 1 + images.length) % images.length;
};

export const nextImage = (currentImage: number) => {
    return (currentImage + 1) % images.length;
};

export const Websites: React.FC<WebsitesProps> = ({ className }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePreviousImage = () => {
        setCurrentImage(previousImage(currentImage));
    };

    const handleNextImage = () => {
        setCurrentImage(nextImage(currentImage));
    };
    return (
        <div className="m-auto relative flex-row align-center overflow-hidden">
            <div className="w-[100%] m-auto video-player-wrapper flex flex-row transition-all overflow-hidden ">
                <button onClick={handlePreviousImage} className=" h-14 mr-2 m-auto bg-secondary bg-opacity-[60%] hover:bg-opacity-[100%] rounded-full p-2 hover:scale-110 hover:shadow-1 hover:shadow-tertiary transition-all overflow-hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 overflow-hidden"
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
                <div className='bg-black border-tertiary bg-opacity-50 w-full h-full border overflow-hidden rounded-2xl shadow-1 shadow-tertiary transition-all z-0'>
                    <a href={refs[currentImage]}>
                        <img
                            className="border-tertiary mt-[6%] mb-[6%] hover:mt-0 hover:mb-0 hover:w-full m-auto max-h-[70vh] w-[90%] border overflow-scroll rounded-2xl shadow-1 shadow-tertiary transition-all duration-300 z-0"
                            src={images[currentImage]}
                            title={`Web page ${currentImage}`}
                        />
                    </a>
                </div>
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
