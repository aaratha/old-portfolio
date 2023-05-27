import { Link, Outlet } from 'react-router-dom';
import { previousImage, nextImage } from './projects/videos';


export interface ProjectsProps {
    className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className='flex flex-col m-auto border'>
            <Outlet />
            <div className='flex flex-row text-white w-full ml-6 mr-6 justify-between text-lg'>
                <button onClick={previousImage} className="bg-black text-white rounded-full p-2 border hover:scale-125 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <Link to="/projects/videos">
                    <button className='border pl-16 pr-16 p-1 hover:pl-20 hover:pr-20 transition-all rounded-3xl hover:rounded-none'>Videos</button>
                </Link>
                <Link to="/projects/visuals">
                    <button className='border pl-16 pr-16 p-1 hover:pl-20 hover:pr-20 transition-all rounded-3xl hover:rounded-none'>Visuals</button>
                </Link>
                <Link to="/projects/websites">
                    <button className='border pl-16 pr-16 p-1 hover:pl-20 hover:pr-20 transition-all rounded-3xl hover:rounded-none'>Websites</button>
                </Link>
                <button className="bg-black text-white rounded-full p-2 border hover:scale-125 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}